"use client";

import { useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  LuBot,
  LuLoader2,
  LuMessageCircle,
  LuRefreshCw,
  LuSend,
  LuSparkles,
  LuStopCircle,
  LuTrash2,
  LuX,
} from "react-icons/lu";

const suggestions = [
  "What has Loic shipped on Solana?",
  "Tell me about his mobile work",
  "Which project best shows fullstack ownership?",
];

const markdownComponents = {
  a: ({ children, ...props }) => (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      className="break-words font-medium underline underline-offset-4 [overflow-wrap:anywhere]"
    >
      {children}
    </a>
  ),
  p: ({ children }) => <p className="mb-2 break-words last:mb-0 [overflow-wrap:anywhere]">{children}</p>,
  ul: ({ children }) => <ul className="mb-2 ml-4 list-disc space-y-1">{children}</ul>,
  ol: ({ children }) => <ol className="mb-2 ml-4 list-decimal space-y-1">{children}</ol>,
  pre: ({ children }) => (
    <pre className="mb-2 max-w-full overflow-x-auto whitespace-pre-wrap rounded-md bg-white/50 p-2 text-xs dark:bg-slate-950/40">
      {children}
    </pre>
  ),
  code: ({ children }) => (
    <code className="break-words rounded bg-white/50 px-1 py-0.5 text-[0.85em] dark:bg-slate-950/40 [overflow-wrap:anywhere]">
      {children}
    </code>
  ),
};

function getMessageText(message) {
  return (
    message.parts
      ?.filter((part) => part.type === "text")
      .map((part) => part.text)
      .join("") ?? ""
  );
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);
  const triggerRef = useRef(null);
  const { messages, setMessages, sendMessage, status, error, regenerate, stop, clearError } = useChat({
    experimental_throttle: 60,
  });

  const isBusy = status === "submitted" || status === "streaming";

  useEffect(() => {
    if (!isOpen) return;
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, status, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    textareaRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        requestAnimationFrame(() => triggerRef.current?.focus());
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  const submitMessage = async (text) => {
    const trimmedText = text.trim();

    if (!trimmedText || isBusy) return;

    clearError();
    setInput("");
    await sendMessage({ text: trimmedText });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitMessage(input);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      submitMessage(input);
    }
  };

  const clearChat = () => {
    stop();
    clearError();
    setInput("");
    setMessages([]);
  };

  return (
    <>
      {isOpen && (
        <section
          role="dialog"
          aria-label="Portfolio AI assistant"
          className="fixed bottom-24 right-4 z-[1001] flex h-[min(620px,calc(100vh-7rem))] w-[calc(100vw-2rem)] max-w-[430px] flex-col overflow-hidden rounded-lg border border-border-ui bg-bg-app/95 shadow-2xl backdrop-blur-xl dark:border-dark-border-ui dark:bg-dark-bg-app/95 sm:right-6"
        >
          <header className="flex items-center justify-between border-b border-border-subtle px-4 py-3 dark:border-dark-border-subtle">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-bg-solid text-white dark:bg-dark-bg-solid">
                <LuBot aria-hidden="true" className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">Loic AI Assistant</p>
                <p className="truncate text-xs text-text-low dark:text-dark-text-low">
                  Next.js + Vercel AI SDK
                </p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-1">
              {messages.length > 0 && (
                <button
                  type="button"
                  aria-label="Clear chat"
                  title="Clear chat"
                  onClick={clearChat}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-transparent text-text-low transition hover:border-border-ui hover:bg-bg-ui-hover hover:text-text-high dark:text-dark-text-low dark:hover:border-dark-border-ui dark:hover:bg-dark-bg-ui-hover dark:hover:text-dark-text-high"
                >
                  <LuTrash2 aria-hidden="true" className="h-4 w-4" />
                </button>
              )}
              <button
                type="button"
                aria-label="Close chat"
                onClick={() => {
                  setIsOpen(false);
                  requestAnimationFrame(() => triggerRef.current?.focus());
                }}
                className="flex h-9 w-9 items-center justify-center rounded-md border border-transparent text-text-low transition hover:border-border-ui hover:bg-bg-ui-hover hover:text-text-high dark:text-dark-text-low dark:hover:border-dark-border-ui dark:hover:bg-dark-bg-ui-hover dark:hover:text-dark-text-high"
              >
                <LuX aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          </header>

          <div className="flex-1 overflow-y-auto px-4 py-4">
            {messages.length === 0 ? (
              <div className="flex min-h-full flex-col justify-end gap-4">
                <div className="min-w-0 rounded-md border border-border-subtle bg-bg-ui/50 p-4 dark:border-dark-border-subtle dark:bg-dark-bg-subtle">
                  <div className="mb-3 flex min-w-0 items-center gap-2 text-sm font-semibold">
                    <LuSparkles aria-hidden="true" className="h-4 w-4 shrink-0 text-bg-solid" />
                    Ask about Loic&apos;s work
                  </div>
                  <div className="flex min-w-0 flex-wrap gap-2">
                    {suggestions.map((suggestion) => (
                      <button
                        key={suggestion}
                        type="button"
                        onClick={() => submitMessage(suggestion)}
                        className="max-w-full whitespace-normal break-words rounded-md border border-border-ui bg-bg-app px-3 py-2 text-left text-xs leading-5 transition [overflow-wrap:anywhere] hover:bg-bg-ui-hover dark:border-dark-border-ui dark:bg-dark-bg-ui dark:hover:bg-dark-bg-ui-hover"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((message) => {
                  const content = getMessageText(message);
                  const isUser = message.role === "user";

                  if (!content) return null;

                  return (
                    <article
                      key={message.id}
                      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`min-w-0 max-w-[88%] break-words rounded-lg px-3 py-2 text-sm leading-6 [overflow-wrap:anywhere] ${
                          isUser
                            ? "bg-bg-solid text-white dark:bg-dark-bg-solid"
                            : "border border-border-subtle bg-bg-ui/60 text-text-high dark:border-dark-border-subtle dark:bg-dark-bg-subtle dark:text-dark-text-high"
                        }`}
                      >
                        {isUser ? (
                          <p className="whitespace-pre-wrap break-words [overflow-wrap:anywhere]">{content}</p>
                        ) : (
                          <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={markdownComponents}
                          >
                            {content}
                          </ReactMarkdown>
                        )}
                      </div>
                    </article>
                  );
                })}
                {status === "submitted" && (
                  <div className="flex justify-start">
                    <div className="flex items-center gap-2 rounded-lg border border-border-subtle bg-bg-ui/60 px-3 py-2 text-sm text-text-low dark:border-dark-border-subtle dark:bg-dark-bg-subtle dark:text-dark-text-low">
                      <LuLoader2 aria-hidden="true" className="h-4 w-4 animate-spin" />
                      Thinking
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {error && (
            <div className="mx-4 mb-3 rounded-md border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-200">
              <div className="flex min-w-0 items-center justify-between gap-3">
                <span className="min-w-0 break-words [overflow-wrap:anywhere]">Something went wrong. Please try again.</span>
                <button
                  type="button"
                  onClick={() => regenerate()}
                  className="inline-flex items-center gap-1 rounded border border-red-300 px-2 py-1 text-xs font-medium dark:border-red-700"
                >
                  <LuRefreshCw aria-hidden="true" className="h-3 w-3" />
                  Retry
                </button>
              </div>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="border-t border-border-subtle bg-bg-subtle/80 p-3 dark:border-dark-border-subtle dark:bg-dark-bg-subtle/80"
          >
            <div className="flex min-w-0 items-end gap-2 rounded-lg border border-border-ui bg-bg-app p-2 dark:border-dark-border-ui dark:bg-dark-bg-app">
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleKeyDown}
                rows={1}
                maxLength={2500}
                placeholder="Ask about Loic, projects, stack..."
                className="max-h-28 min-h-[40px] min-w-0 flex-1 resize-none break-words bg-transparent px-2 py-2 text-sm outline-none [overflow-wrap:anywhere] placeholder:text-text-low/70 dark:placeholder:text-dark-text-low/70"
                disabled={isBusy}
              />
              {isBusy ? (
                <button
                  type="button"
                  aria-label="Stop response"
                  onClick={() => stop()}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border-ui text-text-low transition hover:bg-bg-ui-hover hover:text-text-high dark:border-dark-border-ui dark:text-dark-text-low dark:hover:bg-dark-bg-ui-hover dark:hover:text-dark-text-high"
                >
                  <LuStopCircle aria-hidden="true" className="h-5 w-5" />
                </button>
              ) : (
                <button
                  type="submit"
                  aria-label="Send message"
                  disabled={!input.trim()}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-bg-solid text-white transition hover:bg-bg-solid-hover disabled:cursor-not-allowed disabled:opacity-50 dark:bg-dark-bg-solid dark:hover:bg-dark-bg-solid-hover"
                >
                  <LuSend aria-hidden="true" className="h-4 w-4" />
                </button>
              )}
            </div>
          </form>
        </section>
      )}

      <button
        ref={triggerRef}
        type="button"
        aria-label={isOpen ? "Close AI assistant" : "Open AI assistant"}
        onClick={() => setIsOpen((current) => !current)}
        className="fixed bottom-5 right-4 z-[1001] flex h-14 w-14 items-center justify-center rounded-full border border-border-ui bg-bg-solid text-white shadow-2xl transition hover:scale-105 hover:bg-bg-solid-hover focus:outline-none focus:ring-2 focus:ring-border-ui focus:ring-offset-2 focus:ring-offset-bg-app dark:border-dark-border-ui dark:bg-dark-bg-solid dark:hover:bg-dark-bg-solid-hover dark:focus:ring-dark-border-ui dark:focus:ring-offset-dark-bg-app sm:right-6"
      >
        {isOpen ? (
          <LuX aria-hidden="true" className="h-6 w-6" />
        ) : (
          <LuMessageCircle aria-hidden="true" className="h-6 w-6" />
        )}
      </button>
    </>
  );
}
