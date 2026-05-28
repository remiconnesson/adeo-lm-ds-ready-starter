<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Mozaic context

Workspace-level context lives one directory up. Before working here, read:

- [`../AGENTS.md`](../AGENTS.md) — workspace map + class-prefix conventions
- [`../agent_docs/02-mozaic-versions.md`](../agent_docs/02-mozaic-versions.md) — v1 vs v2 SCSS API
- [`../agent_docs/06-components.md`](../agent_docs/06-components.md) — `mc-*` patterns + discovery commands

This project uses `@mozaic-ds/styles@^2.22` (v2) + `@mozaic-ds/react@^1.14`. Magic-unit terminology is gone in v2; use `get-spacing("100")` not `$mu100`.

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
| `/c/[slug]` | `src/lib/components-registry.ts` → `COMPONENTS` | `src/components/showcase/demos` |
| `/examples/[slug]` | `src/lib/examples-registry.ts` → `EXAMPLES` | `src/components/showcase/examples` → `EXAMPLE_COMPONENTS` |

Adding a slug to the wrong registry compiles cleanly and 404s only at runtime. When adding a new entry:

- A new **component showcase** → `COMPONENTS` in `components-registry.ts` **and** a key in `DEMOS`
- A new **multi-component example** → `EXAMPLES` in `examples-registry.ts` **and** a key in `EXAMPLE_COMPONENTS`

If you're tempted to share a slug across the two spaces, don't — there's no type guard and the wrong page will silently win during navigation.
