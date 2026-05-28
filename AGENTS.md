<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Mozaic starter

A Next.js 16 + React 19 starter that showcases the **Mozaic** design system — Adeo / Leroy Merlin's open-source DS (https://mozaic.adeo.cloud/). It pairs raw SCSS primitives (`@mozaic-ds/styles@^2.22`) with the React bindings (`@mozaic-ds/react@^1.14`), and provides a theme builder (Adeo / Leroy Merlin), an icon catalogue, and runnable component + multi-component examples.

## Stack

- Next.js 16 App Router · React 19 · TypeScript · Sass
- `@mozaic-ds/styles`, `@mozaic-ds/tokens`, `@mozaic-ds/icons`, `@mozaic-ds/react`, `@mozaic-ds/web-fonts`
- Custom build steps before `dev` / `build`: `scripts/build-themes.mjs` (per-brand theme CSS) and `scripts/build-icons.mjs` (icon assets)

```bash
npm i
npm run dev        # rebuilds themes + icons, then starts Next
npm run build      # same prelude, production build
```

## Core Mozaic conventions

Class prefixes follow ITCSS + BEM with the source letter `m` (Mozaic):

- `.ml-*` Mozaic layout (`ml-container`, `ml-flexy`)
- `.mt-*` Mozaic typography (`mt-heading`, `mt-body-m`, `mt-hero`)
- `.mc-*` Mozaic component (`mc-button`, `mc-card`, `mc-modal`)
- `.mu-*` Mozaic utility (`mu-mt-200`, `mu-hidden@from-m`)

BEM: `block`, `block__element`, `block--modifier`. State classes use `is-*` / `has-*` and are always paired with a BEM class (e.g. `.mc-accordion.is-open`). Responsive escape `@from-{s,m,l,xl,xxl}` is part of the class name in markup but must be escaped in CSS selectors (`.mu-hidden\@from-m`).

The base unit is the **magic unit** = 16px in rem. In this starter (v2) use `get-spacing("100")` … `get-spacing("1200")`. Increment rules: `0.25` step under 2mu, `0.5` step from 2–4mu, integers ≥ 4mu.

> ⚠️ This starter ships **v2** of Mozaic. The website at mozaic.adeo.cloud still documents v1 (1.85). Class names are stable across versions, but the SCSS API isn't: v2 uses Sass modules (`@use "@mozaic-ds/styles"`) and a `get-spacing(...)` function instead of v1's `@import 'settings-tools/all-settings'` and `$mu100` variables. Read [`agent_docs/02-mozaic-versions.md`](agent_docs/02-mozaic-versions.md) before writing SCSS.

## Working agreements

- **Never invent Mozaic class names or token names.** Grep `node_modules/@mozaic-ds/styles/components/` first. See gotcha #1 below.
- **Don't mix v1 and v2 SCSS syntax in one file.** This starter is v2-only.
- **Prefer the framework bindings** (`@mozaic-ds/react`) over hand-rolling `mc-*` markup when the binding exists, unless you're explicitly showcasing SCSS primitives.
- **Web fonts**: Leroy Merlin Sans is loaded in `src/app/layout.tsx` via `next/font/local` from `node_modules/@mozaic-ds/web-fonts/*.woff2`. Don't load it any other way.
- **UX copy** — follow the Five Principles (Clarity, Conciseness, Utility, Empathy, Human first). See [`agent_docs/08-content-design.md`](agent_docs/08-content-design.md).

# Project gotchas

## 1. `.mc-*` class discoverability is zero from this repo

Demos reference classes like `mc-text-input` because they happen to work — nothing here proves a `.mc-*` class actually exists, and nothing in the project links a registry slug to the styles package. Before writing markup that references a class:

```bash
# List every v2 component shipped in @mozaic-ds/styles
ls node_modules/@mozaic-ds/styles/components/

# Confirm the exact `.mc-…` selectors for one of them
grep -oE '\.mc-[a-z0-9_-]+' node_modules/@mozaic-ds/styles/components/<name>/_c.<name>.scss \
  | sort -u
```

**Current `@mozaic-ds/styles@2.22.0` component folders** (snapshot — re-list before relying on it):

```
accordion-list, action-bottom-bar, action-list, avatar, breadcrumb, built-in-menu,
button, callout, carousel, checkbox, circular-progressbar, combobox,
controls-options, datepicker, divider, drawer, field, file-uploader, flag,
kpi-item, linear-progressbar-buffer, linear-progressbar-percentage, link,
linkgroup, listbox, loader, loading-overlay, modal, navigation-indicator,
number-badge, option-listbox, overlay, page-header, pagination, password-input,
phone-number-input, pincode-input, popover, quantity-selector, radio,
segmented-control, select, sidebar, star-rating, status-badge, status-dot,
status-message, status-notification, stepper-bottom-bar, stepper-compact,
stepper-inline, stepper-stacked, tabs, tag, text-input, textarea, tile, toaster,
toggle, tooltip
```

The class for each is `.mc-<folder-name>` plus `__<element>` / `--<modifier>` sub-classes — but read the actual `_c.<name>.scss` for the modifiers, don't guess.

## 2. Two parallel slug spaces — `/c/[slug]` vs `/examples/[slug]`

The app has two registries and two routes, with no compile-time link between them:

| Route | Registry | Demo lookup |
| --- | --- | --- |
| `/c/[slug]` | `src/lib/components-registry.ts` → `COMPONENTS` | `src/components/showcase/demos` → `DEMOS` |
| `/examples/[slug]` | `src/lib/examples-registry.ts` → `EXAMPLES` | `src/components/showcase/examples` → `EXAMPLE_COMPONENTS` |

Adding a slug to the wrong registry compiles cleanly and 404s only at runtime. When adding a new entry:

- A new **component showcase** → `COMPONENTS` in `components-registry.ts` **and** a key in `DEMOS`
- A new **multi-component example** → `EXAMPLES` in `examples-registry.ts` **and** a key in `EXAMPLE_COMPONENTS`

If you're tempted to share a slug across the two spaces, don't — there's no type guard and the wrong page will silently win during navigation.

# Deeper reading (load on demand)

- [`agent_docs/00-orientation.md`](agent_docs/00-orientation.md) — what this starter contains, repo tour
- [`agent_docs/01-projects.md`](agent_docs/01-projects.md) — internal structure: routes, registries, themes, scripts
- [`agent_docs/02-mozaic-versions.md`](agent_docs/02-mozaic-versions.md) — **v1 vs v2 SCSS API diff**
- [`agent_docs/03-css-conventions.md`](agent_docs/03-css-conventions.md) — ITCSS, BEM, prefixes, responsive escapes
- [`agent_docs/04-tokens-and-spacing.md`](agent_docs/04-tokens-and-spacing.md) — colour palette, magic unit, breakpoints
- [`agent_docs/05-typography.md`](agent_docs/05-typography.md) — `mt-heading` / `mt-body` / `mt-hero`, font scale, web fonts
- [`agent_docs/06-components.md`](agent_docs/06-components.md) — `mc-*` patterns and how to find any component
- [`agent_docs/07-react-bindings.md`](agent_docs/07-react-bindings.md) — `@mozaic-ds/react` usage notes
- [`agent_docs/08-content-design.md`](agent_docs/08-content-design.md) — UX writing principles in practice
- [`agent_docs/09-handoff.md`](agent_docs/09-handoff.md) — handoff procedure
