export type MonoIcon = {
  name: string;
  sizes: number[];
  file: Record<string, string>;
};

export type ColorIcon = {
  name: string;
  file: string;
};

export type IconManifest = {
  mono: Record<string, MonoIcon[]>;
  color: Record<string, ColorIcon[]>;
};

export const MONO_CATEGORY_LABELS: Record<string, string> = {
  ui: "UI",
  product: "Product",
  media: "Media",
  business: "Business",
};

export const COLOR_GROUP_LABELS: Record<string, string> = {
  "adeo-brands": "Adeo brands",
  "frameworks-and-tools": "Frameworks & tools",
  "payment-cards": "Payment cards",
  "payment-services": "Payment services",
};
