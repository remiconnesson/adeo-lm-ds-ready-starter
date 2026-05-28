# Orientation

This is a **Mozaic starter** — a Next.js app that doubles as a living catalogue of Adeo's design system (https://mozaic.adeo.cloud/). Use it as a reference for how to wire up `@mozaic-ds/*` in a modern Next.js project, and as a place to prototype new component demos.

## What ships in the box

- **Two showcase surfaces** — `/c/[slug]` for single-component demos (60+ entries in `DEMOS`), `/examples/[slug]` for multi-component compositions (sign-in, settings, checkout, dashboard).
- **Theme picker** — switch between Leroy Merlin and Adeo brand palettes at runtime (`src/components/showcase/ThemePicker.tsx` + `src/themes/{leroymerlin,adeo}.scss`).
- **Icon catalogues** — `/icons` (monochrome SVG) and `/icons-color` (colour SVG), backed by `scripts/build-icons.mjs` which copies icon assets at build time.
- **Sidebar nav** — generated from the component + example registries.

## Who Mozaic is for

Mozaic is Adeo's open-source design system. The default visual language is the **Leroy Merlin** brand (green primary, Leroy Merlin Sans). An **Adeo preset** retunes the palette for the parent group's identity. Both presets are wired up here; see [`04-tokens-and-spacing.md`](04-tokens-and-spacing.md).

## What Mozaic packages this starter uses

| Package | Version range | What you get |
| --- | --- | --- |
| `@mozaic-ds/styles` | `^2.22` | SCSS framework: settings, tools, generic, typography, layouts, components, utilities. Module-style (`@use`). |
| `@mozaic-ds/tokens` | `^2.22` | Design tokens (color, spacing, font, radius, shadow, screens). Exposes `get-token(...)` + per-token functions. |
| `@mozaic-ds/icons` | `^2.5` | SVG icon library; `scripts/build-icons.mjs` copies what we need into `public/`. |
| `@mozaic-ds/react` | `^1.14` | React bindings: `<Button>`, `<Modal>`, `<DataTable>`, etc. Renders the same `.mc-*` markup. |
| `@mozaic-ds/web-fonts` | `^1.65` | Leroy Merlin Sans `.woff2` files; loaded via `next/font/local` in `src/app/layout.tsx`. |

## Reading order for new agents

1. The root `AGENTS.md` — class prefixes, version note, project gotchas (zero `.mc-*` discoverability, two slug spaces).
2. [`01-projects.md`](01-projects.md) — repo tour: routes, registries, theme system, build scripts.
3. [`02-mozaic-versions.md`](02-mozaic-versions.md) — this starter is v2; the website still documents v1. Only read this when writing SCSS or interpreting upstream docs.
4. Domain-specific files (`03`…`07`) on demand.

## Sources of truth

| For… | Read… |
| --- | --- |
| What v2 actually ships | `node_modules/@mozaic-ds/styles/components/<name>/_c.<name>.scss` |
| Token names / values | `node_modules/@mozaic-ds/tokens/` (use `get-token`, `get-spacing`, etc.) |
| React component props | `node_modules/@mozaic-ds/react/lib/components/<Name>/index.d.ts` |
| Conceptual guidance, design rules, content design | https://mozaic.adeo.cloud/ |
| The starter's own conventions | this directory |

When training-data Next.js / Mozaic conflicts with what the installed packages show, trust the packages.
