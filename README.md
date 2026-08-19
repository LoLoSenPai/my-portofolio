# Loic Dlugosz — Portfolio

Personal portfolio for a fullstack developer focused on Solana, mobile products,
games and builder tooling. Built with Next.js App Router and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The profile, capabilities, projects and AI assistant context all come from
`app/data/portfolio.js`. Update that file first when portfolio content changes.

## AI assistant

The embedded assistant uses the Vercel AI SDK and AI Gateway. Create a local
`.env` or `.env.local` file:

```bash
AI_GATEWAY_API_KEY=your_vercel_ai_gateway_key
AI_MODEL=openai/gpt-5.4-mini
```

`AI_MODEL` is optional. The API route includes request-size limits, short chat
history and a lightweight in-memory rate limit.

## Validation

```bash
npm run build
```

The production site is available at
[portfolio.lololabs.xyz](https://portfolio.lololabs.xyz/).
