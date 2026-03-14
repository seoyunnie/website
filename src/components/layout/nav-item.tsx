import type { ComponentProps } from "react";

import { UnstyledButton } from "@mantine/core";
import { type LinkProps, Link } from "@tanstack/react-router";

import type { NavItem as NavItemData } from "#/data/nav-items.ts";

import styles from "./nav-item.module.css";

export type NavItemVariant = "header" | "sidebar";

export interface NavItemProps extends NavItemData {
  variant?: NavItemVariant;

  onClick?: ComponentProps<typeof Link>["onClick"];
}

const ACTIVE_PROPS = { "data-active": true } as const satisfies LinkProps["activeProps"];

export function NavItem({ label, onClick, to, variant }: Readonly<NavItemProps>) {
  return (
    <UnstyledButton
      activeProps={ACTIVE_PROPS}
      className={styles.root}
      component={Link}
      data-variant={variant}
      onClick={onClick}
      to={to}
    >
      {label}
    </UnstyledButton>
  );
}
