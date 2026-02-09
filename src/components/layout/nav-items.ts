import type { FileRoutesByPath } from "@tanstack/react-router";

export interface NavItem {
  readonly label: Capitalize<string>;
  readonly to: keyof FileRoutesByPath;
}

export const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about/" },
  { label: "Projects", to: "/projects/" },
] as const satisfies NavItem[];
