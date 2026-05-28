# React bindings (`@mozaic-ds/react`)

Repository: https://github.com/adeo/mozaic-react. Currently version `1.14.x`.

The bindings render the same `.mc-*` markup as the raw SCSS — they exist to give you ergonomic React components with sensible defaults, JSX-friendly composition, and a few interactive helpers (focus traps, portals, providers).

## What's installed

Used in: `mozaic-showcase/`, `adeo-vibe-code-exp-001/`, `mozaik-react/`, `po-laroid-next/`.

```bash
npm install @mozaic-ds/react
```

The package ships pre-built CSS (`lib/index.css`, `lib/index.adeo.css`, `lib/index.bricoman.css`). Pick one based on the brand you want:

```ts
import "@mozaic-ds/react/lib/index.css";        // default (Leroy Merlin)
import "@mozaic-ds/react/lib/index.adeo.css";   // Adeo preset
```

If you also use `@mozaic-ds/styles` directly, prefer importing the SCSS source and skip the React bundle's CSS to avoid duplicate rules.

## Available components

```
Accordion (+ Heading, Header, Content), Badge, Breadcrumbs, Button, IconButton,
CheckBox, DataTable, DateInput, Field, FileUploader, Flag, Flex, FocusTrap,
Heading, Layer, Link, ListBox, Loader, Menu, Modal, ModalsProvider,
Notification, NotificationsProvider, OptionButton, OptionCard, OptionGroup,
Overlay, Pagination, PasswordInput, Portal, ProgressBar, QuantitySelector,
Radio, RadioGroup, RatingStars, Select, Table, Tabs, Tag, Text, …
```

To confirm a component exists, browse `node_modules/@mozaic-ds/react/lib/components/`. Storybook for this package is hosted at https://adeo.github.io/mozaic-react/.

## Composition pattern

Most non-trivial components use a parent + dotted-partial pattern, where partials are exposed both as nested properties and as named exports:

```tsx
import { Accordion } from "@mozaic-ds/react";

<Accordion>
  <Accordion.Header>
    <Accordion.Heading>Section title</Accordion.Heading>
  </Accordion.Header>
  <Accordion.Content>Body</Accordion.Content>
</Accordion>
```

Or:

```tsx
import { Modal, ModalBody, ModalFooter } from "@mozaic-ds/react";
```

When in doubt, check the component's `index.d.ts` in `node_modules/@mozaic-ds/react/lib/components/<Name>/`.

## Providers

Two providers must wrap the app (typically in `app/layout.tsx`) for portal-rendered components to work:

```tsx
import { ModalsProvider, NotificationsProvider } from "@mozaic-ds/react";

<ModalsProvider>
  <NotificationsProvider>
    {children}
  </NotificationsProvider>
</ModalsProvider>
```

## Icons

Icons aren't auto-bundled. Install `@mozaic-ds/icons` and import individual React icon components:

```tsx
import IconNotificationAvailable24 from "@mozaic-ds/icons/react/IconNotificationAvailable24";
```

(Icon names follow `Icon<Concept><Size>` where size is `16`, `24`, `32`, `48`, or `64`.)

In `mozaic-showcase`, `scripts/build-icons.mjs` copies the SVGs into the public folder so they can be referenced without bundler involvement. That's optional — direct React imports work fine.

## Caveats

- The React bindings are at major version 1 while `@mozaic-ds/styles`/`tokens` are at 2.x. They consume tokens internally but their shipped CSS lags slightly behind the latest SCSS sources. If a new component (callout, drawer, combobox, …) only exists in `@mozaic-ds/styles@2.22` but not in the React bindings, you'll need to render raw `.mc-*` markup yourself.
- TypeScript types ship in `lib/index.d.ts` and per-component `.d.ts` files. They're complete but not always strict about union types — read the source if a prop type seems off.
- `next dev` with React 19 + the React Compiler enabled (`babel-plugin-react-compiler`) currently works (see `po-laroid-next/`). If you hit a hydration warning, check whether the component uses a Portal — wrap any portal-using component in `"use client"`.
