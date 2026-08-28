# Rakzlab Apps — Website

A Next.js (App Router) + TypeScript + Tailwind CSS rebuild of the Rakzlab
Apps site, with a distinct visual identity (deep teal / amber / paper
palette, Fraunces + Inter + IBM Plex Mono type system, and an animated
"calculator readout" hero).

## Pages

- `/` — Home (hero, Health Calc Hub showcase, value props, CTA)
- `/privacy-policy` — Privacy policy (placeholder copy — edit before launch)
- `/support` — FAQ
- `/contact` — Contact form (opens the visitor's email client via `mailto:`)

## Before you launch — things to customize

1. **Support email**: update `SUPPORT_EMAIL` in `components/ContactForm.tsx`
   and the address shown on `/contact`.
2. **Privacy Policy copy**: `app/privacy-policy/page.tsx` has placeholder
   text — replace it with your actual data practices, and mention any
   analytics/ad SDKs the mobile app really uses.
3. **App Store / Play Store links**: add real badges/links in
   `components/AppCard.tsx` once your listing is live.
4. **Domain / metadata**: update the `openGraph.url` and description in
   `app/layout.tsx` to match your production domain.

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Deploying to Vercel

**Option A — via GitHub (recommended)**

1. Push this project to a new GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. Go to https://vercel.com/new, import the repository.
3. Framework preset will auto-detect as **Next.js** — no config needed.
4. Click **Deploy**.

**Option B — via Vercel CLI**

```bash
npm install -g vercel
vercel login
vercel        # deploys a preview
vercel --prod # promotes to production
```

Either way, Vercel will run `npm install` and `npm run build`
automatically — no environment variables are required for this project
as shipped.

## Tech stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- lucide-react (icons)
