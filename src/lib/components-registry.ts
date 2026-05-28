export type ComponentMeta = {
  slug: string;
  name: string;
  category: "Action" | "Form" | "Feedback" | "Navigation" | "Data" | "Layout" | "Status";
  description: string;
};

export const COMPONENTS: ComponentMeta[] = [
  // Action
  { slug: "button", name: "Button", category: "Action", description: "Trigger actions. Themed (primary, neutral, danger), sized (S, M, L), and available in solid or bordered styles." },
  { slug: "link", name: "Link", category: "Action", description: "Inline and standalone hyperlinks with optional icon affordance." },
  { slug: "linkgroup", name: "Link Group", category: "Action", description: "Group of related links rendered as a compact list." },

  // Form
  { slug: "text-input", name: "Text Input", category: "Form", description: "Single-line text entry. Supports prefixes, suffixes, errors, and disabled state." },
  { slug: "textarea", name: "Textarea", category: "Form", description: "Multi-line text entry with the same affordances as the text input." },
  { slug: "field", name: "Field", category: "Form", description: "Form-field wrapper: label, helper text, error message, required indicator." },
  { slug: "checkbox", name: "Checkbox", category: "Form", description: "Binary selection control. Supports indeterminate state." },
  { slug: "radio", name: "Radio", category: "Form", description: "Single selection from a set of mutually exclusive options." },
  { slug: "toggle", name: "Toggle", category: "Form", description: "On/off switch. Use when the change takes effect immediately." },
  { slug: "select", name: "Select", category: "Form", description: "Dropdown selection from a list of options." },
  { slug: "password-input", name: "Password Input", category: "Form", description: "Text input with show/hide toggle and validation hints." },
  { slug: "phone-number-input", name: "Phone Number Input", category: "Form", description: "Phone entry with country code prefix." },
  { slug: "pincode-input", name: "Pincode Input", category: "Form", description: "Segmented input for short codes (OTP, verification)." },
  { slug: "quantity-selector", name: "Quantity Selector", category: "Form", description: "Numeric stepper for ordering quantities." },
  { slug: "file-uploader", name: "File Uploader", category: "Form", description: "File picker with drag-and-drop, file list, and progress feedback." },
  { slug: "datepicker", name: "Datepicker", category: "Form", description: "Date selection input with calendar picker." },
  { slug: "star-rating", name: "Star Rating", category: "Form", description: "Star-based rating input (1–5)." },
  { slug: "segmented-control", name: "Segmented Control", category: "Form", description: "Horizontal group of mutually exclusive buttons." },
  { slug: "controls-options", name: "Controls Options", category: "Form", description: "Group of selectable option cards/buttons." },
  { slug: "combobox", name: "Combobox", category: "Form", description: "Text input with autocomplete dropdown." },
  { slug: "listbox", name: "Listbox", category: "Form", description: "Selectable list of options. Useful for non-dropdown selection." },
  { slug: "option-listbox", name: "Option Listbox", category: "Form", description: "Listbox with richer per-option content (icons, descriptions)." },

  // Feedback
  { slug: "status-message", name: "Status Message", category: "Feedback", description: "Inline message conveying state — info, success, warning, danger." },
  { slug: "status-notification", name: "Status Notification", category: "Feedback", description: "Page-level banner notification with optional dismiss." },
  { slug: "toaster", name: "Toaster", category: "Feedback", description: "Transient floating notifications stacked at the corner of the screen." },
  { slug: "callout", name: "Callout", category: "Feedback", description: "Standalone block to draw attention to content or actions." },
  { slug: "tooltip", name: "Tooltip", category: "Feedback", description: "Contextual hint shown on hover or focus." },
  { slug: "modal", name: "Modal", category: "Feedback", description: "Dialog window that interrupts the flow to request a decision." },
  { slug: "drawer", name: "Drawer", category: "Feedback", description: "Slide-in panel anchored to the screen edge." },
  { slug: "popover", name: "Popover", category: "Feedback", description: "Floating content panel anchored to a trigger." },
  { slug: "overlay", name: "Overlay", category: "Feedback", description: "Dimming layer used behind modals and drawers." },
  { slug: "loader", name: "Loader", category: "Feedback", description: "Spinner for ongoing operations." },
  { slug: "loading-overlay", name: "Loading Overlay", category: "Feedback", description: "Loader rendered on top of content to block interaction." },
  { slug: "circular-progressbar", name: "Circular Progressbar", category: "Feedback", description: "Circular progress indicator for determinate operations." },
  { slug: "linear-progressbar-percentage", name: "Linear Progressbar (Percentage)", category: "Feedback", description: "Horizontal progress bar with percentage value." },
  { slug: "linear-progressbar-buffer", name: "Linear Progressbar (Buffer)", category: "Feedback", description: "Horizontal progress bar with buffer ahead of the current value." },

  // Navigation
  { slug: "breadcrumb", name: "Breadcrumb", category: "Navigation", description: "Trail of links indicating the current location in a hierarchy." },
  { slug: "tabs", name: "Tabs", category: "Navigation", description: "Group of related panels switched via tab headers." },
  { slug: "pagination", name: "Pagination", category: "Navigation", description: "Page-by-page navigation for long lists." },
  { slug: "stepper-bottom-bar", name: "Stepper (Bottom Bar)", category: "Navigation", description: "Multi-step flow with anchored bottom bar." },
  { slug: "stepper-compact", name: "Stepper (Compact)", category: "Navigation", description: "Compact horizontal multi-step indicator." },
  { slug: "stepper-inline", name: "Stepper (Inline)", category: "Navigation", description: "Inline multi-step indicator with labels." },
  { slug: "stepper-stacked", name: "Stepper (Stacked)", category: "Navigation", description: "Vertical multi-step layout with details per step." },
  { slug: "sidebar", name: "Sidebar", category: "Navigation", description: "Vertical navigation rail." },
  { slug: "built-in-menu", name: "Built-in Menu", category: "Navigation", description: "Nested menu typically used in headers." },
  { slug: "action-list", name: "Action List", category: "Navigation", description: "List of actions, often inside menus or popovers." },
  { slug: "accordion-list", name: "Accordion List", category: "Navigation", description: "Stacked accordion items with one or many open at a time." },
  { slug: "action-bottom-bar", name: "Action Bottom Bar", category: "Navigation", description: "Anchored bar at the bottom of the viewport for primary actions." },
  { slug: "navigation-indicator", name: "Navigation Indicator", category: "Navigation", description: "Small indicator showing the active position in a sequence." },
  { slug: "page-header", name: "Page Header", category: "Navigation", description: "Top-of-page region with title, description, and actions." },

  // Status / Data
  { slug: "status-badge", name: "Status Badge", category: "Status", description: "Pill displaying a status keyword." },
  { slug: "status-dot", name: "Status Dot", category: "Status", description: "Compact dot indicating a status state." },
  { slug: "number-badge", name: "Number Badge", category: "Status", description: "Compact count indicator typically used on icons." },
  { slug: "tag", name: "Tag", category: "Status", description: "Removable label used for categorization or selection." },
  { slug: "flag", name: "Flag", category: "Status", description: "Country/locale flag asset." },
  { slug: "avatar", name: "Avatar", category: "Status", description: "User or entity portrait with fallback initials." },
  { slug: "kpi-item", name: "KPI Item", category: "Status", description: "Single key performance indicator with label, value, and trend." },

  // Layout / Data
  { slug: "divider", name: "Divider", category: "Layout", description: "Horizontal or vertical separator." },
  { slug: "tile", name: "Tile", category: "Layout", description: "Clickable card-like block. Often used in grids." },
  { slug: "carousel", name: "Carousel", category: "Layout", description: "Horizontally scrollable group with pagination affordances." },
];

export const CATEGORIES: ComponentMeta["category"][] = [
  "Action",
  "Form",
  "Feedback",
  "Navigation",
  "Status",
  "Layout",
];

export function getBySlug(slug: string): ComponentMeta | undefined {
  return COMPONENTS.find((c) => c.slug === slug);
}
