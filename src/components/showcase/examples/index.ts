import dynamic from "next/dynamic";
import type { ComponentType } from "react";

export const EXAMPLE_COMPONENTS: Record<string, ComponentType> = {
  "sign-in": dynamic(() => import("./sign-in")),
  settings: dynamic(() => import("./settings")),
  checkout: dynamic(() => import("./checkout")),
  dashboard: dynamic(() => import("./dashboard")),
};
