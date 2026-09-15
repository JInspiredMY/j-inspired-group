# Tech Stack — journeyinspired.group

> **Reconciliation note (v1.4, 15 Sep 2026):** the "no Clerk, no Stripe, no Supabase/Postgres" deviation described below is **partially reversed** as of the Phase 1 platform build (design brief v1.4 Appendix A, source: JI-PMO-001 v1.8) — Clerk and Supabase/Postgres are now adopted for this domain's database and auth/RBAC. Stripe remains excluded, but now because Phase 1 is deliberately invoice-only (gated to Phase 2), not because "no commerce happens on this domain." The reasoning below about `.travel`/journeycurated.com being separate live properties with their own stacks is superseded — see `docs/journeyinspired-group_design-brief_v1.4.md`. The institutional 8 pages' own content model (MDX-in-repo, no CMS) is unaffected.

**This deviates from the org-wide default stack. That's intentional — flagged explicitly, not silently.**

## What's specified

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js (App Router) + TypeScript | Standard across all J. Inspired domains |
| Styling | Tailwind CSS + shadcn/ui | Standard across all J. Inspired domains |
| Content | MDX files in-repo (`/content`), no CMS, no database | See reasoning below — this is the actual deviation |
| Hosting | Vercel | Standard |
| DNS/CDN | Cloudflare | Standard |
| Transactional email | Resend | Contact + partnership + careers-interest forms only |
| Analytics | GA4 + PostHog | Standard |
| Auth | **None** | No user accounts on this domain |
| Payments | **None** | No commerce on this domain |
| Database | **None** | See reasoning below |

## What's explicitly excluded, and why

**No Clerk (auth).** `.group` has no gated user accounts, no partner portal, no dashboard. Content gating (Investor Relations, Careers, Governance) is a publish-time/content-model decision — a page either has real content or a placeholder — not a login wall. If a partner portal is ever needed, that's `.travel`'s job (which already has Clerk + Stripe confirmed in its own stack).

**No Stripe (payments).** No commerce happens on this domain.

**No Supabase/Postgres (database).** This is the actual deviation from the org-wide default stack, so here's the reasoning explicitly:

- **Reasoning:** `.group` is 8 pages, institutional-audience, low-frequency-update content. A database earns its keep when content volume is high, updates are frequent, or you need relational queries (e.g., journeycurated.com's destination guides, or `.travel`'s product catalogue). None of that applies here. MDX-in-repo means every content change is a PR — which matches the "GitHub as SSOT" governance model already established for this project, and means zero infra to provision, patch, or pay for.
- **Assumptions:** Content update frequency stays low (this is a corporate site, not a content hub). Form submissions (contact, partnership, careers-interest) are handled via Resend → email, not stored in a queryable database. If you want submitted leads in a CRM or spreadsheet rather than just an inbox, that's a small addition (e.g., Resend webhook → simple log, or direct integration with whatever CRM you're already running) — not a reason to add a full database layer.
- **Risk:** If `.group` ever needs to support something relational (e.g., a searchable partner directory, multiple investor-tier gated content sets), MDX-in-repo stops being the right model.
- **Mitigation:** If that happens, it's a scoped migration of the content layer only — routing, components, and design system are unaffected. Flag it as a new decision when/if it comes up rather than over-building now.

## Visual design layer — the open gap

**No brand/visual identity kit exists yet.** Color palette, type scale, and logo usage guidelines have not been finalized anywhere in this project. This is the one confirmed blocker on true UI/wireframe work per the design brief.

**How this repo handles it in the meantime:**

- A single token file (e.g. `tailwind.config.ts` theme extension, or `styles/tokens.css`) holds all placeholder values — neutral grays, a single accent color, system font stack.
- Every placeholder value is commented `// PLACEHOLDER — pending brand kit`.
- No component, page, or copy should hardcode a color, font, or logo treatment outside that single token file. This means swapping in the real brand kit later is a one-file change, not a re-build.
- Do not treat the placeholder as "good enough to ship." It exists so structural/content work isn't blocked — it is not a design decision.

**Open question for Daryl:** proceed on this placeholder-token basis now, or hold all visual-layer work until the real brand kit is locked? Structural/content/routing work can proceed either way.
