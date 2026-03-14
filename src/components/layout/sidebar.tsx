import { AppShell } from "@mantine/core";

import { NAV_ITEMS } from "#/data/nav-items.ts";

import { NavItem } from "./nav-item.tsx";

import styles from "./sidebar.module.css";

export interface SidebarProps {
  onClose: () => void;
}

export function Sidebar({ onClose }: Readonly<SidebarProps>) {
  return (
    <AppShell.Navbar className={styles.root}>
      {NAV_ITEMS.map((item) => (
        <NavItem {...item} key={item.label} onClick={onClose} variant="sidebar" />
      ))}
    </AppShell.Navbar>
  );
}
