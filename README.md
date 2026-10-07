# Kunemi website and design system

This repository contains two pnpm workspace projects:

- `kunemi/` — the marketing website
- `kunemi-design-system/` — the component and token preview

## Website structure

The marketing site keeps routing in `kunemi/src/App.tsx`, route content in `kunemi/src/pages/`,
shared layout and sections in `kunemi/src/components/`, product copy in
`kunemi/src/data/site-content.ts`, and metadata behavior in `kunemi/src/hooks/use-seo.ts`.
Tailwind CSS 4 provides utility classes and theme tokens; the shared Button and Card primitives
live in `kunemi/src/components/ui/`.

## Local development

Install dependencies from this repository root with `pnpm install`, then run:

```sh
pnpm dev
```

The website runs at `http://localhost:5173`; the design system runs at `http://localhost:5174`.
Use `pnpm dev:site` or `pnpm dev:design` to start just one project.

## Cloudflare Pages

Connect the repository to Cloudflare Pages with the repository root as the project root.
Set the build command to `pnpm --filter @workspace/kunemi-site build` and the build output
directory to `kunemi/dist/public`. Cloudflare Pages uses SPA routing automatically because
the website has no top-level `404.html` file.

## Cloudflare Workers

The website includes a Wrangler configuration for Workers Static Assets. Run
`pnpm cloudflare:dev` to build and preview it locally or `pnpm cloudflare:deploy` to build and
deploy. Authenticate Wrangler with `pnpm exec wrangler login` before deploying.
