# Deployment — Vercel + Cloudflare DNS

This file describes the recommended steps to deploy `journeyinspired.group` to Vercel and point the DNS via Cloudflare. Do not commit secrets; set them in the Vercel dashboard as protected environment variables.

Required environment variables (set in Vercel Project → Settings → Environment Variables):

- `RESEND_API_KEY` — Resend API key (server-side secret).
- `RESEND_TO_EMAIL` — Destination inbox for enquiry emails (e.g. team@domain.com).
- `NEXT_PUBLIC_GA_ID` — GA4 measurement ID (e.g. `G-XXXXXXXXXX`).
- `NEXT_PUBLIC_POSTHOG_ID` — PostHog project key (public identifier).
- `NEXT_PUBLIC_SITE_DOMAIN` — Public site domain (e.g. `journeyinspired.group`).

Steps

1. Create a new project in Vercel and connect the GitHub repository.

2. In the Vercel project settings, add the environment variables above for the `Production` environment. Mark `RESEND_API_KEY` as a secret and do not expose it to client builds.

3. Add your domain to Vercel (Project → Domains → Add). Vercel will provide DNS records to configure.

Cloudflare DNS (recommended):

- For the root/apex domain (`journeyinspired.group`): add an A record to `76.76.21.21` (Vercel IP). Set the record to `Proxied` = OFF (DNS only). Cloudflare's proxy should be disabled for Vercel-managed records to avoid TLS issues.
- For the `www` subdomain: add a CNAME record for `www` pointing to `cname.vercel-dns.com`. Again, set `Proxied` = OFF.

Notes on Cloudflare settings

- Use DNS-only records (Cloudflare orange cloud OFF) for records Vercel manages.
- If you prefer CNAME flattening for the apex, Cloudflare will handle it automatically, but the simplest supported setup is the single A record above.

Verify and finalize

- After adding DNS records, return to Vercel and click "Verify" for the domain.
- Once verified, Vercel will provision TLS certificates automatically.

Optional: Preview deployments

- For preview environments, add the same environment variable names in the Vercel settings under `Preview` as needed. Use separate keys when you want different inboxes or analytics for staging.

Troubleshooting

- If DNS verification fails, check that Cloudflare's proxy is disabled for the Vercel-supplied records and allow a few minutes for propagation.
- If email sending fails from the API route, ensure `RESEND_API_KEY` and `RESEND_TO_EMAIL` are correctly set in Vercel and that the key has permissions.

If you'd like, I can add a `README` snippet or a deploy checklist to the repo or create a Vercel Environment template file.
