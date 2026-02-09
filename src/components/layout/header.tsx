import {
  ActionIcon,
  AppShell,
  Burger,
  Container,
  Group,
  Title,
  UnstyledButton,
  useComputedColorScheme,
  useMantineColorScheme,
  type ActionIconProps,
} from "@mantine/core";
import { IconBrandGithub, IconMoon, IconSun } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import type { ComponentPropsWithoutRef } from "react";

import styles from "./header.module.css";
import { NAV_ITEMS } from "./nav-items.ts";

const ACTIVE_LINK_PROPS = { className: styles.activeLink } as const satisfies ComponentPropsWithoutRef<"a">;
const INACTIVE_LINK_PROPS = { className: styles.link } as const satisfies ComponentPropsWithoutRef<"a">;

const ACTION_ICON_PROPS = { variant: "default", size: "lg" } as const satisfies ActionIconProps;
const ICON_STROKE_SIZE = 1.5;

export interface HeaderProps {
  isBurgerOpen: boolean;
  toggleNavbar: () => void;
}

export function Header({ isBurgerOpen, toggleNavbar }: Readonly<HeaderProps>) {
  const { setColorScheme } = useMantineColorScheme();
  const currColorScheme = useComputedColorScheme("light", { getInitialValueInEffect: true });

  return (
    <AppShell.Header>
      <Container size="lg" h="100%">
        <Group gap="xs" h="100%">
          <Burger
            aria-label="Toggle navigation"
            size="sm"
            opened={isBurgerOpen}
            hiddenFrom="xs"
            onClick={toggleNavbar}
          />

          <Group justify="space-between" flex={1}>
            <Title order={2}>SEOYUNNI3</Title>

            <Group gap="xs" visibleFrom="xs">
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
            </Group>
          </Group>

          <ActionIcon
            aria-label="Open GitHub profile"
            component="a"
            href="https://github.com/seoyunnie"
            target="_blank"
            rel="noreferrer"
            {...ACTION_ICON_PROPS}
          >
            <IconBrandGithub stroke={ICON_STROKE_SIZE} />
          </ActionIcon>
          <ActionIcon
            aria-label="Change color theme"
            onClick={() => {
              setColorScheme(currColorScheme === "light" ? "dark" : "light");
            }}
            {...ACTION_ICON_PROPS}
          >
            {currColorScheme === "dark" ? (
              <IconSun stroke={ICON_STROKE_SIZE} />
            ) : (
              <IconMoon stroke={ICON_STROKE_SIZE} />
            )}
          </ActionIcon>
        </Group>
      </Container>
    </AppShell.Header>
  );
}
