# Tokens, spacing, breakpoints

## Token packages

`@mozaic-ds/tokens` ships JSON sources plus Style Dictionary-built outputs for SCSS, CSS custom properties, JS, iOS, and Android. JSON lives in `mozaic-design-system/packages/tokens/properties/`:

```
properties/
  color/          base.json, button.json, card.json, badge.json, …
  size/           base.json (magic-unit), font.json, grid.json, screens.json
  border/
  radius/
  shadow/
```

There are also two **presets**:

- `lm/` (default) — Leroy Merlin palette, this is what ships unless told otherwise
- `adeo/` — Adeo group palette, activated with `mozaic.config.js` → `preset: 'adeo'`

The preset is selected at build time via `mozaic.config.js` at the consumer's project root.

## Colour system

Four families:

| Family | Scale | Example variables (v1 SCSS) | Use |
| --- | --- | --- | --- |
| Primary 01 | 100 → 900 | `$color-primary-01-500` | Brand green — main brand colour |
| Primary 02 | 100 → 900 | `$color-primary-02-600` | Neutral blue-grey, "beta" forward-looking palette |
| Greys | 000, 100 → 900, 999 | `$color-grey-700`, `$color-grey-000` (white), `$color-grey-999` (black) | Text, icons, surfaces |
| Secondary | 100 → 900 each | `$color-secondary-{blue,green,orange,red,yellow,purple}-500` | Accents (offers, ratings, focus rings) |

Status variables sit on top of those and **must** be used for status meaning even when the hex matches a primary swatch (since brand presets may diverge):

```scss
$color-badge-info-background     $color-badge-info-border     $color-badge-info-text
$color-badge-success-background  $color-badge-success-border  $color-badge-success-text
$color-badge-warning-background  $color-badge-warning-border  $color-badge-warning-text
$color-badge-danger-background   $color-badge-danger-border   $color-badge-danger-text
$color-badge-neutral-background  $color-badge-neutral-border  $color-badge-neutral-text
```

Mozaic also outputs CSS custom properties on `:root` (e.g. `--color-primary-01-500`, `--color-secondary-orange-500`) — see `mozaic-design-system/packages/tokens/build/css/root.scss`. Use these when you need to theme at runtime (the `mozaic-showcase` theme picker switches them by swapping `data-theme` attributes).

## The magic unit (v1)

Base: **16px**, expressed in rem. Multiply or divide to derive every dimension.

| Range | Increment rule |
| --- | --- |
| `< 2mu` | quarters (×0.25) |
| `2mu – 4mu` | halves (×0.5) |
| `≥ 4mu` | integers |

SCSS variables (all in rem):

```
$mu025 (4px)   $mu050 (8px)   $mu075 (12px)  $mu100 (16px)
$mu125 (20px)  $mu150 (24px)  $mu175 (28px)  $mu200 (32px)
$mu250 (40px)  $mu300 (48px)  $mu350 (56px)  $mu400 (64px)
$mu500 (80px)  $mu600 (96px)  $mu700 (112px) $mu800 (128px)
$mu900 (144px) $mu1000 (160px)
```

Function form: `magic-unit($n)` returns the multiplier × `$magic-unit` (default 1rem), validating the increment rules. Use `magic-unit($n, $allow-any-value: true)` to bypass validation if you really need an off-grid value.

## Spacing (v2)

The magic-unit terminology is dropped in v2. Use the `get-spacing` function:

```scss
@use "@mozaic-ds/styles/settings/s.spacing" as spacing;

.card { padding: spacing.get-spacing("300"); }  // 48px
```

Tokens available: `025, 050, 100, 150, 200, 250, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200`.

## Spacing utility classes

Generated for both versions, prefixed `.mu-`:

```
.mu-m{side}-{size}    margin
.mu-p{side}-{size}    padding

side ∈ {t, r, b, l, all, v, h}
size ∈ {025, 050, 075, 100, 125, 150, 200, 250, 300, 350, 400, 500, 600, 700, 800, 900, 1000}
```

Examples: `.mu-mt-200` (margin-top 32px), `.mu-ph-300` (padding-left + padding-right 48px), `.mu-mall-100` (margin on every side 16px).

## Breakpoints

See [`03-css-conventions.md`](03-css-conventions.md#responsive-modifiers) for the full screen token list. Only `s, m, l, xl, xxl` auto-generate `@from-*` utility variants.

## Font sizes

From `mozaic-design-system/packages/tokens/properties/size/font.json`, 12 steps:

| Token | rem | px |
| --- | --- | --- |
| 01 | 0.6815 | 11 |
| 02 | 0.75 | 12 |
| 03 | 0.8125 | 13 |
| 04 | 0.875 | 14 |
| 05 | 1 | 16 |
| 06 | 1.125 | 18 |
| 07 | 1.4375 | 23 |
| 08 | 1.75 | 28 |
| 09 | 2.125 | 34 |
| 10 | 2.5625 | 41 |
| 11 | 3.0625 | 49 |
| 12 | 3.6875 | 59 |

Apply via mixins: `set-font-scale('06')`, optionally with a line-height key: `set-font-scale('06', 'm')`. See `05-typography.md`.
