# Consuming Kunemi Design System in web apps

Read `artifacts/kunemi-design-system/docs/AGENTS.md` and
`artifacts/kunemi-design-system/SKILL.md` first. This guide covers React/Vite and
other web consumers.

## Theme

Import the package theme once from the application's main stylesheet:

```css
@import "@workspace/kunemi-design-system/styles.css";
```

The theme imports Tailwind, the token roles, and the package component sources.
Do not add a second Tailwind import in a Tailwind v4 consumer. For Tailwind v3,
retain its directives and include the package component source in `content`.

## Component families

The source-backed components export:

```tsx
import { ActionLink } from "@workspace/kunemi-design-system/components/ui/action-link";
import { Mark } from "@workspace/kunemi-design-system/components/ui/mark";
import { SiteHeader } from "@workspace/kunemi-design-system/components/ui/site-header";
import { ProductCard } from "@workspace/kunemi-design-system/components/ui/product-card";
import { SiteFooter } from "@workspace/kunemi-design-system/components/ui/site-footer";
import { FeatureSection } from "@workspace/kunemi-design-system/components/ui/feature-section";
```

Use the matching package component where it fits. Keep route handling, product
data, and page-specific compositions in the consuming app. `FeatureSection`
owns the responsive split layout and takes its product-specific visual through
the required `visual` prop.

## Verify

After adding the workspace dependency, render one package component and run the
consumer typecheck and dev server before replacing broader local UI.
