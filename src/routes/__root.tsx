import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { Header } from "@/components/layout/header.tsx";
import { Navbar } from "@/components/layout/sidebar.tsx";

function RootComponent() {
  const [isNavbarOpen, { toggle }] = useDisclosure(false);

  return (
    <AppShell
      header={{ height: "var(--header-height)" }}
      navbar={{ width: "100%", breakpoint: "xs", collapsed: { desktop: true, mobile: !isNavbarOpen } }}
    >
      <Header isBurgerOpen={isNavbarOpen} toggleNavbar={toggle} />
      <Navbar />

      <AppShell.Main>
        <Outlet />
        {import.meta.env.DEV && <TanStackRouterDevtools position="bottom-right" />}
      </AppShell.Main>
    </AppShell>
  );
}

export const Route = createRootRoute({ component: RootComponent });
