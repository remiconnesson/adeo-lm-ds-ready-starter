# Mozaic v1 vs v2

Both versions coexist in this workspace. **The SCSS API is not backwards-compatible.** Check `package.json` before writing any SCSS.

| Aspect | v1 (≤ 1.85) | v2 (≥ 2.0) |
| --- | --- | --- |
| Found in | `mozaic-design-system/` clone, `mozaic-packaged-assets/`, `mosaik-tutorial/` | `mozaic-scss-showcase-next/`, `mozaic-showcase/`, `adeo-vibe-code-exp-001/`, `po-laroid*`, `mozaik-react/` |
| Latest package versions | `@mozaic-ds/styles@1.85.0`, `@mozaic-ds/tokens@1.81.0`, `@mozaic-ds/icons@1.84.0` | `@mozaic-ds/styles@2.22.0`, `@mozaic-ds/tokens@2.22.0`, `@mozaic-ds/icons@2.5.1` |
| Sass model | `@import` | Sass modules: `@use` / `@forward` |
| Entry point | `@import 'settings-tools/all-settings'` then individual files | `@use "@mozaic-ds/styles"` (forwards everything) or scoped imports |
| Folder name | `settings-tools/`, `generics/`, `elements/`, `layouts/`, `typography/`, `components/`, `utilities/` | `settings/`, `tools/`, `generic/`, `typography/`, `layouts/`, `components/`, `utilities/` |
| Spacing API | SCSS variables `$mu025` … `$mu1000`, `magic-unit($n)` function | Token function `get-spacing("025")` … `get-spacing("1200")`; magic-unit terminology dropped |
| Tokens | Generated SCSS variables in `tokens/build/scss/_tokens.scss` | Token map accessor `get-token(...)` |
| PostCSS requirement | **Mandatory** (Mozaic provides config) | Optional — Sass modules resolve via `node_modules` |
| Stylelint plugin | `@mozaic-ds/css-dev-tools` | Same package, but rule set evolved |
| Class names (`.mc-*`, `.mt-*`, `.ml-*`, `.mu-*`) | Same | **Same** — class names are stable across versions |

The `is-*` / `has-*` state classes, `@from-*` responsive escapes, and BEM `block__element--modifier` conventions are unchanged.

## v1 minimal SCSS

```scss
$local-config: (font-path: 'static');

@import 'settings-tools/all-settings';

@include import-font-families();

body {
  @include set-font-face('semi-bold');
  @include set-font-scale('12', 's');

  background-color: $color-primary-01-500;
  padding: $mu500;
}
```

## v2 minimal SCSS

```scss
@use "@mozaic-ds/tokens/theme";
@use "@mozaic-ds/styles";
@use "@mozaic-ds/styles/typography/t.headings" as headings;
@use "@mozaic-ds/styles/settings/s.spacing" as spacing;

body {
  padding: spacing.get-spacing("500");
}
```

## When upstream docs disagree

https://mozaic.adeo.cloud currently documents v1.85 (the live tag). For v2-specific behaviour, the **installed package source is authoritative**:

```
mozaic-scss-showcase-next/node_modules/@mozaic-ds/styles/
  index.scss                 # @forwards every layer
  settings/_all-settings.scss
  components/<name>/_c.<name>.scss
  typography/t.*.scss
```

If you need to add a new v2 component, mirror the existing folder pattern: one folder per component containing `_s.<name>.scss` (settings), `_t.<name>.scss` (tools), `_c.<name>.scss` (the component), and `index.scss` (forwards).

## Class-name stability — what to grep

Because the `.mc-*` / `.mt-*` / `.ml-*` / `.mu-*` class names are the same across versions, the fastest way to confirm a class exists is to grep the **compiled** CSS in `mozaic-packaged-assets/mozaic.css` (v1) or the relevant `_c.<name>.scss` file (v1 or v2). New components added in v2 (e.g. `callout`, `combobox`, `drawer`, `kpi-item`, `linkgroup`, `circular-progressbar`, `avatar`) are **not** in the v1 compiled CSS — look them up directly in `node_modules/@mozaic-ds/styles/components/<name>/`.
