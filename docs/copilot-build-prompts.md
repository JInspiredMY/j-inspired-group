# Copilot Build Prompts — journeyinspired.group

Ready-to-paste prompts for GitHub Copilot Chat (VS Code) or Copilot coding agent, in build order. Each assumes `.github/copilot-instructions.md` is already in the repo and being picked up (Copilot reads it automatically — no need to paste its contents into these prompts).

Run these roughly in order. Review the diff after each before moving to the next — don't chain them unattended, especially early on while the placeholder-token decision is still open.

---

### Prompt 1 — Repo scaffold

```
Scaffold a new Next.js 14+ App Router project in TypeScript with Tailwind CSS
and shadcn/ui initialized. No auth, no database, no payment libraries — do not
install Clerk, Stripe, Supabase, or any ORM. Set up:
- /app with a root layout and placeholder routes for the 8 pages listed in
  docs/information-architecture.md
- /content for MDX page content
- /components for shared UI (Nav, Footer, PillarCard, EnquiryForm)
- /styles or a Tailwind theme extension for a single placeholder design-token
  file, per docs/tech-stack.md — every value in it commented
  "PLACEHOLDER — pending brand kit"
Follow docs/information-architecture.md for exact routes and
.github/copilot-instructions.md for constraints. Do not add pages beyond
the 8 listed.
```

---

### Prompt 2 — Content model

```
Define an MDX frontmatter schema for page content in /content, covering:
title, slug, seoTitle, seoDescription, and a status field
(live | placeholder | gated) so gated sections (Investor content, Careers
listings, Governance leadership/legal) can be flagged in content rather than
hardcoded in components. Create one MDX file per page from
docs/information-architecture.md, using status: placeholder for anything
docs/content-governance.md marks as gated. Do not write filler copy for
gated sections — use a short honest placeholder line instead
(e.g. "Details forthcoming").
```

---

### Prompt 3 — Home page

```
Build the Home page per the "1. Home" spec in docs/information-architecture.md.
Hero copy must use the brand promise "Curating Transformational Travel
Experiences" — do NOT use the AI platform-positioning line here, per
docs/content-governance.md. Pillar section renders the 5 canonical pillars
from docs/content-governance.md as equal-weight cards, names only, no
sub-category copy. Include the one-line Curated Experiences acknowledgment
as plain text, not a card. Primary CTA → /partnerships, secondary → /contact.
```

---

### Prompt 4 — Ecosystem Model page

```
Build the Ecosystem Model page per its spec in docs/information-architecture.md.
5 pillar cards using the canonical names and descriptions in
docs/content-governance.md. Curated Experiences gets one short explanatory
block, not a 6th card. Include external links out to journeyinspired.travel
(pillar depth) and journeycurated.com (related content) — these are external
links, not internal routes.
```

---

### Prompt 5 — Partnership Opportunities + Contact

```
Build Partnership Opportunities and Contact per their specs in
docs/information-architecture.md. Both need forms — reuse a single
EnquiryForm component with a type prop (general | partnership | media |
careers) so routing logic (which inbox a submission goes to) lives in one
place. Wire form submission to Resend for transactional email delivery —
no database storage of submissions unless I ask for that separately.
```

---

### Prompt 6 — Careers, Governance, Our Story, Press

```
Build Careers, Governance, Our Story, and Press per their specs in
docs/information-architecture.md.
- Careers: interest form only (reuse EnquiryForm, type: careers). Do not
  build job listings, applications, or a vacancy CMS.
- Governance: minimal placeholder content per its gated status in
  docs/content-governance.md — do not fabricate leadership bios or legal
  entity details.
- Our Story: the AI platform-positioning line is only permitted here,
  clearly framed as future vision, not present-tense capability.
- Press: press releases/announcements only — this is not the same content
  type as journeycurated.com's articles. Do not build a blog.
```

---

### Prompt 7 — Analytics

```
Add GA4 and PostHog to the app, respecting standard cookie-consent practice
for the audience regions this site targets. No other tracking/analytics
tools.
```

---

### Prompt 8 — Deploy

```
Set up the Vercel deployment config and document the Cloudflare DNS pointing
steps in a docs/deployment.md file. No environment variables should be
needed beyond Resend's API key and analytics IDs — flag it to me if
something else turns out to be required.
```

---

## After the brand kit lands

```
The real brand kit is now available at [location]. Update the single
placeholder token file per docs/tech-stack.md with the real values. Do not
touch component logic, copy, or routing — this should be a token-file-only
change. Flag anywhere a component appears to have a hardcoded value outside
that file, since it shouldn't.
```
