import { defineConfig } from "astro/config";
import { satteri } from "@astrojs/markdown-satteri";
import solidJs from "@astrojs/solid-js";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs()],
  markdown: {
    processor: satteri(),
  },
  site: "https://sagedemage.github.io",
  base: "/PersonalWebsite",
  vite: {
    plugins: [tailwindcss()],
  },
});