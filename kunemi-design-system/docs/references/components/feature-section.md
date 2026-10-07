---
name: Feature Section
description: A reusable split-layout feature presentation with a visual slot.
---

# Feature Section

## Source evidence

- Implementation and prop contract: `artifacts/kunemi-site/src/App.tsx`,
  lines 223–228.
- Styles: `artifacts/kunemi-site/src/index.css`, lines 152–160 and 243–246.
- Consumer examples: four product sections at `App.tsx:270–273`.
- The source contract includes an optional `reverse` layout and a caller-supplied
  `ReactNode` visual.

## Port contract

- Preserve `reverse`, kicker, heading, copy, phrase, link destination, CTA text,
  and caller-provided visual.
- Keep source content and product compositions in the consuming app; this
  component provides only the reusable split-section layout.
- Preserve the mobile stacking order and the source's non-reversed ordering at
  narrow widths.
- Reverse the copy and visual columns only above the source's 900px single-column
  breakpoint; on smaller screens keep copy before the visual.
- The preview story uses product marks only to illustrate the caller-owned
  visual slot. It does not bundle any source product UI mockups.

## Public export

Implemented at `src/components/ui/feature-section.tsx`.
Public export: `components/ui/feature-section` — `FeatureSection`.
