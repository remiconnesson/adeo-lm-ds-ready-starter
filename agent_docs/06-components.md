# Components

Mozaic ships ~50 components. Every component lives in `packages/styles/components/_c.<name>.scss` (v1) or `packages/styles/components/<name>/_c.<name>.scss` (v2). Class names follow `.mc-<name>` for the block, `.mc-<name>__<element>` for parts, and `.mc-<name>--<modifier>` for variants.

## Discovery cheat sheet

To check what exists or what modifiers a component supports:

```bash
# v1 (or the docs site - same component set)
ls mozaic-design-system/packages/styles/components/

# v2 (additional components only ship here)
ls mozaic-scss-showcase-next/node_modules/@mozaic-ds/styles/components/

# To list every class for a given component:
grep -oE '\.mc-button[^ ,{]*' mozaic-packaged-assets/mozaic.css | sort -u
```

The component MDX docs (with HTML snippets) live at `mozaic-design-system/src/docs/Components/<Name>/code.mdx`.

## Components catalogue

### v1 (matches the live docs site)

```
accordion, action-bar, autocomplete, badge, bottom-bar, breadcrumb, button,
card, checkbox, datatable (+ empty, footer, header, subtable, tools),
divider, dropdown, fields, file-uploader, flag, hero, layer, left-icon-input,
links, listbox, loader, menu, modal, notification, option-button, option-card,
overlay, pagination, password-input, phone-number, progressbar,
quantity-selector, radio, segmented-control, select, stars-input, stars-result,
stepper, stepper-bar, tabs, tag, text-input, textarea, toggle, tooltip
```

### v2 adds (and renames some)

```
accordion-list, action-bottom-bar, action-list, avatar, callout, carousel,
checkbox, circular-progressbar, combobox, controls-options, datepicker,
drawer, kpi-item, linear-progressbar-{buffer,percentage}, linkgroup,
loading-overlay, modal, navigation-indicator
```

Always confirm by listing `components/` in the project you're working in — the catalogue evolves.

## Anatomy: `mc-button`

Minimal usage:

```html
<button type="button" class="mc-button">
  <span class="mc-button__label">Add to basket</span>
</button>
```

The `<span class="mc-button__label">` matters: text without it works but icon+text buttons break layout without it.

Modifiers:

| Modifier | What it does |
| --- | --- |
| `mc-button--s` | Small (32px height = 2mu) |
| *(none)* | Medium (48px = 3mu) — default |
| `mc-button--l` | Large (56px = 3.5mu) |
| `mc-button--bordered` | Outline variant |
| `mc-button--neutral` / `mc-button--bordered-neutral` | Neutral theme |
| `mc-button--solid-danger` / `mc-button--bordered-danger` | Danger theme |
| `mc-button--fit` | Width hugs content |
| `mc-button--full` | Stretches to container |
| `mc-button--square` | Icon-only square |

State: `is-disabled`, `is-loading`. The `aria-disabled="true"` attribute is styled equivalently to `:disabled`.

## Anatomy: `mc-card`

Block → element pattern:

```html
<article class="mc-card mc-card--bordered">
  <header class="mc-card__header">…</header>
  <div    class="mc-card__body">…</div>
  <footer class="mc-card__footer">…</footer>
</article>
```

When in doubt, open the matching `Components/<Name>/code.mdx` doc and copy the canonical snippet.

## Form components

Form inputs follow `.mc-field` (label/wrapper) + a specific input class:

```
mc-text-input, mc-textarea, mc-select, mc-checkbox, mc-radio,
mc-toggle, mc-quantity-selector, mc-stars-input, mc-password-input,
mc-phone-number, mc-file-uploader, mc-autocomplete, mc-listbox
```

Validation state is conveyed by `is-error`, `is-valid`, `has-feedback`. Always render an associated `<label>` and connect via `for` / `id`.

## Modal / Layer / Overlay

These three cooperate:

- `.mc-overlay` — full-screen scrim
- `.mc-layer` — non-modal pop layer (e.g. side panel)
- `.mc-modal` — modal dialog (uses `dialog` element pattern)

Open state is controlled by `is-open`. JS to wire focus traps is the consumer's responsibility — Mozaic SCSS only ships the styling.

## When you need React behaviour

Reach for `@mozaic-ds/react` (v1.14.x). Its components render the same `.mc-*` markup and handle interactive concerns (modal focus traps, accordion toggling, datepicker calendars). See [`07-react-bindings.md`](07-react-bindings.md).
