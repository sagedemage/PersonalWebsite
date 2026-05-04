import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import playformCompress from "@playform/compress";

import mdx from "@astrojs/mdx";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [playformCompress(), mdx(), vue()],
  site: "https://sagedemage.github.io",
  base: "/PersonalWebsite",
  vite: {
    plugins: [tailwindcss()],
  },
});