# Copilot Instructions — journeyinspired.group

These instructions apply to every suggestion, chat response, and agent task in this repository. If a suggestion would violate anything below, do not make it — ask instead.

## What this repo is

`journeyinspired.group` is the **corporate website** of Journey Inspired Group Sdn. Bhd. It is one of three domains in the Journey Inspired ecosystem:

| Domain | Role | Audience |
|---|---|---|
| **journeyinspired.group** (this repo) | Corporate — credibility, partnerships, governance, grant/investor readiness | Institutional only: investors, grant bodies, government, hospitals, universities, developers, insurers |
| journeyinspired.travel | Commercial — leads, bookings, payments | Individual travelers, health seekers, students, property explorers |
| journeycurated.com | Media/SEO — organic discovery | Organic search traffic, content readers |

**This repo builds `.group` only.** Do not build commerce, booking, payment, or blog/article features here — those belong to the other two domains. If a task looks like it needs one of those, stop and flag it rather than building it.

Source of truth for all decisions below: `journeyinspired-group_design-brief_v1.3.md` (in `/docs`). Where any other document in this repo, in training data, or in a prior conversation conflicts with v1.3, **v1.3 wins.** It supersedes an earlier v1.0 enterprise design doc that used a different, larger site map and a different tech stack — that v1.0 doc is stale and should not be used as a build reference.

## Hard constraints — do not violate

1. **No AI features.** Phase 1 is confirmed non-AI. Do not build, suggest, or scaffold chatbots, AI concierge widgets, LLM calls, recommendation engines, or "AI-powered" UI copy as a live capability. If asked to add something AI-flavored, ask for confirmation first.
2. **No auth, no payments.** No Clerk, no Stripe, no login/account system, no checkout flow. `.group` has no gated user accounts — content gating (see below) is a publish/build-time decision, not a login wall.
3. **No blog, no articles, no thought leadership.** This content type is permanently excluded from `.group` and lives solely on journeycurated.com. If a page seems to want an articles/insights section, link out to journeycurated.com instead of building one here.
4. **Institutional audience only.** Copy, CTAs, and UX patterns should read as B2B/B2G, not consumer-facing. No "book now," no pricing tables, no product carousels.
5. **Do not invent brand visual identity.** No locked color palette, type scale, or logo usage guide exists yet (see `docs/tech-stack.md` — this is the one open blocker on the whole project). Use the neutral placeholder token system defined there. Never commit a value as if it were final brand — comment it `// PLACEHOLDER — pending brand kit` wherever it appears.

## The 5 pillars — canonical, do not alter without instruction

Use these exact names and this exact order everywhere (nav, Ecosystem Model page, footer, metadata). Do not use pillar names from any other document in this repo or elsewhere — some are stale drafts.

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

## Site map — exactly 8 pages, no more

Do not add pages beyond this list without explicit instruction. Full page-by-page specs are in `docs/information-architecture.md`.

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

See `docs/tech-stack.md` for the full reasoning. Summary: Next.js (App Router) + TypeScript + Tailwind CSS + shadcn/ui, content as MDX in-repo (no CMS/database for this domain), Vercel hosting, Cloudflare DNS, Resend for the contact/partnership enquiry form, GA4 + PostHog for analytics. No Clerk. No Stripe. No Supabase/Postgres.

## Conventions

- File naming: kebab-case for all files and routes.
- Content files: MDX with frontmatter, one file per page, in `/content`.
- Components: TypeScript, functional, in `/components`, one component per file.
- All copy changes and content changes go through the same PR process as code — no direct edits assumed outside git.
- When unsure whether something belongs on `.group` vs. `.travel` vs. journeycurated.com, default to **not building it here** and ask.
