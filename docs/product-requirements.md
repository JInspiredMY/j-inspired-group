# Product Requirements — journeyinspired.group

**Status:** Content/structure decisions final (source: design brief v1.3). Brand kit pending.
**Audience for this document:** engineers and Copilot/agent tooling building the repo. Business rationale lives in `journeyinspired-group_design-brief_v1.3.md` — this document translates it into build requirements.

> **Reconciliation note (v1.4, 15 Sep 2026):** as of the single-domain consolidation, journeyinspired.group is the sole domain — `/travel` and `/journey-curated` are paths within it, not separate domains. The Executive Summary and §3.4 Funnel Position below still describe the pre-consolidation split (e.g., "those jobs belong to `.travel` and journeycurated.com," "`.group` has no node in the customer acquisition funnel") and have not been rewritten for this version — no replacement funnel/IA has been authored yet either. The 8-page institutional scope itself is unchanged. See `docs/journeyinspired-group_design-brief_v1.4.md` for the authoritative current domain model.

---

## 1. Executive Summary

`journeyinspired.group` is an 8-page, institutional-audience-only corporate website. It is not a marketing funnel, not a commerce site, and not a content/SEO play — those jobs belong to `.travel` and journeycurated.com respectively. Its job is credibility, partnership development, and grant/investor readiness for a company still pre-monetization on this domain's more sensitive sections.

## 2. Objectives

- Establish corporate credibility with institutional audiences (investors, grant bodies, government, hospitals, universities, developers, insurers)
- Present the 5-pillar business ecosystem clearly, without overlap or naming collision
- Generate qualified partnership enquiries
- Be investor/grant-ready in structure, even while specific content sections stay gated until milestones are hit
- Explicitly stay outside the customer acquisition funnel (that's `.travel` + journeycurated.com's job)

## 3. Analysis

### 3.1 Audience
Institutional only. No individual travelers, no consumer-facing patterns (no pricing tables, no "book now," no product carousels).

### 3.2 Canonical pillar taxonomy (final — do not deviate)
1. Health & Wellness Tourism
2. Education & Experiential Learning Tourism
3. Property & Lifestyle Tourism
4. Nature, Eco & Adventure Tourism
5. Culture & Heritage Tourism

"Curated Experiences" = cross-cutting methodology/tag, not a 6th pillar, not a page. "Corporate Travel Experiences" and "Group Travel" = product delivery formats, not pillars — do not surface as top-level nav or pillar cards.

### 3.3 Brand promise vs. platform positioning
- Brand promise (usable now, everywhere including hero): **"Curating Transformational Travel Experiences"**
- Platform positioning (future-state, vision-context only, never present-tense hero copy): **"AI-Powered Health, Wellness, Education & Property Travel Concierge"**

This distinction exists because Phase 1 is confirmed non-AI. Using the platform-positioning line as live homepage copy would be an unbacked capability claim.

### 3.4 Funnel position
`.group` has no node in the customer acquisition funnel diagram. The funnel runs journeycurated.com → social/OTA/paid → `.travel`. Do not build lead-gen mechanics on `.group` beyond a simple partnership/contact enquiry form — this is relationship development, not conversion optimization.

## 4. Options Considered

Not reproduced here — see brief v1.3 §4. Recommendation (Option C, phased hybrid) is locked; this document assumes it.

## 5. Recommendation

Build exactly the 8 pages specified in `information-architecture.md`, on the stack specified in `tech-stack.md`, respecting the gating rules in `content-governance.md`. No page, feature, or content type outside those three documents without a new decision being made and documented.

## 6. Risks

| Category | Risk | Mitigation |
|---|---|---|
| Reputational | Copy slips into using the AI platform-positioning line as a present-tense capability claim | Enforce the brand-promise/positioning distinction in every copy pass; Copilot instructions encode this explicitly |
| Reputational | MM2H or medical travel language used without appropriate framing/disclaimers | Flag for legal/compliance review before publishing Property & Lifestyle or Health & Wellness pillar copy — not resolved by this document |
| Operational | Investor/Careers/Governance sections get built out prematurely, ahead of the real milestones/assets that gate them | Build gated sections as clearly-marked placeholders in the content model, not full-content pages, until milestone/asset exists |
| Technical | Visual design gets locked in ad hoc, page by page, before a real brand kit exists | Single placeholder token file (see `tech-stack.md`), never hand-authored per-page colors |

## 7. Dependencies

- **Brand/visual identity kit** — the only blocker on visual design work. Does not block structural, content-model, or routing work.
- `journeycurated.com` CMS decision (separate repo/brief; noted here only because it affects the "Curated Experiences" tagging framework's data model, which `.group`'s copy references but doesn't own)
- Legal entity details for Governance page (not yet available)
- Real leadership assets for Governance and Our Story (not yet available)

## 8. Implementation Roadmap

1. Repo scaffold + Copilot instructions (this deliverable)
2. Content model (MDX schema) + routing for all 8 pages
3. Placeholder design system (neutral tokens)
4. Page builds: Home, Ecosystem Model, Contact, Partnership Opportunities first (no gating dependencies) → Our Story, Press next → Careers (interest form only) → Governance last (most asset-dependent)
5. Contact/partnership enquiry form wired to Resend
6. Analytics (GA4 + PostHog)
7. Deploy to Vercel, DNS via Cloudflare
8. Swap placeholder design tokens for real brand kit once available — this should be a single-file change, not a re-build

## 9. Success Metrics

Carried from brief v1.3 (unchanged from v1.1/v1.2) — partnership enquiries, government/institutional engagement, MoUs, qualified B2B leads. Not redefined here.

## 10. Next Actions

1. Confirm this PRD + the four supporting docs before Copilot starts scaffolding
2. Decide: proceed with placeholder-token build now, or hold visual-layer work for real brand kit
3. Kick off repo scaffold using `copilot-build-prompts.md`
