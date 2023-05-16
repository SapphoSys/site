import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import mdx from '@astrojs/mdx';
import prefetch from '@astrojs/prefetch';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

import compress from 'astro-compress';
import robotsTxt from 'astro-robots-txt';
import workerLinks from 'astro-worker-links';

import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';

import remarka11yEmoji from '@fec/remark-a11y-emoji';
import remarkFigureCaption from '@microflash/remark-figure-caption';
import remarkToc from 'remark-toc';

// https://astro.build/config
export default defineConfig({
  site: 'https://arciniega.one',
  markdown: {
    shikiConfig: {
      theme: 'material-theme-ocean',
      wrap: false,
    },
    remarkPlugins: [
      remarka11yEmoji,
      [
        remarkToc,
        {
          tight: true,
        },
      ],
      remarkFigureCaption,
    ],
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
              url.pathname !== '/articles/' &&
              url.pathname.includes('/articles') &&
              !url.pathname.includes('/articles/tag')
          )
          .map((url) => {
            return {
              page: url.href,
              shortlink: url.pathname.replace('/articles', ''),
            };
          });
      },
    }),
    compress(),
    robotsTxt(),
  ],
  output: 'server',
  adapter: cloudflare(),
});
