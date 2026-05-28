import type { ComponentType } from "react";

import Button from "./button";
import StatusBadge from "./status-badge";
import Modal from "./modal";
import Link from "./link";
import LinkGroup from "./linkgroup";
import Tag from "./tag";
import StatusDot from "./status-dot";
import NumberBadge from "./number-badge";
import Flag from "./flag";
import Avatar from "./avatar";
import Divider from "./divider";
import Loader from "./loader";
import LoadingOverlay from "./loading-overlay";
import CircularProgressbar from "./circular-progressbar";
import LinearProgressbarPercentage from "./linear-progressbar-percentage";
import LinearProgressbarBuffer from "./linear-progressbar-buffer";
import StatusMessage from "./status-message";
import StatusNotification from "./status-notification";
import Toaster from "./toaster";
import Callout from "./callout";
import Tooltip from "./tooltip";
import Drawer from "./drawer";
import Popover from "./popover";
import Overlay from "./overlay";
import TextInput from "./text-input";
import Textarea from "./textarea";
import Field from "./field";
import Checkbox from "./checkbox";
import Radio from "./radio";
import Toggle from "./toggle";
import Select from "./select";
import PasswordInput from "./password-input";
import PhoneNumberInput from "./phone-number-input";
import PincodeInput from "./pincode-input";
import QuantitySelector from "./quantity-selector";
import FileUploader from "./file-uploader";
import Datepicker from "./datepicker";
import StarRating from "./star-rating";
import SegmentedControl from "./segmented-control";
import ControlsOptions from "./controls-options";
import Combobox from "./combobox";
import Listbox from "./listbox";
import OptionListbox from "./option-listbox";
import Breadcrumb from "./breadcrumb";
import Tabs from "./tabs";
import Pagination from "./pagination";
import AccordionList from "./accordion-list";
import ActionList from "./action-list";
import BuiltInMenu from "./built-in-menu";
import Sidebar from "./sidebar";
import PageHeader from "./page-header";
import ActionBottomBar from "./action-bottom-bar";
import NavigationIndicator from "./navigation-indicator";
import StepperCompact from "./stepper-compact";
import StepperInline from "./stepper-inline";
import StepperStacked from "./stepper-stacked";
import StepperBottomBar from "./stepper-bottom-bar";
import KpiItem from "./kpi-item";
import Tile from "./tile";
import Carousel from "./carousel";

type DemoEntry = {
  Demo: ComponentType;
  importLine?: string;
};

export const DEMOS: Record<string, DemoEntry> = {
  button: { Demo: Button },
  "status-badge": { Demo: StatusBadge },
  modal: {
    Demo: Modal,
    importLine: `@use "@mozaic-ds/styles/components/modal";
@use "@mozaic-ds/styles/components/overlay";
@use "@mozaic-ds/styles/components/button";`,
  },
  link: { Demo: Link },
  linkgroup: { Demo: LinkGroup },
  tag: { Demo: Tag },
  "status-dot": { Demo: StatusDot },
  "number-badge": { Demo: NumberBadge },
  flag: { Demo: Flag },
  avatar: { Demo: Avatar },
  divider: { Demo: Divider },
  loader: { Demo: Loader },
  "loading-overlay": { Demo: LoadingOverlay },
  "circular-progressbar": { Demo: CircularProgressbar },
  "linear-progressbar-percentage": { Demo: LinearProgressbarPercentage },
  "linear-progressbar-buffer": { Demo: LinearProgressbarBuffer },
  "status-message": { Demo: StatusMessage },
  "status-notification": { Demo: StatusNotification },
  toaster: { Demo: Toaster },
  callout: { Demo: Callout },
  tooltip: { Demo: Tooltip },
  drawer: { Demo: Drawer },
  popover: { Demo: Popover },
  overlay: { Demo: Overlay },
  "text-input": { Demo: TextInput },
  textarea: { Demo: Textarea },
  field: { Demo: Field },
  checkbox: { Demo: Checkbox },
  radio: { Demo: Radio },
  toggle: { Demo: Toggle },
  select: { Demo: Select },
  "password-input": { Demo: PasswordInput },
  "phone-number-input": { Demo: PhoneNumberInput },
  "pincode-input": { Demo: PincodeInput },
  "quantity-selector": { Demo: QuantitySelector },
  "file-uploader": { Demo: FileUploader },
  datepicker: { Demo: Datepicker },
  "star-rating": { Demo: StarRating },
  "segmented-control": { Demo: SegmentedControl },
  "controls-options": { Demo: ControlsOptions },
  combobox: { Demo: Combobox },
  listbox: { Demo: Listbox },
  "option-listbox": { Demo: OptionListbox },
  breadcrumb: { Demo: Breadcrumb },
  tabs: { Demo: Tabs },
  pagination: { Demo: Pagination },
  "accordion-list": { Demo: AccordionList },
  "action-list": { Demo: ActionList },
  "built-in-menu": { Demo: BuiltInMenu },
  sidebar: { Demo: Sidebar },
  "page-header": { Demo: PageHeader },
  "action-bottom-bar": { Demo: ActionBottomBar },
  "navigation-indicator": { Demo: NavigationIndicator },
  "stepper-compact": { Demo: StepperCompact },
  "stepper-inline": { Demo: StepperInline },
  "stepper-stacked": { Demo: StepperStacked },
  "stepper-bottom-bar": { Demo: StepperBottomBar },
  "kpi-item": { Demo: KpiItem },
  tile: { Demo: Tile },
  carousel: { Demo: Carousel },
};
