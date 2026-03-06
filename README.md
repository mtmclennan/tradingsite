# EdgeInMind

> A trading education website built with Next.js, featuring a content-focused blog and practical risk/calculation tools for retail traders.

## Why this project exists

EdgeInMind was built to combine two things traders constantly need:

1. **Clear educational content** (blog posts)
2. **Fast decision-support tools** (position size, risk, and simulation calculators)

This repository is an archived snapshot of that product direction and implementation.

## Employer-focused project summary

If you're reviewing this as a hiring manager or recruiter, here are the key engineering signals:

- **Modern React/Next.js stack** (Next.js 14 App Router + TypeScript)
- **Separation of concerns** between routing, API/data utilities, reusable hooks, and presentation components
- **Domain-driven UI features** (trading calculators with isolated math utilities)
- **Security-conscious markdown rendering** using `unified` + `DOMPurify`
- **Production-oriented SEO support** including dynamic sitemap generation

## Core features

- Blog listing with a featured post + pagination
- Dynamic blog post pages loaded by slug
- Markdown-to-HTML rendering pipeline for post content
- Trading tools section with calculators:
  - Trade Order Calculator
  - ATR-based Trade Order Calculator
  - Risk on Trade Calculator
  - Equity Curve Simulator
- Contact form flow with reusable validation and HTTP hooks

## Tech stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript + React 18
- **Styling:** Sass/SCSS modules + global base styles
- **Content processing:** `unified`, `remark-*`, `rehype-stringify`, `dompurify`
- **Charts/visualization:** Recharts
- **Build/runtime:** Node.js, npm/yarn

## Architecture at a glance

- `src/app/*` — Route segments and page-level data loading
- `src/components/*` — Reusable UI and feature components
- `src/components/tools/*` — Calculator components and tool-specific UX
- `src/hooks/*` — Shared client logic (`use-input`, `use-http`, `use-remark`)
- `src/lib/*` — API/data helpers and utility functions
- `src/types/*` — Shared TypeScript interfaces

For a deeper walk-through, see **[docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)**.

## Local development

```bash
npm install
npm run dev
```

Default dev URL from scripts:

- `http://localhost:3000`

## Environment variables

Create a `.env.local` file with values for the external backend used by this app:

```bash
SERVER_URL=<posts collection endpoint>
SERVER_URL_BY_SLUG=<single-post endpoint prefix>
NEXT_PUBLIC_SERVER_CONTACT_URL=<contact form endpoint>
```

## Notes

- This repository is currently treated as an **archived/reference project**, not an actively maintained production app.
- The backend content source referenced historically is [PluralPost](https://github.com/mtmclennan/PluralPost).

## Potential next improvements

- Add tests for calculator utility functions
- Tighten TypeScript types in blog/tool state (replace `any` usage)
- Centralize and standardize metadata strategy across all routes
- Improve accessibility and keyboard interactions in calculator/form components

---

If you want, I can also add a concise one-page **`docs/CASE_STUDY.md`** optimized for portfolio storytelling (problem → decisions → tradeoffs → outcomes).
