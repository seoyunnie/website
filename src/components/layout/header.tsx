import type { UseMediaQueryOptions } from "@mantine/hooks";

import {
  type MantineSpacing,
  AppShell,
  Burger,
  Container,
  Group,
  Title,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { IconBrandGithub, IconMoon, IconSun } from "@tabler/icons-react";

import { MOBILE_BREAKPOINT } from "#/constants/breakpoints.ts";
import { SOCIAL_LINK_REGISTRY } from "#/data/contacts.ts";
import { NAV_ITEMS } from "#/data/nav-items.ts";

import { HeaderIcon } from "./header-icon.tsx";
import { NavItem } from "./nav-item.tsx";

import styles from "./header.module.css";

export interface HeaderProps {
  isBurgerOpen: boolean;

  onToggleSidebar: () => void;
}

const MEDIA_QUERY_OPTIONS = { getInitialValueInEffect: true } satisfies UseMediaQueryOptions;

const CONTENT_GAP: MantineSpacing = "xs";

export function Header({ isBurgerOpen, onToggleSidebar }: Readonly<HeaderProps>) {
  const { setColorScheme } = useMantineColorScheme();
  const currColorScheme = useComputedColorScheme("light", MEDIA_QUERY_OPTIONS);

  return (
    <AppShell.Header>
      <Container className={styles.inner} size="lg">
        <Group className={styles.content} gap={CONTENT_GAP} justify="space-between">
          <Group>
            <Burger
              aria-label="Toggle navigation"
              hiddenFrom={MOBILE_BREAKPOINT}
              onClick={onToggleSidebar}
              opened={isBurgerOpen}
              size="sm"
            />

            <Title className={styles.titleLogo}>SEOYUNNI3</Title>
          </Group>

          <Group gap={CONTENT_GAP}>
            <Group gap={CONTENT_GAP} visibleFrom={MOBILE_BREAKPOINT}>
              {NAV_ITEMS.map((item) => (
                <NavItem {...item} key={item.label} variant="header" />
              ))}
            </Group>

            <HeaderIcon
              aria-label="Open GitHub profile"
              component="a"
              href={SOCIAL_LINK_REGISTRY.github.profileURL}
              icon={IconBrandGithub}
              rel="noopener noreferrer"
              target="_blank"
            />
            <HeaderIcon
              aria-label="Change color theme"
              icon={currColorScheme === "dark" ? IconSun : IconMoon}
              onClick={() => {
                setColorScheme(currColorScheme === "light" ? "dark" : "light");
              }}
            />
          </Group>
        </Group>
      </Container>
    </AppShell.Header>
  );
}
