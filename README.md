# Built by Bigger

Public website for **Bigger Enterprises LLC**, operating under the **Built by Bigger** brand.

Domain: [builtbybigger.com](https://builtbybigger.com)

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- ESLint

No database, authentication, CMS, analytics, cookies, or external APIs.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Use the default Next.js settings.
4. Point `builtbybigger.com` DNS to Vercel.

## Configuration

Shared site values live in `src/lib/config.ts`, including the optional `GOVERNING_STATE` constant used by the Terms page.

The privacy policy and terms should be reviewed by qualified legal counsel before a broad public launch.
