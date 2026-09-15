# j-inspired-group

## Purpose
Source code and content for **journeyinspired.group** — now the **single consolidated domain** for the Journey Inspired ecosystem. `journeyinspired.travel` and `journeycurated.com` redirect into this domain as paths (`/travel`, `/journey-curated`) rather than running as separate sites.

The original 8 institutional-audience pages (investors, grant bodies, government, hospitals, universities, developers, insurers) are unchanged. This domain is also, as of this version, building the company's Phase 1 revenue platform (database, auth, product catalogue, booking pipeline) — see `docs/journeyinspired-group_design-brief_v1.4.md` Appendix A.

## Part of J. Inspired Ecosystem
- Brand: Journey Inspired
- Domain: journeyinspired.group (single consolidated domain)
- Phase: Phase 1 — Revenue Engine (per JI-PMO-001 v1.8), non-AI
- Former sibling repos, now consolidated into this domain's paths: `j-inspired-travel` → `/travel`, `journey-curated` → `/journey-curated`. Whether those remain separate *code* repos or fold into this one is not yet decided — this reflects a domain-level consolidation, not a confirmed repo merger.

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
- Source of truth for scope/decisions: `docs/journeyinspired-group_design-brief_v1.4.md`. Where anything else in this repo conflicts with it, v1.4 wins. The company's delivery roadmap, JI-PMO-001 v1.8, is the source of Phase 1's actual scope and dates (canonical home: Google Drive).
- No AI features live yet, no payments live yet. Auth and a database are now part of this repo's scope (Phase 1 platform build). Blog/articles are not part of the 8 institutional pages, but are no longer permanently excluded domain-wide — see `.github/copilot-instructions.md` for the full constraint list.

## Related Repositories
- `j-inspired-travel` and `journey-curated` are no longer separate live domains — their functions now live within this repo's scope (`/travel`, `/journey-curated`), per the design brief.
- `j-inspired-core` — master governance, brand, OS docs (brand kit lands here once finalized)

## Status
Domain consolidation and JI-PMO-001 reconciliation complete (v1.4). Institutional 8-page scope and 5-pillar taxonomy unchanged. Phase 1 platform build committed, target 15 Oct 2026. Brand/visual identity kit still not finalized — see `docs/tech-stack.md`. `/journey-curated`'s own content IA is confirmed in-scope but not yet specified.

## Last Updated
2026-09-15
