import { defineConfig } from 'astro/config';
import type { AstroIntegration } from 'astro';

import mdx from '@astrojs/mdx';
import prefetch from '@astrojs/prefetch';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import compress from 'astro-compress';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import remarka11yEmoji from '@fec/remark-a11y-emoji';

// https://astro.build/config
export default defineConfig({
  site: 'https://arciniega.one',
  markdown: {
    remarkPlugins: [remarka11yEmoji],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          content: {
            type: 'text',
            value: '🔗',
          },
        },
      ],
      [
        rehypeExternalLinks,
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
