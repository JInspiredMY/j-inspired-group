# Copilot Instructions — journeyinspired.group

These instructions apply to every suggestion, chat response, and agent task in this repository. If a suggestion would violate anything below, do not make it — ask instead.

## What this repo is

`journeyinspired.group` is the **single consolidated domain** for the Journey Inspired ecosystem. It was previously three separate domains:

| Domain | Former role | Status now |
|---|---|---|
| **journeyinspired.group** (this repo) | Corporate — credibility, partnerships, governance, grant/investor readiness | **Still the role of the 8 existing institutional pages, unchanged.** This repo is also now building the company's Phase 1 revenue platform (database, auth, product catalogue, booking pipeline) |
| journeyinspired.travel | Commercial — leads, bookings, payments | **Redirects into this domain as `/travel`.** No live payment gateway yet — Phase 1 is invoice-only (see Tech stack below); Stripe is deferred to Phase 2 |
| journeycurated.com | Media/SEO — organic discovery | **Redirects into this domain as `/journey-curated`.** Committed as a path (Phase 1, R4); page-by-page IA/CMS is **not yet scoped** — do not build content structure from the path name alone |

**The 8 existing institutional pages keep their original scope.** No pricing tables or consumer "book now" CTAs on those 8 pages. `/travel` and `/journey-curated` are additive path groups with their own rules (see Site map below), not an extension of the institutional 8.

Source of truth for all decisions below: `journeyinspired-group_design-brief_v1.4.md` (in `/docs`). Where any other document in this repo, in training data, or in a prior conversation conflicts with v1.4, **v1.4 wins.** v1.4 reconciles v1.3 against the domain consolidation and the company's delivery roadmap (JI-PMO-001 v1.8) — it does not reopen the pillar taxonomy or the Phase 1/AI-positioning resolution, both carried forward from v1.3 unchanged. v1.3 itself superseded an earlier v1.0 enterprise design doc with a different, larger site map and a different tech stack — that v1.0 doc is stale and should not be used as a build reference. `docs/master-project-brief.md`, `docs/product-requirements.md`, `docs/information-architecture.md`, `docs/tech-stack.md`, and `docs/copilot-build-prompts.md` still describe the old 3-domain model in places and carry a reconciliation-note pointer to v1.4 rather than a full rewrite — don't treat their domain-split language as current.

## Hard constraints — do not violate

1. **No AI features.** Phase 1 is confirmed non-AI. Do not build, suggest, or scaffold chatbots, AI concierge widgets, LLM calls, recommendation engines, or "AI-powered" UI copy as a live capability. If asked to add something AI-flavored, ask for confirmation first. (This is independently confirmed by the delivery roadmap: AI Concierge is Phase 5, gated on proven external demand.)
2. **Auth and a database are adopted for this domain's Phase 1 platform build** — Clerk (auth/RBAC) and Supabase/Postgres (database). This is a change from earlier versions of this file, which excluded both entirely; that exclusion no longer holds now that this repo builds the actual platform. **Stripe/live payments remain excluded** — Phase 1 is invoice-only by design; Stripe is deferred to Phase 2, gated on proven revenue repeatability, and is not this repo's decision to build ahead of that gate. Content gating (see below) is a publish/build-time decision, not a login wall, and applies to the 8 institutional pages specifically.
3. **No blog, no articles, no thought leadership on the 8 institutional pages.** This content type is no longer *permanently* excluded from the domain overall — it now belongs under `/journey-curated` — but it is still excluded from the 8 institutional pages themselves, and should not be built under `/journey-curated` either until that path has its own scoping pass (IA, CMS/tagging decision). If a task seems to want an articles/insights section, flag that `/journey-curated` needs its own design brief first rather than building from the path name alone.
4. **Institutional audience only, on the 8 existing pages.** Copy, CTAs, and UX patterns on Home, Our Story, Ecosystem Model, Partnership Opportunities, Governance, Press, Careers, and Contact should read as B2B/B2G, not consumer-facing. No "book now," no pricing tables, no product carousels there — this constraint is unchanged by the domain consolidation.
5. **Do not invent brand visual identity.** No locked color palette, type scale, or logo usage guide exists yet (see `docs/tech-stack.md` — this is the one open blocker on institutional-page design work). Use the neutral placeholder token system defined there. Never commit a value as if it were final brand — comment it `// PLACEHOLDER — pending brand kit` wherever it appears.

## The 5 pillars — canonical, do not alter without instruction

Use these exact names and this exact order everywhere (nav, Ecosystem Model page, footer, metadata). Do not use pillar names from any other document in this repo or elsewhere — some are stale drafts. Unchanged by the domain consolidation.

1. Health & Wellness Tourism
2. Education & Experiential Learning Tourism
3. Property & Lifestyle Tourism
4. Nature, Eco & Adventure Tourism
5. Culture & Heritage Tourism

**"Curated Experiences" is not a pillar.** It is a cross-cutting methodology/tag that applies across all 5 pillars. It gets one sentence on the Ecosystem Model page, not a 6th card, not its own route, not its own nav item.

**"Corporate Travel Experiences" and "Group Travel" are not pillars either** — they are product delivery formats that can apply within any pillar. Do not add them as top-level nav items or pillar cards.

## Brand promise vs. platform positioning — a hard rule

Two lines exist and they are **not interchangeable**:

- `"Curating Transformational Travel Experiences"` — the brand promise. Safe to use anywhere, including the homepage hero, right now.
- `"AI-Powered Health, Wellness, Education & Property Travel Concierge"` — future platform positioning. **Do not use this as present-tense homepage/hero copy.** It's a capability claim the business can't back up while Phase 1 is non-AI. It may appear only in clearly future/vision-framed content (e.g., an "Our Story" section describing where the ecosystem is headed), never as a current-state statement.

If you're generating homepage or Our Story copy and reach for the platform positioning line, stop and use the brand promise instead.

## Site map — exactly 8 institutional pages, no more

Do not add pages beyond this list without explicit instruction. Full page-by-page specs are in `docs/information-architecture.md`. This count governs the institutional page set only — it does not cap the domain overall, since `/travel` and `/journey-curated` (Phase 1, R4) add path groups outside this list, and a further "north-star" sitemap is recorded in design brief v1.4 Appendix A as future/phased, not current build authorization.

1. Home
2. Our Story
3. Ecosystem Model
4. Partnership Opportunities
5. Governance
6. Press
7. Careers
8. Contact

## Content gating — build-time, not runtime

Some sections are intentionally thin or placeholder-only until a business milestone is hit. This is a content/publish decision, not a feature to build:

- **Investor Relations content** — gated on monetization + traction milestones, not a calendar date. Until then, keep this section directional/high-level only.
- **Careers** — interest-form only (name, email, area of interest, message). Do not build a job listings system, applicant tracker, or vacancy CMS. There are no real openings yet.
- **Governance** — gated on real leadership/legal-entity assets existing. Do not fabricate leadership bios, board members, or legal entity details.

## Tech stack

See `docs/tech-stack.md` for the full reasoning. Summary: Next.js (App Router) + TypeScript + Tailwind CSS + shadcn/ui, Vercel hosting, Cloudflare DNS, Resend for transactional email, GA4 + PostHog for analytics. **Clerk (auth/RBAC) and Supabase/Postgres (database) are adopted** for the Phase 1 platform build (destinations, admin, catalogue, bookings) — this reverses the earlier "no Clerk, no Supabase" exclusion now that this repo builds the platform itself. **Stripe remains excluded** — Phase 1 is invoice-only; live payment is a Phase 2 decision, gated on proven revenue repeatability. The institutional 8 pages' content model (MDX-in-repo, no CMS) is unaffected by this — it's a separate, still-unwired piece of this repo, documented in `CLAUDE.md`'s Architecture section.

## Conventions

- File naming: kebab-case for all files and routes.
- Content files: MDX with frontmatter, one file per page, in `/content` (institutional pages only — `/travel` and `/journey-curated` are database-backed, not MDX).
- Components: TypeScript, functional, in `/components`, one component per file.
- All copy changes and content changes go through the same PR process as code — no direct edits assumed outside git.
- There is no longer a separate `.travel` or `journeycurated.com` repo/domain to route out-of-scope work to. If a task looks like it needs work beyond the current Phase 1 scope (design brief v1.4 Appendix A) — Phase 2+ features, or `/journey-curated` content beyond the path existing — flag it and ask rather than building it.
