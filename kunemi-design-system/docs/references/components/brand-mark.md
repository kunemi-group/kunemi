---
name: Brand Mark
description: The Kunemi and four product symbols from the existing site.
---

# Brand Mark

## Source evidence

- Implementation: `artifacts/kunemi-site/src/App.tsx`, lines 76–89.
- Call sites: header line 96, footer line 112, product card line 150.
- Brand icon asset: `artifacts/kunemi-site/public/favicon.svg`, retained in this
  package as `docs/references/logos/kunemi-mark.svg` and `public/kunemi-mark.svg`.
- The source mark accepts a product `type` and optional `className`; it renders
  the Kunemi node mark or Dotrix, Shopflow, Commerce, and Kumove product marks.

## Port contract

- Preserve the five source variants and `className` customization.
- The source's unknown-type behavior falls through to the Kumove mark; retain that
  fallback.
- Source colors follow `currentColor` for inline product marks. The retained
  official favicon mark is a separate, static SVG; it is sanitized and has no
  scripts, event handlers, embedded documents, or external references.
- No source behavior dependencies.

## Public export

`components/ui/mark` — `Mark`.
