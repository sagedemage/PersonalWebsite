import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import betterImageService from 'astro-better-image-service';
import compressor from 'astro-compressor';
import playformCompress from '@playform/compress';
import mdx from '@astrojs/mdx';
import remarkToc from 'remark-toc';
import rehypePresetMinify from 'rehype-preset-minify';


// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    betterImageService(),
    compressor(),
    playformCompress(),
    mdx(
      {
        syntaxHighlight: 'shiki',
        shikiConfig: { theme: 'dracula' },
        remarkPlugins: [remarkToc],
        rehypePlugins: [rehypePresetMinify],
        remarkRehype: { footnoteLabel: 'Footnotes' },
        gfm: false,
      }
    )
  ],
  site: 'https://sagedemage.github.io',
  base: '/PersonalWebsite'
});