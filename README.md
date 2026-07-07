# j-inspired-group

## Purpose
Source code and content for **journeyinspired.group** — the corporate website of Journey Inspired Group Sdn. Bhd. Institutional-audience only: investors, grant bodies, government, hospitals, universities, developers, insurers.

## Part of J. Inspired Ecosystem
- Brand: Journey Inspired
- Domain: journeyinspired.group
- Phase: Phase 1 Market Validation (non-AI)
- Sibling repos: `j-inspired-travel` (commercial), `journey-curated` (media/SEO)

## Contents
| Folder | Purpose |
|---|---|
| `/.github/copilot-instructions.md` | Repo-wide steering for GitHub Copilot — read this first |
| `/docs` | Product requirements, IA, tech stack, content governance, build prompts |
| `/content` | MDX page content (created during build) |
| `/components` | Shared UI components (created during build) |

## Governance
- All changes via pull request. `main` is production.
- File naming: kebab-case.
- All content in Markdown/MDX.
- Source of truth for scope/decisions: `docs/journeyinspired-group_design-brief_v1.3.md`. Where anything else in this repo conflicts with it, v1.3 wins.
- No AI features, no auth, no payments, no blog/articles on this domain. See `.github/copilot-instructions.md` for the full constraint list.

## Related Repositories
- `j-inspired-travel` — commercial site (leads, bookings, payments — the funnel destination for journeycurated.com traffic)
- `journey-curated` — media/SEO site (articles, destination guides — the only domain permitted to publish thought leadership)
- `j-inspired-core` — master governance, brand, OS docs (brand kit lands here once finalized)

## Status
Content and structure decisions complete (v1.3). Brand/visual identity kit not yet finalized — see `docs/tech-stack.md` for how this repo handles that gap in the meantime.

## Last Updated
2026-07-07
