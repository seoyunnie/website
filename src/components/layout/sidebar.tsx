import { AppShell, UnstyledButton } from "@mantine/core";
import { Link } from "@tanstack/react-router";
import type { ComponentPropsWithoutRef } from "react";

import { NAV_ITEMS } from "./nav-items.ts";
import styles from "./sidebar.module.css";

const ACTIVE_LINK_PROPS = { className: styles.activeLink } as const satisfies ComponentPropsWithoutRef<"a">;
const INACTIVE_LINK_PROPS = { className: styles.link } as const satisfies ComponentPropsWithoutRef<"a">;

export function Navbar() {
  return (
    <AppShell.Navbar className={styles.sidebar}>
      {NAV_ITEMS.map((item) => (
        <UnstyledButton
          key={item.label}
          component={Link}
          to={item.to}
          activeProps={ACTIVE_LINK_PROPS}
          inactiveProps={INACTIVE_LINK_PROPS}
        >
          {item.label}
        </UnstyledButton>
      ))}
    </AppShell.Navbar>
  );
}
