import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

import "./globals.css";

import { createTheme, MantineProvider } from "@mantine/core";
import { RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { router } from "./router.ts";

const theme = createTheme({
  primaryColor: "red",
  autoContrast: true,
  fontFamily: "Roboto, sans-serif",
  defaultRadius: "md",
  cursorType: "pointer",
});

// oxlint-disable-next-line unicorn/prefer-query-selector
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="auto">
      <RouterProvider router={router} />
    </MantineProvider>
  </StrictMode>,
);
