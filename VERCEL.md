# Vercel deployment — SmartPrint Solutions

Your live site **smartprintingsolution.online** is hosted on **Vercel** (not Firebase Hosting). Forum SEO routes use **Vercel serverless functions** in the `api/` folder.

## Deploy

Push to your connected Git repo, or:

```bash
npx vercel --prod
```

Vercel automatically picks up:

| URL | Handler |
|-----|---------|
| `/sitemap-forum.xml` | `api/sitemap-forum.js` |
| `/forum/question/:id` | `api/forum/question/[id].js` |
| All other routes (e.g. `/about`, `/forum`) | `index.html` via `vercel.json` SPA fallback |

## After deploy, verify

1. https://smartprintingsolution.online/sitemap-forum.xml — XML list of forum questions  
2. https://smartprintingsolution.online/forum — SPA forum page (was 404 before SPA rewrite)  
3. https://smartprintingsolution.online/forum/question/{id} — SEO HTML + interactive app  

## Optional env var

Set in Vercel → Project → Settings → Environment Variables:

| Variable | Purpose |
|----------|---------|
| `FIREBASE_API_KEY` | Firestore REST reads (defaults to project web API key) |

## Firebase Cloud Functions

The `functions/` folder is for **Firebase Hosting** deploys only. If you stay on Vercel, you do **not** need to deploy Firebase functions — the `api/` routes do the same job.
