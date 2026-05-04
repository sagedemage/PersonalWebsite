import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import playformCompress from "@playform/compress";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [playformCompress(), mdx()],
  site: "https://sagedemage.github.io",
  base: "/PersonalWebsite",
  vite: {
    plugins: [tailwindcss()],
  },
});
