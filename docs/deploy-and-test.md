# Deploy & Test — quick commands

Short, copyable commands for local testing and Vercel deployment.

Prerequisites

- Node.js (recommended LTS) and npm installed
- Git access to this repository

Local dev (run the app and exercise enquiry + analytics)

1. Install dependencies:

```bash
npm install
```

2. Run the dev server with required env vars (example):

```bash
RESEND_API_KEY=sk_live_xxx \ 
RESEND_TO_EMAIL=team@journeyinspired.group \ 
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX \ 
NEXT_PUBLIC_POSTHOG_ID=ph_xxxxx \ 
NEXT_PUBLIC_SITE_DOMAIN=journeyinspired.group \ 
npm run dev
```

3. Verify site in browser: open http://localhost:3000

4. Test the enquiry API (server will call Resend):

```bash
curl -X POST http://localhost:3000/api/enquiry \
  -H 'Content-Type: application/json' \
  -d '{"name":"Test","email":"test@example.com","message":"hello","type":"general"}'
```

5. Test analytics consent in the browser console:

```js
localStorage.setItem('analytics_consent','true')
window.dispatchEvent(new Event('analytics-consent'))
console.log(typeof window.gtag, typeof window.posthog)
```

Vercel deploy (recommended)

1. Create a new Project in Vercel and connect the GitHub repo.
2. In the Vercel Project → Settings → Environment Variables add (Production & Preview as needed):

- `RESEND_API_KEY` (server secret)
- `RESEND_TO_EMAIL` (recipient inbox)
- `NEXT_PUBLIC_GA_ID`
- `NEXT_PUBLIC_POSTHOG_ID`
- `NEXT_PUBLIC_SITE_DOMAIN`

3. Add the domain in Vercel and follow the DNS steps in [docs/deployment.md](docs/deployment.md).

4. Trigger a deployment (push to the main branch or click "Deploy" in Vercel).

Notes about local testing changes

- For quick local testing I temporarily modified `postcss.config.js` and removed `tailwind.config.js` and devDependency entries to avoid PostCSS/Tailwind build errors on machines without matching toolchains. Before committing or sharing this repo, restore the original Tailwind/PostCSS setup and devDependencies.

To restore original files from Git if you want to revert the temporary test edits:

```bash
git restore --source=HEAD postcss.config.js package.json
git restore --source=HEAD tailwind.config.js || true
```

Need me to create a tiny `make` script or GitHub Action to automate local test runs? I can add it.
