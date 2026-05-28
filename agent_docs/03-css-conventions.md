# CSS conventions

Mozaic follows a slightly customised **ITCSS** architecture combined with **BEM**. Source: https://mozaic.adeo.cloud/get-started/developers/css-naming-conventions/.

## ITCSS layers (and their order)

| Layer | What it contains | File pattern |
| --- | --- | --- |
| 1. Settings | Global SCSS variables, tokens, switches | `_s.*.scss` |
| 2. Tools | Mixins and functions only — no CSS output | `_t.*.scss` |
| 3. Generic | Resets, box-sizing | `_g.*.scss` |
| 4. Base / Elements | Unclassed HTML tag selectors | `_e.*.scss` |
| 5. Layouts | Cosmetic-free patterns (grid, flexy, container) | `_l.*.scss` → `.ml-*` |
| 6. Typography | Base text/title styles | `_t.*.scss` → `.mt-*` |
| 7. Components | Designed UI chunks | `_c.*.scss` → `.mc-*` |
| 8. Utilities | Single-property helpers (often `!important`) | `_u.*.scss` → `.mu-*` |

Settings + Tools are bundled into `all-settings` (v1) or `settings/index.scss` (v2). Both are required before any other layer is imported, and **neither outputs CSS**.

Import order matters: always go top-to-bottom through the layers. Within one layer, order is free.

## Class prefixes

```
.ml-*   layout
.mt-*   typography
.mc-*   component
.mu-*   utility
```

The first `m` is the source ID ("Mozaic"); the second letter is the ITCSS layer.

## BEM rules

- **Block** — `.mc-card`
- **Element** — `.mc-card__title` (only meaningful inside the block, can't be reused outside)
- **Modifier** — `.mc-card--bordered` or `.mc-card__title--center`

Modifiers are *variations*. They're stable design decisions.

## State classes

States are *runtime* changes. They use auxiliary verbs (`is-`, `has-`) and always live alongside a BEM class:

```html
<div class="mc-accordion is-open">...</div>
<input class="mc-text-input is-error has-feedback" />
```

In CSS:

```scss
.mc-accordion.is-open { ... }
```

The distinction: `.mc-button--loader` is a button variant that *can* show a loader; `.mc-button--loader.is-loading` is that same variant currently loading.

## Responsive modifiers

Suffix the class with `@from-{size}` where size is one of `s, m, l, xl, xxl`. The screen breakpoints (from `_s.screens.scss`):

| Token | min-width |
| --- | --- |
| `s` | 0 |
| `s-medium` | 320px |
| `s-large` | 360px |
| `s-xlarge` | 390px |
| `m` | 680px |
| `m-medium` | 769px |
| `l` | 1024px |
| `l-medium` | 1100px |
| `xl` | 1280px |
| `xl-medium` | 1440px |
| `xl-large` | 1680px |
| `xxl` | 1920px |

In markup the `@` is literal:

```html
<span class="mu-hidden@from-m">Hidden from medium up</span>
```

In CSS selectors the `@` must be escaped:

```scss
.mu-hidden\@from-m { display: none; }
```

Only the major breakpoints (`s`, `m`, `l`, `xl`, `xxl`) get auto-generated `@from-*` modifiers; intermediate steps (`m-medium`, `l-medium`, …) are available for hand-written media queries via the `set-from-screen($size)` mixin.

## Mixin / function naming

Three prefixes, all in v1's `settings-tools/` and v2's `tools/`:

- `set-xxx` — injects properties into a class (e.g. `set-font-face`, `set-font-scale`, `set-button-theme`)
- `make-xxx` — generates whole classes, often with responsive variants
- `mod-xxx` — extends an existing class with modifiers (e.g. `mod-from-screens`)

## Variables vs tokens

Two layers:

1. **Raw/base** — every available colour and size as a SCSS variable. Example: `$color-primary-01-500`, `$mu200`. Don't use these directly in feature code.
2. **Semantic** — token names mapped to brand meaning. Example: `$color-button-solid-background`, `$color-font-darker`, `$color-heading-underline-default`. **Use these.**

Token JSON keys nest like `color.button.solid.background`; compiled SCSS flattens with dashes (`$color-button-solid-background`).
