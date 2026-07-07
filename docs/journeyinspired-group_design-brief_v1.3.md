# JourneyInspired.Group — Design Brief

**Domain:** journeyinspired.group
**Role:** Corporate website — credibility, partnerships, governance, grant/investor readiness (institutional audience only)
**Version:** 1.3
**Status:** Taxonomy and content-scope decisions complete. Only remaining blocker before UI work: brand/visual identity kit (see §7).
**Supersedes:** v1.2 — finalizes the pillar taxonomy and resolves how "Curated Experiences" is implemented.

---

## Changelog from v1.2

| Area | v1.2 | v1.3 (final) |
|---|---|---|
| Pillar count | 4 pillars + "Bespoke Experiences" as an unresolved cross-cutting item | **5 pillars, fully named, no naming collisions** |
| Pillar 4 | "Eco Tourism" | **"Nature, Eco & Adventure Tourism"** (broadened) |
| Pillar 5 | Didn't exist | **"Culture & Heritage Tourism"** (new — resolves the earlier "Experiential" naming clash by not using that word here) |
| Curated Experiences | Ambiguous — floated as "cross-cutting layer," "sub-item," and "5th pillar" across three rounds | **Resolved precisely: a methodology + tagging framework**, applicable to any product/content item across any of the 5 pillars. Not a page, not a pillar. |
| Brand promise vs. platform positioning | Conflated | **Separated.** "Curating Transformational Travel Experiences" = brand promise, usable now. "AI-Powered ... Concierge" = future platform positioning, not a live capability claim while Phase 1 is non-AI. |

---

## 1. Executive Summary

The taxonomy question that's run across the last several rounds of this brief is now closed. `.group`'s Ecosystem Model page has a clean, final answer: 5 pillars, no overlapping names, and a cross-cutting tagging concept (Curated Experiences) that lives in the data model, not the navigation. Everything else locked in earlier versions — institutional-only audience, non-AI Phase 1, per-domain tech stack, gated Investor Relations/Careers/Governance content — carries forward unchanged.

The one thing still standing between this brief and actual page design is the brand/visual identity kit. Nothing else is blocking.

---

## 2. Objectives

Unchanged from v1.2.

---

## 3. Analysis

### 3.1 Audience — unchanged

`.group` = institutional only (investors, grant bodies, government, hospitals, universities, developers, insurers). No individual customers — those are served by `.travel` and `journeycurated.com`.

### 3.2 Core business pillars — FINAL

**Brand promise (usable now, in copy):**
> Curating Transformational Travel Experiences

**5 Core Pillars:**

1. **Health & Wellness Tourism** — incl. medical travel facilitation, preventive health, wellness retreats, longevity, men's health, mental wellbeing
2. **Education & Experiential Learning Tourism** — incl. study tours, university visits, professional/corporate learning journeys, skills immersion, educational exchanges
3. **Property & Lifestyle Tourism** — incl. property discovery, MM2H, investment familiarisation, retirement lifestyle, relocation journeys, luxury lifestyle
4. **Nature, Eco & Adventure Tourism** — incl. national parks, marine tourism, hiking, conservation, community tourism, sustainable travel
5. **Culture & Heritage Tourism** — incl. culinary, heritage, arts, festivals, indigenous experiences, local living, creative workshops

**Curated Experiences — methodology + tagging framework, not a pillar:**
A cross-cutting design approach and content/product tag. Any offering under any of the 5 pillars — a bespoke health retreat, a personalized heritage journey, an off-menu property tour — can be tagged "Curated Experience" if it's hand-designed rather than a standard package. This is a **data-model decision** for whoever builds the product catalogue (`.travel`) and content taxonomy (`journeycurated.com`): it should exist as a tag/filter field applied across pillars, not as its own top-level category. `.group` only needs one sentence acknowledging this exists as part of how Journey Inspired designs experiences — it does not need its own page.

**Formally excluded from the pillar list (confirmed across earlier rounds):** AI Digital Concierge, Strategic Consulting, Digital Transformation Services (non-AI, non-agency-services). **Confirmed as product types, not pillars:** Corporate Travel Experiences, Group Travel — these are delivery formats that can apply within any of the 5 pillars (e.g., a corporate wellness retreat, a group heritage tour), same category of thing as Curated Experiences.

### 3.3 Brand promise vs. platform positioning — resolved

Two different statements exist in the source material and they are not interchangeable:

| Statement | What it is | Usable now? |
|---|---|---|
| "Curating Transformational Travel Experiences" | Brand promise / tagline | **Yes** — no capability claim, safe for the homepage hero today |
| "AI-Powered Health, Wellness, Education & Property Travel Concierge" | Future platform positioning | **No, not verbatim** — Phase 1 is confirmed non-AI; using this as live homepage copy would be a capability claim the business can't currently back up. Reserve for when the platform is actually AI-enabled. |

**Recommendation for Phase 1 homepage copy:** lead with the brand promise ("Curating Transformational Travel Experiences"), not the platform positioning line. The platform positioning statement can appear in forward-looking/vision context (e.g., "Our Story," describing where the ecosystem is headed) but should be clearly framed as vision, not current capability.

### 3.4 Tech stack — unchanged from v1.1/v1.2

`.group`: lean, no Clerk/Stripe. `.travel`: full stack incl. Clerk + Stripe. `journeycurated.com`: still undecided, now with one added consideration — since Curated Experiences is a tagging framework, whatever CMS `journeycurated.com` runs on should support structured tagging/taxonomy natively (most modern headless CMS options do), not just flat blog posts. Worth carrying into that domain's own brief.

### 3.5 Content scope — `.group` page-by-page

Unchanged from v1.1 (8 pages: Home, Our Story, Ecosystem Model, Partnership Opportunities, Governance, Press, Careers, Contact). Ecosystem Model page now has its final content: 5 pillar boxes, one line on the Curated Experiences methodology, links out to `.travel` for depth.

### 3.6 Confirmed customer funnel — unchanged from v1.2

```
journeycurated.com (articles/blogs)
        │
        ├──→ Social media & sales/OTA channels
        │
        └──→ Reader interested in a specific itinerary → redirected to .travel
                                                                ▲
                                                                │
                                        Paid social, direct advertising, OTA listings
```

`.group` remains outside this funnel — no node in the diagram, by design.

---

## 4. Options Considered

Unchanged — Option C (phased hybrid) remains the recommendation. The taxonomy work in this version doesn't change the phasing logic, only the content that fills it.

---

## 5. Recommendation

Proceed with the 8-page `.group` scope, lean stack, and final 5-pillar Ecosystem Model page as specified above.

**Updated Homepage brief:**
- Hero: brand promise ("Curating Transformational Travel Experiences"), not the AI platform positioning line
- Group overview: one paragraph
- 5 pillars, shown as equal-weight cards/boxes, no sub-category detail
- One line acknowledging the Curated Experiences methodology (not a separate section)
- Partnership CTA → Partnership Opportunities
- Secondary CTA → Contact

**Updated Ecosystem Model brief:**
- 5 pillar cards (names only, per §3.2)
- Curated Experiences called out as "how we design every journey," with a short explanatory line — not a 6th card
- Links out to `.travel` for pillar-level depth and `journeycurated.com` for related content

---

## 6. Risks (R-MAP) — carried forward + one addition

All risks from v1.2 stand (naming/compliance flags for MM2H and medical travel, investor-content gating, Careers pacing). One addition:

| Category | Risk | Mitigation |
|---|---|---|
| Reputational | Homepage or Our Story copy slips into using "AI-Powered ... Concierge" as a present-tense capability claim | Enforce §3.3's distinction in every copywriting pass — brand promise now, platform positioning only in clearly-framed vision/future context |

---

## 7. Dependencies

- **Minimal brand/visual identity kit — the only remaining blocker.** Color palette, type scale, logo usage guidelines do not yet exist anywhere reviewed. UI/wireframe work cannot meaningfully start without this.
- `journeycurated.com` CMS decision (now slightly sharper: needs native tagging/taxonomy support for the Curated Experiences framework)
- Legal entity details for the Governance page
- **Dependency flag carried forward from earlier in this project:** the `j-inspired-phase1-operating-system` governance skill file still reflects an outdated pillar list (from before this taxonomy was finalized). It should be updated to the 5-pillar list in §3.2 so downstream skills (content engine, product designer, market intelligence) don't inherit stale assumptions. I can draft that correction on request.

---

## 8. Implementation Roadmap

Unchanged from v1.2 — gated milestones (Investor Relations on monetised+traction, Careers on real openings, Governance on real leadership assets) stand as written.

**Immediate next step:** brand kit (§7), since it's the only open dependency blocking design work.

---

## 9. Success Metrics

Unchanged from v1.1/v1.2.

---

## 10. Next Actions

1. **Update the Phase 1 governance skill file** with the final 5-pillar taxonomy — recommend doing this now, before it's referenced by another skill and the stale version propagates further
2. Lock the `.group` brand kit (color, type, logo usage) — the actual blocker at this point
3. Move to wireframes and/or copywriting for the 8 `.group` pages, using the updated Homepage and Ecosystem Model briefs in §5
4. Separately, when ready: `journeycurated.com`'s own design brief (CMS/tagging decision, content strategy, distribution to social/OTA channels)

---

*Status: `.group`'s design brief is content-and-structure complete. Brand kit is the sole remaining gate before design work begins.*
