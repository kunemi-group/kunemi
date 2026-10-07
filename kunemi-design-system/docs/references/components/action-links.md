---
name: Action Links
description: Source-backed anchor styling for primary, secondary, and text actions.
---

# Action Links

## Source evidence

- Implementation markup and repeated variants: `artifacts/kunemi-site/src/App.tsx`,
  lines 96–103, 254–255, 264, 276, 304, 330.
- Styling and states: `artifacts/kunemi-site/src/index.css`, lines 98–112.
- Representative call sites include the home hero, navigation CTA, feature links,
  closing CTA, about links, product detail link, and not-found action.
- This is a family of repeated styled anchors, not a named React component in the
  source.

## Port contract

- Preserve native anchor semantics, `href`, children, and the source's three
  treatments: primary filled, secondary outlined, and arrow/text link.
- Primary and secondary links have a 4px radius, compact bold text, and subtle
  upward movement on hover. The source's navigation CTA uses the primary
  treatment.
- The source renders directional icons as part of link content; keep icon
  placement with the caller rather than requiring an icon.
- Do not add button-only form behavior or an invented disabled state.
- Source dependency: standard HTML anchor. The original app owns Wouter routing;
  the design system leaves routing to consumers.

## Public export

`components/ui/action-link` — `ActionLink`, with `primary`, `secondary`, and
`text` variants.
