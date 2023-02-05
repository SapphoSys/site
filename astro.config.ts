import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import prefetch from '@astrojs/prefetch';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

import autolinkHeadings from 'rehype-autolink-headings';
import externalLinks from 'rehype-external-links';
import slug from 'rehype-slug';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: 'https://arciniega.one',
  integrations: [
    tailwind(),
    mdx({
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
    }),
    prefetch(),
    sitemap(),
    compress(),
  ],
  output: 'server',
  adapter: vercel(),
});
