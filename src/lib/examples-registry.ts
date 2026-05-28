export type ExampleMeta = {
  slug: string;
  name: string;
  description: string;
};

export const EXAMPLES: ExampleMeta[] = [
  {
    slug: "sign-in",
    name: "Sign in",
    description:
      "Authentication form combining field, text-input, password-input, checkbox, callout, button, and link.",
  },
  {
    slug: "settings",
    name: "Account settings",
    description:
      "Preferences page using page-header, field groups, toggle, radio, segmented control, divider, and action bottom bar.",
  },
  {
    slug: "checkout",
    name: "Checkout wizard",
    description:
      "Multi-step purchase flow built with stepper-stacked, tiles, field, callout, status-message, and an action bottom bar.",
  },
  {
    slug: "dashboard",
    name: "Dashboard",
    description:
      "Overview surface with KPI items, linear progress, status badges, tabs, and a tile grid.",
  },
];

export function getExampleBySlug(slug: string): ExampleMeta | undefined {
  return EXAMPLES.find((e) => e.slug === slug);
}
