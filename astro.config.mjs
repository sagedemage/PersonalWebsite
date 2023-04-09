import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import compress from "astro-compress";

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [react(), compress()],
  output: "server",
  adapter: netlify()
});