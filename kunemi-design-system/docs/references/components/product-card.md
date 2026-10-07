---
name: Product Card
description: The source site's data-driven card for a Kunemi product.
---

# Product Card

## Source evidence

- Product data: `artifacts/kunemi-site/src/App.tsx`, lines 11–16.
- Component: `artifacts/kunemi-site/src/App.tsx`, lines 148–156.
- Grid and card styles: `artifacts/kunemi-site/src/index.css`, lines 133–142.
- Consumer: `ProductOverview` maps the shared product data at `App.tsx:158–164`;
  the four source product records produce four cards.

## Port contract

- Preserve the content hierarchy: product mark, uppercase category, name,
  concise description, status, and explore action.
- Preserve the four source records' distinct product names, categories, and
  descriptions in the story. Their status remains “Building”.
- The entire card is a semantic anchor. Use Brand Mark; keep hover lift and
  square, grid-aligned styling. Do not imply a live destination or availability.

## Public export

`components/ui/product-card` — `ProductCard` and `ProductCardData`.
