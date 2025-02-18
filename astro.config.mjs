// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    "tutorials": "/tutorials/getting-started",
    "events": "/docs",
    "conditions": "/docs",
    "effects": "/docs",
    "types": "/docs",
    "structures": "/docs",
    "functions": "/docs",
    "sections": "/docs",
    "classes": "/docs",
    "docs/events": "/docs",
    "docs/conditions": "/docs",
    "docs/effects": "/docs",
    "docs/types": "/docs",
    "docs/structures": "/docs",
    "docs/functions": "/docs",
    "docs/sections": "/docs",
    "docs/classes": "/docs",
  }
});