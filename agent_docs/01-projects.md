# Repo tour

Map of what lives where in this starter. Update this file when adding new top-level structure.

## Routes

```
src/app/
  layout.tsx              # Loads Leroy Merlin Sans via next/font/local + wraps in ThemeProvider
  page.tsx                # Landing page
  globals.scss            # @use'd Mozaic primitives + showcase chrome
  c/[slug]/page.tsx       # Single-component showcase route → COMPONENTS + DEMOS
  examples/[slug]/page.tsx# Multi-component example route → EXAMPLES + EXAMPLE_COMPONENTS
  icons/page.tsx          # Monochrome icon catalogue
  icons-color/page.tsx    # Colour icon catalogue
```

Both `[slug]` routes use `generateStaticParams` to pre-render every entry in their registry. Hitting an unregistered slug returns `notFound()`.

## Registries (single sources of truth)

```
src/lib/components-registry.ts   COMPONENTS[]  → drives /c/[slug] + sidebar
src/lib/examples-registry.ts     EXAMPLES[]    → drives /examples/[slug] + sidebar
src/lib/icons.ts                 icon manifest used by /icons and /icons-color
```

`COMPONENTS` and `EXAMPLES` each export a helper (`getBySlug` / `getExampleBySlug`) used by the dynamic routes. **There is no compile-time link between a slug in either registry and the runtime demo map** — see gotcha #2 in the root `AGENTS.md`.

## Demo & example modules

```
src/components/showcase/
  demos/                  # 60+ one-off component demos, one file per slug (e.g. button.tsx)
    index.ts              # exports DEMOS: Record<slug, { Demo, importLine }>
  examples/               # multi-component composition demos
    index.ts              # exports EXAMPLE_COMPONENTS: Record<slug, ComponentType>
    sign-in.tsx
    settings.tsx
    checkout.tsx
    dashboard.tsx
  ComponentPage.tsx       # frame used by /c/[slug] (sidebar, code snippet, theme picker)
  ExamplePage.tsx         # frame used by /examples/[slug]
  ComingSoon.tsx          # fallback rendered when a slug has a registry entry but no demo
  ThemePicker.tsx         # toggles data-theme attribute on <html>
  ThemeProvider.tsx       # client component that persists theme choice
  Sidebar.tsx             # generated from COMPONENTS + EXAMPLES
  IconCatalog.tsx / MonoIconCatalog.tsx / ColorIconCatalog.tsx
```

Adding a new component demo:

1. Add a `{ slug, name, category, description }` entry to `COMPONENTS` in `src/lib/components-registry.ts`.
2. Create `src/components/showcase/demos/<slug>.tsx` that default-exports the demo component.
3. Register it in `src/components/showcase/demos/index.ts` (`DEMOS["<slug>"] = { Demo, importLine }`).

Adding a new multi-component example:

1. Add a `{ slug, name, description }` entry to `EXAMPLES` in `src/lib/examples-registry.ts`.
2. Create `src/components/showcase/examples/<slug>.tsx` (default export).
3. Register it in `src/components/showcase/examples/index.ts` (`EXAMPLE_COMPONENTS["<slug>"]`).

## Themes

```
src/themes/
  leroymerlin.scss        # default brand variables
  adeo.scss               # Adeo preset override
```

Built into `public/themes/` by `scripts/build-themes.mjs` before `dev` / `build`. The theme picker swaps a `data-theme` attribute on `<html>` which scopes the CSS custom-property overrides written by these files.

## Build scripts

```
scripts/
  build-themes.mjs        # compiles src/themes/*.scss → public/themes/*.css
  build-icons.mjs         # copies @mozaic-ds/icons SVGs into public/ + writes manifest
```

`npm run build:assets` (run before `dev` and `build`) chains both. If a new icon or theme is missing in the running app, rerun this step.

## Other files worth knowing

- `src/components/showcase/Demo.tsx` + `Demo.module.scss` — wraps any demo with a "View source" toggle and code-snippet panel.
- `eslint.config.mjs` — flat config; mostly inherits `eslint-config-next`.
- `next.config.ts` — Sass + image config. Keep edits minimal.
