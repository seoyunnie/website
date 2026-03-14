import "@fontsource/fusion-pixel-10px-proportional-tc/400.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/600.css";
import "@fontsource/roboto/700.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "./globals.css";

import { MantineProvider } from "@mantine/core";
import { RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { router } from "./router.ts";
import { theme } from "./theme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider defaultColorScheme="auto" theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  </StrictMode>,
);
