import babel from "@rolldown/plugin-babel";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(({ command: cmd }) => ({
  base: cmd === "build" ? "/website/" : "/",
  plugins: [
    tanstackRouter({ target: "react", generatedRouteTree: "./src/route-tree.gen.ts", autoCodeSplitting: true }),
    react(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
}));
