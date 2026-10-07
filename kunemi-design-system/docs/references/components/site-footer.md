---
name: Site Footer
description: Kunemi's shared company and product footer.
---

# Site Footer

## Source evidence

- Product data: `artifacts/kunemi-site/src/App.tsx`, lines 11–16.
- Implementation: `artifacts/kunemi-site/src/App.tsx`, lines 108–119.
- Styles: `artifacts/kunemi-site/src/index.css`, lines 218–223 and 288–290.
- Used by `Shell` at `App.tsx:121–123`, which wraps all routed pages.

## Port contract

- Preserve the company wordmark and description, product-link column,
  company-link column, legal line, and origin tagline.
- Keep the source dark forest surface, pale text, border divider, and narrow
  screen stacking behavior.
- Use standard links and Brand Mark; allow applications to own route handling.

## Public export

`components/ui/site-footer` — `SiteFooter`.
