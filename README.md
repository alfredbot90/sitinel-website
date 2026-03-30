# Sitinel — AI Safety, On Your Site.

On-premise AI that monitors your existing cameras for PPE violations and safety hazards. No video leaves your site.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-org%2Fsitinel-website&env=RESEND_API_KEY&envDescription=API%20key%20for%20Resend%20email%20service&project-name=sitinel-website&repository-name=sitinel-website)

## Setup

```bash
# Install dependencies
npm install

# Copy env file and add your Resend API key
cp .env.example .env.local

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | [Resend](https://resend.com) API key for contact form emails |

## Deploy to Vercel

1. Push to GitHub
2. Import in [Vercel](https://vercel.com)
3. Add `RESEND_API_KEY` to environment variables
4. Deploy

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Resend (email)
