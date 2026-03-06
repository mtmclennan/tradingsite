# Architecture Overview

This document explains how EdgeInMind is structured and how data/UI responsibilities are split.

## 1) High-level system design

EdgeInMind is a **Next.js App Router** frontend that consumes content from an external backend service.

- Blog and sitemap content are fetched server-side from configured environment URLs.
- Interactive calculators and forms are client-side React components.
- A shared app shell (header/footer/layout) wraps route content.

## 2) Request + rendering flow

### Blog listing (`/blog`)

1. Route-level page (`src/app/blog/page.tsx`) fetches posts using `getAllPosts`.
2. Data is passed to the client component `src/app/blog/Blog.tsx`.
3. Client logic sorts posts, selects featured article, and paginates the rest.

### Blog detail (`/blog/[slug]`)

1. Route page loads post data using `getBySlug`.
2. `generateMetadata` also uses that data for dynamic title/description.
3. `PostContent` renders markdown as sanitized HTML through `useRemark`.

### Tools (`/tools/*`)

- Route pages mount calculator containers.
- Calculator components handle form state + output rendering.
- Numerical logic is delegated to pure utility helpers in `components/tools/calculators/utils.ts`.

## 3) Directory responsibilities

```text
src/
  app/                    # App Router pages and route segments
  components/
    layouts/              # Header, footer, app-level chrome
    posts/                # Blog card/detail presentation
    tools/                # Calculator tool implementations
    UI/                   # Shared reusable UI building blocks
    forms/                # Contact and form-centric components
  hooks/                  # Reusable client logic hooks
  lib/                    # API helpers and shared utilities
  styles/                 # Global styles and SCSS abstracts
  types/                  # Shared TypeScript interfaces/types
public/                   # Static assets
```

## 4) Key architectural decisions

### A. App Router with mixed server/client components

- **Server components/pages** handle data fetching and metadata.
- **Client components** handle local interaction state, pagination, inputs, and calculators.

Why: keeps interactive logic on the client while preserving clean route-level data boundaries.

### B. Reusable hooks for form + network patterns

- `use-input` standardizes input state, touched state, and validation behavior.
- `use-http` wraps async fetch state (`isLoading`, `error`) + callback handling.

Why: avoids duplicate form/network boilerplate across feature components.

### C. Markdown transformation with sanitization

`use-remark` pipeline:

1. `remark-parse` (markdown parsing)
2. `remark-rehype` (md AST → HTML AST)
3. `rehype-stringify` (serialize HTML)
4. `DOMPurify.sanitize` before rendering

Why: enables rich content from backend while reducing XSS risk.

### D. Tool-specific math extracted into utilities

Position sizing/risk formulas are implemented in utility functions rather than inline JSX.

Why: improves readability and makes future unit testing straightforward.

## 5) SEO and discoverability

- Route-level metadata is set for many pages.
- `src/app/sitemap.ts` generates static + dynamic (post slug) URLs for indexing.

## 6) Current technical debt / improvement opportunities

- Some components still rely on `any` for state/props.
- Inconsistent metadata patterns (`metadata` exports vs `next/head` usage).
- No automated test suite for utility math or key component flows.
- Legacy/import cleanup opportunities (minor dead imports and naming consistency).

## 7) What this demonstrates for employers

This codebase demonstrates practical frontend product engineering skills:

- Designing route/data/component boundaries
- Building reusable hooks and UI systems
- Implementing domain-specific interactive tools
- Integrating content pipelines securely
- Shipping SEO-aware application features
