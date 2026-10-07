---
name: Site Header
description: Kunemi's compact responsive site navigation.
---

# Site Header

## Source evidence

- Implementation: `artifacts/kunemi-site/src/App.tsx`, lines 91–106.
- Styles: `artifacts/kunemi-site/src/index.css`, lines 91–101 and 252–259.
- Used by `Shell` at `App.tsx:121–123`, which wraps all routed pages.
- Source behavior includes an expandable mobile menu, accessible label and
  `aria-expanded`, and closing the menu after a navigation selection.

## Port contract

- Preserve the brand link, Products / About / Contact navigation, “Explore
  products” CTA, mobile toggle, menu state, and close-on-navigation behavior.
- Use the Brand Mark family for the Kunemi symbol; use semantic links and button
  elements. Routing is supplied by the consuming application.
- At narrow widths, the navigation is hidden until its labelled menu button is
  activated; items then stack below the fixed-height top bar.

## Public export

`components/ui/site-header` — `SiteHeader`.
