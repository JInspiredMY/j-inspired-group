# JourneyInspired.Group Website Build

**Status:** Reconciled against design brief v1.3 (see `docs/journeyinspired-group_design-brief_v1.3.md`). This version corrects three conflicts with that brief that existed in the prior draft of this document — see changelog.

## Changelog

| # | What changed | Why |
|---|---|---|
| 1 | Platform positioning reframed from "the website should reflect this" to "future vision, not a Phase 1 claim" | v1.3 §3.3: Phase 1 is confirmed non-AI. The AI-Powered Concierge line is a capability claim the business can't currently back up. |
| 2 | Core Business Verticals replaced with the finalized 5-pillar list | v1.3 §3.2: closed a 3-round taxonomy conflict. The prior 10-item list contained 3 formally excluded categories and 2 items now confirmed as product delivery formats, not pillars. |
| 3 | "Thought leadership" / "central knowledge hub" reframed as routing to journeycurated.com, not a `.group` deliverable | v1.3: thought leadership/articles are permanently excluded from `.group`. It stays outside the content/SEO funnel by design. |

---

## Project Objective

Build the official **JourneyInspired.Group** corporate website as the strategic digital headquarters for **Journey Inspired Group Sdn. Bhd.**

The website will establish credibility, communicate our vision, showcase our integrated business ecosystem, and generate qualified opportunities from customers, strategic partners, healthcare providers, tourism stakeholders, educational institutions, property partners, investors, and government agencies.

JourneyInspired.Group will serve as the primary corporate presence, demonstrating our capabilities while connecting visitors to our business platforms, services, and ecosystem.

The website's **current** positioning is:

> **Curating Transformational Travel Experiences**

The **future** platform positioning — reserved for when the platform is actually AI-enabled, and appearing only in clearly vision-framed content (never as present-tense homepage copy) — is:

> AI-Powered Health, Wellness, Education & Property Travel Concierge

---

## Project Goals

The project aims to design, build, and continuously improve a modern, scalable, and production-ready corporate website that supports long-term business growth.

The website should deliver:

- Corporate branding
- Business positioning
- Trust and credibility
- Lead generation
- Strategic partnership opportunities
- Investor readiness
- Grant readiness
- Employer branding
- Knowledge ecosystem entry point (routes to journeycurated.com — see Website Objectives)

---

## Deliverables

Develop production-ready assets including:

- Website Strategy
- Information Architecture
- Site Map
- UX Strategy
- UI Design System
- Brand Guidelines
- Messaging Framework
- Website Copywriting
- Landing Pages
- Technical Architecture
- Product Requirements
- CRM Strategy
- Analytics Implementation
- Governance Documentation
- Content Management Strategy
- API Integration Planning
- Performance Optimization
- Accessibility Compliance

**Not `.group` deliverables — belong to other domains:** SEO strategy and AI Search Optimization (AEO/GEO) are journeycurated.com's job, since `.group` isn't a discovery/traffic play. Thought leadership content lives solely on journeycurated.com.

---

## Business Context

Company:

**Journey Inspired Group Sdn. Bhd.**

Brand:

**Journey Inspired**

Tagline (current, usable everywhere):

> Curating Transformational Travel Experiences

Platform Positioning (future-state only — see Project Objective):

> AI-Powered Health, Wellness, Education & Property Travel Concierge

Primary Website:

- journeyinspired.group

Supporting Websites:

- journeyinspired.travel
- JourneyCurated.com

---

## Website Objectives

The website should:

- Build trust
- Explain the company
- Present the business ecosystem
- Showcase products and services (at overview level — depth lives on `.travel`)
- Generate qualified leads (partnership/institutional enquiries, not consumer conversion)
- Attract strategic partnerships
- Support grant applications
- Support investor engagement
- **Serve as the ecosystem's corporate entry point** — routing visitors to journeycurated.com for knowledge content and `.travel` for products, rather than hosting that content itself

---

## Core Business Pillars — final, 5 pillars

1. **Health & Wellness Tourism** — incl. medical travel facilitation, preventive health, wellness retreats, longevity, men's health, mental wellbeing
2. **Education & Experiential Learning Tourism** — incl. study tours, university visits, professional/corporate learning journeys, skills immersion, educational exchanges
3. **Property & Lifestyle Tourism** — incl. property discovery, MM2H, investment familiarisation, retirement lifestyle, relocation journeys, luxury lifestyle
4. **Nature, Eco & Adventure Tourism** — incl. national parks, marine tourism, hiking, conservation, community tourism, sustainable travel
5. **Culture & Heritage Tourism** — incl. culinary, heritage, arts, festivals, indigenous experiences, local living, creative workshops

**Confirmed NOT pillars — do not reintroduce as top-level categories:**
- **Curated Experiences** — a cross-cutting methodology/tag applied across all 5 pillars, not a 6th pillar
- **Corporate Travel Experiences / Group Travel** — product delivery formats that apply within any pillar
- **AI Digital Concierge, Strategic Consulting, Digital Transformation Services** — formally excluded from the pillar list (non-AI Phase 1, non-agency-services)

---

## Success Principles

All recommendations should prioritize:

- Business value
- Customer value
- Scalability
- Maintainability
- Long-term sustainability
- Implementation readiness
- Operational efficiency
- Knowledge continuity

Avoid unnecessary complexity.

---

## Decision Framework

Every recommendation should include:

### Reasoning
Explain why the recommendation is appropriate.

### Assumptions
Clearly identify assumptions.

### Risks
Identify technical, operational, financial, and business risks.

### Risk Mitigation
Provide practical mitigation strategies.

### KPIs
Recommend measurable success metrics.

### Implementation Plan
Provide phased implementation steps.

---

## Content Principles

Content should:

- Build trust
- Demonstrate expertise
- Be clear and concise
- Be evidence-based
- Be evergreen whenever possible
- Encourage action

Avoid marketing clichés.

Prioritize clarity, credibility, and authenticity.

SEO and AI Search Optimization are journeycurated.com's concern, not `.group`'s — see Deliverables.

---

## UX Principles

Recommend experiences that are:

- Mobile-first
- Accessible (WCAG)
- Responsive
- Fast
- Conversion-focused (institutional lead capture, not consumer conversion)
- User-centric
- Easy to navigate
- Easy to maintain

---

## Technical Principles

Unless otherwise specified, assume the following technology stack:

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- Vercel
- Supabase
- PostgreSQL
- GitHub
- GitHub Actions
- Clerk Authentication
- Stripe
- Resend
- PostHog
- Google Analytics 4
- Cloudflare

Recommend alternatives only when there is a strong business or technical justification.

**Already specified otherwise for `.group`:** no Clerk, no Stripe, no Supabase/Postgres. Lean stack — see `docs/tech-stack.md` for the reasoning. This is the "unless otherwise specified" clause exercised deliberately, not an oversight.

---

## Documentation Standards

Major deliverables should follow this structure:

1. Executive Summary
2. Objectives
3. Analysis
4. Options Considered
5. Recommendation
6. Risks
7. Dependencies
8. Implementation Roadmap
9. Success Metrics
10. Next Actions

---

## Knowledge Continuity

Treat every conversation as a continuation of this project.

Before generating new work:

- Review previous outputs
- Reuse existing documentation where appropriate
- Avoid duplication
- Improve rather than recreate
- Maintain consistency across terminology, branding, architecture, and documentation

---

## Preferred Deliverables

Whenever appropriate, generate:

- Markdown Documentation
- Product Requirement Documents (PRDs)
- User Stories
- Technical Specifications
- Architecture Diagrams
- Information Architecture
- Site Maps
- Wireframes
- SOPs
- Checklists
- Roadmaps
- Decision Matrices
- Risk Registers
- KPI Dashboards
- Mermaid Diagrams
- Tables
- Flowcharts

All deliverables should be production-ready and suitable for long-term project documentation in GitHub.

---

## Definition of Success

The project will be considered successful when JourneyInspired.Group becomes:

- The authoritative corporate website for Journey Inspired Group Sdn. Bhd.
- A trusted source of information for institutional customers and partners.
- A scalable digital platform supporting future business expansion.
- A lead generation and partnership acquisition channel.
- The ecosystem's corporate entry point — routing to `.travel` and journeycurated.com rather than duplicating their content.
- A well-documented, maintainable, and future-ready digital asset.
