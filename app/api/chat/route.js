import { convertToModelMessages, streamText } from "ai";
import { portfolioSystemPrompt } from "../../data/portfolio";

export const maxDuration = 30;

const MAX_BODY_CHARS = 20000;
const MAX_HISTORY_MESSAGES = 10;
const MAX_TEXT_PART_CHARS = 2500;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 8;

const rateLimitStore = globalThis.__portfolioChatRateLimitStore ?? new Map();
globalThis.__portfolioChatRateLimitStore = rateLimitStore;

function getClientId(req) {
  const forwardedFor = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwardedFor || req.headers.get("x-real-ip") || "anonymous";
}

function checkRateLimit(req) {
  const now = Date.now();
  const clientId = getClientId(req);

  for (const [key, value] of rateLimitStore.entries()) {
    if (value.resetAt <= now) {
      rateLimitStore.delete(key);
    }
  }

  const current = rateLimitStore.get(clientId);

  if (!current) {
    rateLimitStore.set(clientId, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return { limited: false };
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return {
      limited: true,
      retryAfterSeconds: Math.ceil((current.resetAt - now) / 1000),
    };
  }

  current.count += 1;
  return { limited: false };
}

function getTextLength(message) {
  if (!Array.isArray(message?.parts)) return 0;

  return message.parts.reduce((total, part) => {
    if (part?.type !== "text" || typeof part.text !== "string") return total;
    return total + part.text.length;
  }, 0);
}

function limitMessages(messages) {
  return messages.slice(-MAX_HISTORY_MESSAGES).map((message) => ({
    ...message,
    parts: Array.isArray(message.parts)
      ? message.parts
          .filter((part) => part?.type === "text")
          .map((part) => ({
            ...part,
            text:
              typeof part.text === "string"
                ? part.text.slice(0, MAX_TEXT_PART_CHARS)
                : "",
          }))
      : [],
  }));
}

export async function POST(req) {
  const hasGatewayAuth = process.env.AI_GATEWAY_API_KEY || process.env.VERCEL_OIDC_TOKEN;

  if (!hasGatewayAuth) {
    return Response.json(
      { error: "AI assistant is not configured." },
      { status: 503 },
    );
  }

  const rateLimit = checkRateLimit(req);

  if (rateLimit.limited) {
    return Response.json(
      { error: "Too many messages. Please wait a moment before trying again." },
      {
        status: 429,
        headers: {
          "Retry-After": String(rateLimit.retryAfterSeconds),
        },
      },
    );
  }

  let body;

  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (JSON.stringify(body).length > MAX_BODY_CHARS) {
    return Response.json({ error: "Message is too large." }, { status: 413 });
  }

  const messages = Array.isArray(body?.messages) ? body.messages : [];

  if (messages.length === 0) {
    return Response.json({ error: "No messages provided." }, { status: 400 });
  }

  const latestMessage = messages[messages.length - 1];

  if (getTextLength(latestMessage) > MAX_TEXT_PART_CHARS) {
    return Response.json({ error: "Message is too long." }, { status: 413 });
  }

  const result = streamText({
    model: process.env.AI_MODEL || "openai/gpt-5.4-mini",
    system: portfolioSystemPrompt,
    messages: await convertToModelMessages(limitMessages(messages)),
    maxOutputTokens: 700,
    temperature: 0.3,
    maxRetries: 2,
    timeout: {
      totalMs: 30000,
      chunkMs: 8000,
    },
  });

  return result.toUIMessageStreamResponse();
}
