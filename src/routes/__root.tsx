import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { createRootRoute, HeadContent, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { Header } from "#/components/layout/header.tsx";
import { Sidebar } from "#/components/layout/sidebar.tsx";
import { MOBILE_BREAKPOINT } from "#/constants/breakpoints.ts";

export const Route = createRootRoute({ head: () => ({ meta: [{ title: "Seoyunnie" }] }), component: RootComponent });

function RootComponent() {
  const [isSidebarOpen, { toggle, close }] = useDisclosure(false);

  return (
    <>
      <HeadContent />

      <AppShell
        header={{ height: "var(--header-height)" }}
        navbar={{ width: "100%", breakpoint: MOBILE_BREAKPOINT, collapsed: { desktop: true, mobile: !isSidebarOpen } }}
        transitionDuration={500}
      >
        <Header isBurgerOpen={isSidebarOpen} onToggleSidebar={toggle} />
        <Sidebar onClose={close} />

        <AppShell.Main>
          <Outlet />

          {import.meta.env.DEV && <TanStackRouterDevtools position="bottom-right" />}
        </AppShell.Main>
      </AppShell>
    </>
  );
}
