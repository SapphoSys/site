import { defineConfig } from 'astro/config';
import type { AstroIntegration } from 'astro';

import mdx from '@astrojs/mdx';
import prefetch from '@astrojs/prefetch';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import compress from 'astro-compress';
import autolinkHeadings from 'rehype-autolink-headings';
import externalLinks from 'rehype-external-links';
import slug from 'rehype-slug';

// https://astro.build/config
export default defineConfig({
  site: 'https://arciniega.one',
  markdown: {
    rehypePlugins: [
      slug,
      autolinkHeadings,
      [
        externalLinks,
        {
          target: '_blank',
          rel: ['nofollow', 'noopener'],
        },
      ],
    ],
  },
  integrations: [
    tailwind(),
    prefetch(),
    sitemap(),
    compress(),

    // TEMP: The recent Astro update broke integration logic, so "AstroIntegration" has been supplied here for now.
    mdx() as AstroIntegration,
  ],
  output: 'server',
  adapter: vercel(),
});
