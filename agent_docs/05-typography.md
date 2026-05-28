# Typography

## Font family

**Leroy Merlin Sans** is the only Mozaic web font. It ships in `@mozaic-ds/web-fonts` (woff + woff2) at these weights:

| Weight | File |
| --- | --- |
| 300 (Light) | `LeroyMerlinSans-Web-Light.woff2` |
| 300 italic | `LeroyMerlinSans-Web-LightItalic.woff2` |
| 400 (Regular) | `LeroyMerlinSans-Web-Regular.woff2` |
| 400 italic | `LeroyMerlinSans-Web-Italic.woff2` |
| 600 (SemiBold) | `LeroyMerlinSans-Web-SemiBold.woff2` |
| 600 italic | `LeroyMerlinSans-Web-SemiBoldItalic.woff2` |

The package also ships Cyrillic (`cyrillic/`) and Polish (`polish/`) sub-folders with the same weight set. Bold (700) is **not** shipped — use SemiBold (600) wherever you'd reach for bold.

In Sass call `@include import-font-families()` with `$local-config: (font-path: 'static')` set. In a Next.js app, prefer `next/font/local` pointing at `node_modules/@mozaic-ds/web-fonts/*.woff2`. See `mozaic-scss-showcase-next/src/app/layout.tsx` for the canonical pattern.

## Three top-level typography classes

| Class | Purpose | Live in |
| --- | --- | --- |
| `.mt-heading` | Titles | `typography/_t.headings.scss` |
| `.mt-body-{s,m,l}` | Paragraph / multi-line text | `typography/_t.bodys.scss` |
| `.mt-hero` | Display-size copy for hero sections | `typography/_t.heros.scss` |

### `.mt-heading`

Base sets a `regular` face, `$color-font-darkest`, `margin-bottom: $mu200`. Available modifiers:

```
.mt-heading--s              small size
.mt-heading--m              medium size (default size when no modifier)
.mt-heading--l              large size
.mt-heading--semi-bold      weight bump
.mt-heading--underline      decorative underline pseudo-element
.mt-heading--line-{lightest, primary-01-200, primary-02-200, primary-02-600}
                            underline colour variants
.mt-heading--lightest       lighter text color
.mt-heading--light          light text color
.mt-heading--center / --left / --right
                            alignment (responsive via @from-* suffix)
.mt-heading--line-height-xs
                            tighter line-height
```

### `.mt-body-{s,m,l}`

Always sized: `mt-body-s` (scale 04, 14px), `mt-body-m` (scale 05, 16px), `mt-body-l` (scale 06, 18px). Each has:

```
.mt-body-{size}--semi-bold        weight bump
.mt-body-{size}--line-height-m    medium line-height
```

### `.mt-hero`

Larger than `mt-heading`, with built-in responsive scale jumps:

| Breakpoint | Font scale |
| --- | --- |
| `s` (mobile) | 09 (34px) |
| `m` ≥ 680px | 10 (41px) |
| `l` ≥ 1024px | 11 (49px) |
| `xl-medium` ≥ 1440px | 12 (59px) |

Modifiers: `--semi-bold`, `--line-height-s`.

## Mixins (when writing custom typography)

From `settings-tools/_s.fonts-*.scss` (v1) or `tools/t.font.scss` (v2):

- `set-font-face($weight)` — `'light' | 'regular' | 'semi-bold'` (no `'bold'` ships in the web-fonts package)
- `set-font-scale($step, $responsive-step?)` — step is `'01'`…`'12'`
- `set-line-height($step, $size)` — size is `'xs' | 's' | 'm' | 'l'`

```scss
.headline {
  @include set-font-face('semi-bold');
  @include set-font-scale('08');
  @include set-line-height('08', 'm');
}
```

## Text colour tokens

Mozaic ships semantic colour tokens for text:

```
$color-font-darkest    near-black, headings on light bg
$color-font-darker     primary body text
$color-font-dark
$color-font-light      muted body / metadata
$color-font-lightest   reverse text on dark surfaces
```

Use these, **never** raw greys, for any non-decorative text.

## Headings element styles

Mozaic doesn't strictly bind heading levels to sizes — `<h1>` doesn't auto-get `mt-hero`. Pick the semantic tag for accessibility, then apply the right typography class:

```html
<h1 class="mt-hero">Welcome to the workshop</h1>
<h2 class="mt-heading mt-heading--l">Project ideas</h2>
<p  class="mt-body-m">Body copy here…</p>
```
