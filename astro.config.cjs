import { defineConfig } from 'astro/config';
import compress from "astro-compress";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [compress(), tailwind()],
  site: 'https://sagedemage.github.io',
  base: '/PersonalWebsite'
});