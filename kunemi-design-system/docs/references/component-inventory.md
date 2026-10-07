# Component inventory

Source: the existing Kunemi Technology website in `artifacts/kunemi-site`.
Implementation locations and call sites are recorded in each family reference.
The design system intentionally excludes page-specific compositions and the
website's app shell.

| Family | Reference | Dependencies / blockers | Importance evidence | Chunk | Status |
| --- | --- | --- | --- | --- | --- |
| Action Links | `components/action-links.md` | React; mark is not required | Shared primary/secondary/text-link styles used across home, product-detail, and not-found views; one consumer source file | Pilot | implemented |
| Brand Mark | `components/brand-mark.md` | None | Company mark appears in header and footer; product marks appear in product cards; one consumer source file | Pilot | implemented |
| Site Header | `components/site-header.md` | Brand Mark; Action Links | Shared responsive navigation used by every page through the site shell; one consumer source file | Pilot | implemented |
| Product Card | `components/product-card.md` | Brand Mark; Action Links | One data-driven component renders all four products; one consumer source file | Pilot | implemented |
| Site Footer | `components/site-footer.md` | Brand Mark | Shared company and product links used by every page through the site shell; one consumer source file | Pilot | implemented |
| Feature Section | `components/feature-section.md` | Action Links; caller-provided visual slot | Reused for all four product features on the home page; one consumer source file | Later 1 | implemented |

The codebase has one consumer source file for these internal components; within
that file, reuse and the shared product data break ties. The interactive site
navigation uses Wouter in the app. The design-system components keep semantic
anchor behavior, leaving router ownership to consuming applications.
