import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import compress from "astro-compress";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), compress(), tailwind()],
  site: 'https://sagedemage.github.io',
  base: '/PersonalWebsite'
});