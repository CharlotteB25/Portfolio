# Next.js Portfolio — Cards Only

A minimal portfolio where **each project is a card** with a short description + direct links to the **live demo** and **source code**. Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. Optimized for Vercel.

## Quickstart

```bash
pnpm i   # or npm i / yarn
pnpm dev # open http://localhost:3000
```

## Add your projects

Edit `data/projects.json` and add objects like:

```json
{
  "title": "Weather App",
  "year": 2023,
  "summary": "Real-time weather app with OpenWeather API and caching.",
  "tags": ["React", "API", "Tailwind"],
  "demo": "https://weather-app.vercel.app",
  "repo": "https://github.com/yourhandle/weather-app"
}
```

## Deploy to Vercel

1. Push to GitHub.
2. Import the repo in Vercel and deploy.
3. Add your custom domain in Vercel (Project → Settings → Domains) and follow DNS steps.
4. Update `metadataBase` in `app/layout.tsx` to your domain.

## Notes

- No per-project pages; everything is on the cards.
- Tailwind is pre-configured. Tweak theme in `tailwind.config.ts`.
- Images are unoptimized for simplicity. Remove `images.unoptimized` from `next.config.mjs` to enable Next/Image optimization on Vercel.
