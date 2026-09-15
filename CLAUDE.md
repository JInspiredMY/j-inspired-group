# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

The corporate website for **journeyinspired.group** (Journey Inspired Group Sdn. Bhd.) — now the **single consolidated domain** for the Journey Inspired ecosystem. `journeyinspired.travel` and `journeycurated.com` redirect into this domain as paths (`/travel`, `/journey-curated`) rather than running as separate sites. The existing 8-page institutional scope (investors, grant bodies, government, hospitals, universities, developers, insurers) is unchanged; what's new is that this domain is also becoming the company's actual Phase 1 revenue platform — database, auth, product catalogue, booking pipeline — per the company's delivery roadmap (see Governance below). `/travel` and `/journey-curated` are additive path groups, not a replacement of the 8 institutional pages.

## Governance — read before building

Product/content scope is governed by documents, and they override training data, prior conversations, and any conflicting file in this repo:

- **`docs/journeyinspired-group_design-brief_v1.4.md`** is the single source of truth. Where anything conflicts with v1.4, v1.4 wins. It supersedes v1.3 (domain consolidation + Phase 1 platform reconciliation — the underlying 5-pillar taxonomy and Phase 1/AI-positioning resolution from v1.3 are carried forward unchanged, not reopened) and the earlier v1.0 doc with a larger sitemap — do not use v1.0 as a build reference.
- **JI-PMO-001 v1.8** ("Master Delivery Roadmap") is the company's canonical delivery roadmap and the source of Phase 1's actual scope and dates (see design brief v1.4 Appendix A). Its canonical home is the company's Google Drive; treat any other copy as potentially stale before citing specifics from it.
- **`.github/copilot-instructions.md`** — the hard-constraint list. Applies to every change here, not just Copilot.
- `docs/information-architecture.md` — page-by-page specs for the 8 institutional pages. `docs/content-governance.md` — every copy/content rule. Both still describe the pre-consolidation 3-domain model in a few places not yet fully reconciled — v1.4 wins where they conflict.

Hard constraints (see copilot-instructions.md for the full text and rationale):

- **No AI features** (Phase 1 is confirmed non-AI): no chatbots, LLM calls, recommendation engines, or "AI-powered" present-tense UI copy. The line `"AI-Powered ... Travel Concierge"` may appear **only** as clearly-future vision framing (the "Where we're headed" section of Our Story) — this is independently confirmed by the roadmap, where AI Concierge is Phase 5, gated on proven external demand. The usable-anywhere brand promise is `"Curating Transformational Travel Experiences"`.
- **Auth and a database are now part of this repo's scope** — Clerk (auth/RBAC) and Supabase/Postgres (database), adopted for the Phase 1 platform build (destinations, admin, catalogue, bookings). **Stripe/live payments are still excluded** — deferred to Phase 2, gated on proven Phase 1 revenue repeatability, not this repo's decision to build ahead of. Content gating (Investor Relations, Governance, Careers) is a build-time "real content vs. honest placeholder" decision, never a login wall. Do not fabricate leadership bios, legal-entity details, or job listings to fill gated pages.
- **No blog / articles / thought leadership on the 8 institutional pages**, no pricing tables, no "book now" / consumer CTAs there. `/journey-curated` is the confirmed future home for content that was previously scoped to journeycurated.com, but its IA/CMS is not yet decided — don't build it from the path name alone.
- **8 institutional pages, plus `/travel` and `/journey-curated` as additive path groups** (Home, Our Story, Ecosystem Model, Partnership Opportunities, Governance, Press, Careers, Contact + `/travel`, `/journey-curated`). Do not add routes beyond this without a documented scope decision.
- **The 5 pillars are canonical** — exact names and order live in `lib/pillars.ts`, matching content-governance.md. "Curated Experiences", "Corporate Travel Experiences", and "Group Travel" are **not** pillars; do not add them as cards or nav items.
- **Do not invent brand visual identity.** No color palette / type scale / logo guide is finalized. Use only the placeholder tokens in `styles/tokens.css`; mark any placeholder value `PLACEHOLDER — pending brand kit`. Swapping in the real kit must stay a one-file change.

## Commands

```bash
npm install
npm run dev      # Next.js dev server (falls back to :3001 if :3000 is taken)
npm run build    # production build
npm run start    # serve the production build

npx tsc --noEmit # typecheck (no lint or test script is configured in this repo)
```

Exercise the enquiry API locally:

```bash
curl -X POST http://localhost:3000/api/enquiry \
  -H 'Content-Type: application/json' \
  -d '{"name":"Test","email":"test@example.com","message":"hello","type":"general"}'
```

Enable analytics in the browser console (see `docs/analytics.md`):

```js
localStorage.setItem('analytics_consent', 'true')
window.dispatchEvent(new Event('analytics-consent'))
```

## Architecture

**Stack:** Next.js 14 App Router + TypeScript (strict), Tailwind CSS **v4** (`@tailwindcss/postcss`, `@import 'tailwindcss'` in CSS — no `tailwind.config` theme values), shadcn/ui (`style: base-nova`, primitives from `@base-ui/react`, **not** Radix), `lucide-react` icons. Path alias `@/*` → repo root. Hosting: Vercel; DNS: Cloudflare (DNS-only records — see `docs/deployment.md`).

**Routing / pages:** one directory per page under `app/`. Page bodies are currently hardcoded JSX placeholders. Actual route slugs are `/ecosystem-model` and `/partnerships` (note: `information-architecture.md` writes these as `/ecosystem` — the code is the current truth). The nav lives inline in `app/layout.tsx`; `components/Nav.tsx` and `components/Footer.tsx` exist but are not yet wired into the layout.

**Content model — aspirational, not yet built.** `docs/tech-stack.md` specifies "MDX files in `/content`, no CMS". The `content/*.mdx` files exist with frontmatter, but there is **no MDX pipeline** (`next.config.js` has no `@next/mdx`, and no MDX renderer is a dependency). Pages do not read `content/` today. If you wire MDX, that is a real architectural addition — flag it.

**Forms → email, no storage.** Every form (`components/EnquiryForm.tsx`, a client component) POSTs JSON to `app/api/enquiry/route.ts`, which calls the Resend API directly via `fetch` and emails `RESEND_TO_EMAIL`. Nothing is persisted. The `type` field (`general` | `partnership` | `careers` | media) is passed per page and only tags the email subject.

**Analytics — consent-gated.** `components/CookieConsent.tsx` writes `localStorage['analytics_consent']` (`"true"`/`"false"`) and dispatches a `analytics-consent` window event on accept. `components/Analytics.tsx` listens for that event and only then injects GA4 (`NEXT_PUBLIC_GA_ID`) and PostHog (`NEXT_PUBLIC_POSTHOG_ID`) scripts. No analytics script loads before consent.

**Styling layers:** `app/globals.css` is the shadcn/Tailwind-v4 layer (OKLCH design tokens, `.dark` variant, `@theme inline`). It also `@import`s `styles/globals.css`, which pulls in `styles/tokens.css` — the placeholder brand tokens (`--color-primary`, `--color-accent`, `--font-sans`). Keep brand values confined to `styles/tokens.css`.

## Environment variables

Set in Vercel (Production + Preview), or inline for local dev. See `docs/deployment.md` / `docs/deploy-and-test.md`.

| Var | Scope | Purpose |
|---|---|---|
| `RESEND_API_KEY` | server secret | Resend API auth for `/api/enquiry` |
| `RESEND_TO_EMAIL` | server | Destination inbox for enquiries |
| `NEXT_PUBLIC_GA_ID` | client | GA4 measurement ID |
| `NEXT_PUBLIC_POSTHOG_ID` | client | PostHog project key |
| `NEXT_PUBLIC_SITE_DOMAIN` | client | `from` domain for enquiry email (`no-reply@<domain>`) |

## Conventions

- kebab-case for all files and routes; one component per file, TypeScript functional components in `components/` (`components/ui/` for shadcn primitives).
- All content and copy changes go through the same PR process as code; `main` is production.
- The `.travel` and `journeycurated.com` domains no longer have separate live builds to route work to — everything now lives in this repo. When unsure whether something is in the current Phase 1 scope (design brief v1.4 Appendix A) versus later-phase/gated work, default to **not building it** and ask.
