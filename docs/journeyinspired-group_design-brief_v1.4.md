# JourneyInspired.Group — Design Brief

**Domain:** journeyinspired.group (single consolidated domain)
**Role:** Corporate + institutional credibility site, enquiry capture, and (in build) the company's Phase 1 revenue platform — see §3.4/§3.5 for what that means concretely
**Version:** 1.4
**Status:** Domain consolidation reconciled. Institutional 8-page scope and 5-pillar taxonomy unchanged from v1.3. Phase 1 platform build (database, auth, registry, catalogue, booking, invoicing) is committed per JI-PMO-001 v1.8, target 15 Oct 2026 — see Appendix A. Brand/visual identity kit remains the one open blocker on institutional-page design work.
**Supersedes:** v1.3 — reconciles this brief against (a) the business decision to consolidate three domains into one, and (b) JI-PMO-001 v1.8 ("Master Delivery Roadmap"), which is now the source of Phase 1 delivery scope and dates. Does not reopen the pillar taxonomy (§3.2, unchanged) or the Phase 1/AI-positioning resolution (§3.3, unchanged) — those stand as v1.3 closed them.

---

## Changelog from v1.3

| Area | v1.3 | v1.4 (this version) |
|---|---|---|
| Domain structure | Three domains: `.group` (institutional), `.travel` (commerce), `journeycurated.com` (media/SEO) | **Single consolidated domain: journeyinspired.group.** `.travel` and `journeycurated.com` redirect in as paths (`/travel`, `/journey-curated`) rather than running as separate sites |
| Commerce scope | No commerce on `.group`; `.travel` owns leads/bookings/payments on its own stack (Clerk + Stripe) | **`.group` now builds the actual transaction platform** (database, auth, product catalogue, booking pipeline, invoicing) as Phase 1 of JI-PMO-001. Stripe/live payment remains excluded — deferred to Phase 2 (R21), not this domain's decision to make independently |
| `/journey-curated` | N/A — journeycurated.com was a separate, undecided-stack domain | **Confirmed in-domain path.** Committed as part of Phase 1 R4 (target 15 Oct 2026); page-by-page IA/CMS/tagging is **not yet scoped** — do not build beyond the path existing |
| Near-term site scope | 8 institutional pages | **Unchanged** — 8 institutional pages remain the credibility-site scope. `/travel` and `/journey-curated` are additive path groups, not a replacement of the 8 |
| North-star / future sitemap | N/A | Daryl's pasted consumer sitemap (Explore, per-pillar sub-pages, Plan Your Journey, AI Concierge, Impact/ESG, Insights…) is recorded in **Appendix A** as phased future direction, explicitly **not** Phase 1 build authorization |
| AI Concierge | Excluded from pillar list; future-vision copy only | **Unchanged**, now independently confirmed by JI-PMO-001: AI Concierge is Phase 5 (R18), gated on proven external willingness-to-pay. Still never a live capability today |
| 5-pillar taxonomy | Final, 5 pillars | **Unchanged.** A separate, still-undecided strategic review proposing taxonomy changes remains unresolved and is not addressed here |

**What this version deliberately does not touch:** the 5-pillar taxonomy (§3.2), the brand-promise-vs-platform-positioning resolution (§3.3), and the gated-content milestones for Investor Relations/Careers/Governance (§8) — all carried forward unchanged from v1.3.

---

## 1. Executive Summary

`journeyinspired.group` is now the single consolidated domain for the Journey Inspired ecosystem. What was previously three domains — `.group` (institutional), `.travel` (commerce), `journeycurated.com` (media/SEO) — is now one, with `.travel` and `journeycurated.com` redirecting in as paths (`/travel`, `/journey-curated`) rather than operating as separate live sites.

This version also reconciles the brief against JI-PMO-001 v1.8, the company's internal delivery roadmap, which is now the authority on what actually gets built and when. Phase 1 ("Revenue Engine," releases R1–R4) is **committed**, targeting **15 October 2026**, and is materially larger than a documentation update: it requires a real database, authentication and role-based access control, a Destination Registry, an admin surface, a product catalogue, a booking pipeline, and invoicing — none of which existed in this repository before this version.

Two things remain open:
- **Brand/visual identity kit** — still the only blocker on institutional-page *design* work (carried from v1.3, §7).
- **`/journey-curated`'s own IA/CMS scope** — confirmed as a committed path, but its page-by-page structure is not yet specified anywhere reviewed. This brief does not invent one — see Appendix A and §7.

---

## 2. Objectives

Unchanged from v1.3.

---

## 3. Analysis

### 3.1 Audience

Institutional audience remains the primary scope of the 8 existing pages (unchanged — see §3.5). The domain as a whole also now captures general enquiries directly (already built — `components/EnquiryForm.tsx`) and, as Phase 1 lands, will serve a broader audience through `/travel` and `/journey-curated`. The sentence in v1.3 stating individual customers "are served by `.travel` and `journeycurated.com`" no longer describes separate properties — that audience is now served within this same domain, on the schedule set by JI-PMO-001, not by widening the 8 institutional pages themselves.

### 3.2 Core business pillars — unchanged from v1.3

Carried forward verbatim: 5 pillars (Health & Wellness Tourism; Education & Experiential Learning Tourism; Property & Lifestyle Tourism; Nature, Eco & Adventure Tourism; Culture & Heritage Tourism), Curated Experiences as a cross-cutting tag not a pillar, Corporate Travel Experiences/Group Travel as product delivery formats not pillars. Not reopened by this version. A separate, still-undecided strategic review proposing taxonomy changes exists and remains unresolved — do not build against it.

### 3.3 Brand promise vs. platform positioning — unchanged from v1.3

"Curating Transformational Travel Experiences" remains the usable-now brand promise; the AI-Powered Concierge line remains reserved for clearly-framed future/vision content only. Phase 1 is still non-AI. JI-PMO-001 independently confirms this: AI Concierge is Phase 5 (R18), gated on proven external demand — not a near-term feature under any reading of the roadmap.

### 3.4 Tech stack — reconciled to Phase 1 scope

Previous (v1.3): `.group` lean, no Clerk/Stripe/database; `.travel` had its own full stack including Clerk + Stripe.

**Now:** there is no separate `.travel` stack to defer to — this domain builds Phase 1 itself. Adopted: **Supabase (Postgres)** for the database and **Clerk** for authentication/RBAC, per the org-wide default stack already documented in `docs/master-project-brief.md` and never previously adopted here. **Stripe is not adopted.** Phase 1 is invoice-only end-to-end by JI-PMO-001's own design (R3); live payment integration is explicitly Phase 2 (R21), gated on proven revenue repeatability (D008) — a future, separate decision, not something this domain builds ahead of that gate.

The `/journey-curated` content path's CMS/tagging decision remains open — carried as a dependency (§7), not resolved here.

### 3.5 Content scope — `.group`'s institutional pages — UNCHANGED, plus two new path groups

The 8 institutional pages (Home, Our Story, Ecosystem Model, Partnership Opportunities, Governance, Press, Careers, Contact) are unchanged from v1.3 — same content rules, same B2B/B2G tone. Do not add pages to this set without a separate documented scope decision.

Additive to that set, per JI-PMO-001 R4 (Committed, target 15 Oct 2026):
- **`/travel`** — destination pages and packages, backed by the Destination Registry (§ architecture, Part B of the implementation plan).
- **`/journey-curated`** — confirmed path for content that was previously scoped to journeycurated.com. Page-by-page IA is not yet specified; do not build beyond the path's existence until scoped.

### 3.6 Confirmed customer funnel — retired, not replaced yet

The v1.3 three-domain funnel diagram (journeycurated.com → social/OTA → `.travel`, with `.group` outside it) no longer describes reality — there is one domain now, not three. **No replacement single-domain funnel/IA has been authored.** This is an open dependency (§7), not something this version invents.

---

## 4. Options Considered

Unchanged from v1.3 — Option C (phased hybrid) remains the recommendation. Domain consolidation and the JI-PMO-001 phase structure are both refinements of *where* and *how* the phases execute, not a change to the phasing logic itself.

---

## 5. Recommendation

Proceed with the 8-page institutional scope exactly as specified in v1.3 §5 (unchanged, not reproduced here). Proceed with Phase 1 (R1–R4) of JI-PMO-001 as the platform build target, per Appendix A and the accompanying implementation plan. Do not begin Phase 2–5 work, and do not begin `/journey-curated` content build-out, until their respective gates in Appendix A are met.

---

## 6. Risks (R-MAP) — carried forward + additions

All risks from v1.3 stand. Additions:

| Category | Risk | Mitigation |
|---|---|---|
| Governance | A build task assumes `/journey-curated`'s IA/CMS is already decided (because the path name and R4 commitment exist) and starts building without a scoped brief | Treat `/journey-curated` IA as a hard gate — no content build-out until it has its own design-brief pass |
| Technical | Phase 1's database/auth build is read as authorization to also start Phase 2+ features (payments, AI) | Appendix A's gates are explicit per-feature; nothing beyond R1–R4 is authorized by this brief |
| Governance | This brief and JI-PMO-001 drift apart over time with no formal cross-reference | See §7 — recommend a standing pointer from this brief to JI-PMO-001 as the roadmap authority |

---

## 7. Dependencies

- **Minimal brand/visual identity kit** — still the only blocker on the 8 institutional pages' visual design. Carried unchanged from v1.3.
- **`/journey-curated` IA + CMS/tagging decision** — committed as a path (R4), not yet scoped as content. Needs native tagging/taxonomy support for the Curated Experiences framework.
- **Replacement single-domain funnel/IA** — the v1.3 three-domain funnel diagram is retired; nothing has replaced it yet.
- Legal entity details for the Governance page — carried unchanged.
- **Carried forward from v1.3, still open:** the `j-inspired-phase1-operating-system` governance skill file's pillar list should be checked against §3.2's 5-pillar list.
- **New, from JI-PMO-001:** D006 (currency settlement, reopened, relevant once Phase 2/R21 starts), MyIPO trademark clearance on the four "Seeker" persona names (blocks any customer-facing use of those names), the Airtable P0–P10 / PMOS P0–P6 reconciliation (owner: Daryl, not yet confirmed), and the JI-EA-BA-002 version-discrepancy item (I002).
- **New:** this brief is not yet formally cross-referenced with JI-PMO-001 as its own governance chain — `CLAUDE.md` calls this brief the sole source of truth, but JI-PMO-001 is what actually drives Phase 1 scope and dates now. Recommend an explicit pointer be added the next time either document is revised.

---

## 8. Implementation Roadmap

Gated milestones (Investor Relations on monetised+traction, Careers on real openings, Governance on real leadership assets) stand as written in v1.3 — unchanged.

**Near-term:** brand kit (§7) remains the blocker for institutional-page visual design. In parallel, Phase 1 (R1–R4) platform build proceeds per Appendix A, target 15 Oct 2026. `/journey-curated` content scoping is a separate, parallel workstream — not blocking Phase 1, not blocked by it.

---

## 9. Success Metrics

Unchanged from v1.3.

---

## 10. Next Actions

1. Propagate this reconciliation to downstream governance docs: `CLAUDE.md`, `README.md`, `.github/copilot-instructions.md`, `docs/content-governance.md`, and reconciliation-note flags on `docs/master-project-brief.md`, `docs/product-requirements.md`, `docs/information-architecture.md`, `docs/tech-stack.md`, `docs/copilot-build-prompts.md`.
2. Lock the `.group` brand kit — unchanged blocker from v1.3.
3. Scope `/journey-curated`'s own design brief (CMS/tagging decision, IA, content strategy) as a separate, parallel workstream.
4. Add a formal cross-reference between this brief and JI-PMO-001 v1.8 so the two governance documents don't silently diverge.
5. The `j-inspired-phase1-operating-system` governance skill pillar-list check (carried from v1.3 §7) — still unconfirmed, still open.

---

## Appendix A — Phased Delivery Roadmap (source: JI-PMO-001 v1.8, 9 Sep 2026)

This is the company's internal canonical roadmap, reproduced here so this brief and the actual build stay in sync. Each phase beyond Phase 1 is gated on a specific, named precondition — none is scheduled or authorized until its gate is met.

| Phase | Releases | Focus | Status | Gate |
|---|---|---|---|---|
| **1 — Revenue Engine** | R1–R4 | Architecture, database, auth/RBAC, Destination Registry, admin (R1); Product Catalogue, Package Builder, Itinerary Studio, Pricing, Quotes, CRM (R2); Booking Pipeline, invoicing (invoice-only), reconciliation, Supplier Mgmt, fulfilment (R3); `journeyinspired.group` sole domain live — `/travel` destination pages & packages, `/journey-curated` content, enquiries, WhatsApp, analytics, trust, affiliates (R4) | **Committed · target 15 Oct 2026** | — |
| 2 — Smart Concierge | R5–R8, R21 | AI summarisation, CRM enrichment, lead scoring, WhatsApp AI, cross-pillar upsell; **live online payment (Stripe, R21)** | Not started (Pipeline) | R21 gated on D008 — proven Phase 1 revenue repeatability |
| 3 — Intelligent Platform | R9–R12 | Knowledge Hub / AI Knowledge Layer, Health Passport, personalised customer AI agents, predictive pricing | Not started (Pipeline) | R10 (Health Passport) explicitly Conditional — gated on legal/privacy/security sign-off (D010) before any such capability ships |
| 4 — Platform Ecosystem | R13–R16 | Partner onboarding/verification/contracts/settlement, supplier/guide/hospital/university/property portals, Partner Marketplace, Digital Memberships, partner APIs | Not started (Pipeline) | D011 — marketplace liquidity evidence (sufficient supply and demand density) |
| 5 — Community & SaaS | R17–R20 | Community profiles/groups/events, **AI Concierge productised as licensable SaaS (R18)**, regional (SEA) expansion, enterprise/IP governance | Future | Every release gated on proven external willingness-to-pay — no SaaS build precedes internal validation |

**Other governance facts from JI-PMO-001 relevant to this brief:**
- Sub-brand "Seeker" persona names (resolved 24 Aug 2026, closed pending clearance): The Learning Seeker (Education & Experiential Learning), The Lifestyle Seeker (Property & Lifestyle), The Adventure Seeker (Nature, Eco & Adventure), The Culture Seeker (Culture & Heritage). **MyIPO trademark clearance is not yet confirmed** — do not use these names in customer-facing copy or as public route segments.
- Health & Wellness Tourism is described as the anchor pillar across all five phases, with Education, Property, Nature and Culture as the four supporting sub-verticals. This is a hierarchy/emphasis overlay on the existing 5-pillar taxonomy (§3.2), not a rename or restructure of it.
- Daryl's own pasted "north-star" sitemap (Explore, per-pillar sub-pages, Plan Your Journey, Impact/ESG, Insights, etc.) maps loosely into Phases 3–5 territory above but is not itself part of JI-PMO-001 — it is recorded here as directional future context, not scheduled work.

---

*Status: domain consolidation and JI-PMO-001 reconciliation complete. Institutional 8-page scope and 5-pillar taxonomy unchanged. Phase 1 platform build is committed and in progress toward 15 Oct 2026. `/journey-curated` content scope and the brand kit remain open, gating items.*
