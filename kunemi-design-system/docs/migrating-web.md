# Migrating web UI to Kunemi Design System

Read `artifacts/kunemi-design-system/docs/AGENTS.md`,
`artifacts/kunemi-design-system/SKILL.md`, and
`artifacts/kunemi-design-system/docs/consuming-web.md` first. This guide applies
only after the user approves applying the system to an existing app.

## Replace the local theme

Import `@workspace/kunemi-design-system/styles.css` once from the app's main CSS.
Keep app-specific layouts and illustrations local; remove duplicate token blocks
only where they are superseded by the package.

## Use the source-backed components

Import available families directly:

- `components/ui/action-link`
- `components/ui/mark`
- `components/ui/site-header`
- `components/ui/product-card`
- `components/ui/site-footer`
- `components/ui/feature-section`

Keep route ownership and product-specific page content in the app. The package
uses semantic anchors and leaves navigation behavior to consumers. Feature
Section keeps custom product art in the app through its `visual` prop.

## Verify migration

Before replacing more than one local component, render a package primitive using
the package theme, run the app's typecheck, and start the dev server. Keep
components that do not have a corresponding source-backed package family.
