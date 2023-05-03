import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import prefetch from '@astrojs/prefetch';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import compress from 'astro-compress';
import robotsTxt from 'astro-robots-txt';
import workerLinks from 'astro-worker-links';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import remarka11yEmoji from '@fec/remark-a11y-emoji';
import remarkToc from 'remark-toc';

// https://astro.build/config
export default defineConfig({
  site: 'https://arciniega.one',
  markdown: {
    remarkPlugins: [remarka11yEmoji, [remarkToc, { tight: true }]],
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
    mdx(),
    prefetch(),
    sitemap(),
    workerLinks({
      domain: 'https://solstice.tf',
      secret: process.env.WORKER_SECRET!,
      getPageMapping(pages) {
        return pages
          .filter(
            (url) =>
              url.pathname !== '/posts/' && url.pathname.includes('/posts') && !url.pathname.includes('/posts/tag')
          )
          .map((url) => {
            return {
              page: url.href,
              shortlink: url.pathname.replace('/posts', ''),
            };
          });
      },
    }),
    compress(),
    robotsTxt(),
  ],
  output: 'server',
  adapter: vercel(),
});
