# Analytics — GA4 + PostHog (QA & testing)

This document explains how the analytics implementation works, which environment variables to set, and quick local QA steps.

Env vars (set in Vercel / local .env for development):

- `NEXT_PUBLIC_GA_ID` — GA4 measurement ID (e.g. `G-XXXXXXXXXX`). Public, used client-side.
- `NEXT_PUBLIC_POSTHOG_ID` — PostHog project key (public identifier). Public, used client-side.

Runtime behavior

- The site shows a cookie-consent banner (`components/CookieConsent.tsx`) on first visit.
- Consent is stored in `localStorage` under the key `analytics_consent` with value `true` or `false`.
- When consent is `true`, an `analytics-consent` event is dispatched on `window` and `components/Analytics.tsx` will load GA and PostHog.
- No analytics scripts are loaded until consent is given.

How to test locally

1. Start the dev server:

```bash
npm run dev
```

2. Open the site in the browser and either click Accept on the consent banner or run in the console:

```js
localStorage.setItem('analytics_consent', 'true')
window.dispatchEvent(new Event('analytics-consent'))
```

3. Verify scripts loaded:

- For GA: check `window.gtag` exists in the console and look for the `gtag/js` network request.
- For PostHog: check `window.posthog` exists and the PostHog network requests to your `api_host` (defaults to `https://app.posthog.com`).

4. To test the rejection flow, run:

```js
localStorage.setItem('analytics_consent', 'false')
window.location.reload()
```

Notes & recommendations

- Use `NEXT_PUBLIC_...` prefixed variables for client exposure; keep server-only secrets (like `RESEND_API_KEY`) private and not `NEXT_PUBLIC`.
- For staging, use separate PostHog/GA properties so analytics don't mix with production.
- If you need server-side analytics or advanced gating, we can add a server-side consent cookie or integrate a CMP.
