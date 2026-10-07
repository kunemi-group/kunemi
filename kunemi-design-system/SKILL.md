# Kunemi Design System

## Source and status

Extracted from the existing Kunemi Technology website in this workspace. Its CSS
and theme variables are the source of truth for the palette, typography, radius,
layout, and motion. Manrope and DM Mono are loaded from Google Fonts.

The dark set is derived for the design-system preview. The source defines a light
site theme and dark forest-green sections, but no complete dark theme.

The source-backed component inventory lives at
`docs/references/component-inventory.md`. Read the relevant family reference
before changing a cataloged component. The approved first component pilot
contains Action Links, Brand Mark, Site Header, Product Card, and Site Footer.
Feature Section was added after pilot approval. All six inventoried families are
now implemented and documented.

## Observed visual patterns

- Use Manrope for headings and body copy. Use DM Mono for compact uppercase
  labels and technical metadata.
- The site pairs warm off-white surfaces with forest-green actions, deep-green
  sections, restrained borders, and square or four-pixel corners.
- Primary links use a filled treatment; secondary links use a fine outline;
  text links use a simple arrow cue.
- Product cards place a product mark and uppercase category above the title,
  then concise copy and a low-emphasis status/action row.
- The site's motion is restrained and includes a reduced-motion override.

These are observations from the rendered implementation; the website does not
contain authored component-usage documentation.

## Product language

Keep the four product roles separate: Dotrix is an AI software-development
workspace; Shopflow is customer-facing social discovery and shopping; Kunemi
Commerce is business-facing commerce operations; Kumove is postcode-aware
movement and delivery infrastructure. Describe their shared ecosystem as a
direction, not as a current technical integration. The site labels products
“Building”; do not imply launch, availability, or live integrations.

## Package components

Implemented component families:

- `components/ui/action-link`
- `components/ui/mark`
- `components/ui/site-header`
- `components/ui/product-card`
- `components/ui/site-footer`
- `components/ui/feature-section`
