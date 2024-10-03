import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import betterImageService from 'astro-better-image-service';

import compressor from 'astro-compressor';

import playformCompress from '@playform/compress';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    betterImageService(),
    compressor(),
    playformCompress()
  ],
  site: 'https://sagedemage.github.io',
  base: '/PersonalWebsite'
});