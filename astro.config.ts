import { defineConfig } from 'astro/config';
import { base } from './src/site.config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import workerLinks from 'astro-worker-links';

import a11yEmoji from '@fec/remark-a11y-emoji';
import autolinkHeadings from 'rehype-autolink-headings';
import codeTitle from 'remark-code-title';
import externalLinks from 'rehype-external-links';
import figureCaption from '@microflash/remark-figure-caption';
import slug from 'rehype-slug';
import tableOfContents from 'remark-toc';

// https://astro.build/config
export default defineConfig({
  site: `https://${base.siteName}`,
  experimental: {
    assets: true,
    viewTransitions: true,
  },
  markdown: {
    shikiConfig: {
      theme: 'material-theme-ocean',
    },
    remarkPlugins: [
      a11yEmoji,
      codeTitle,
      figureCaption,
      [
        tableOfContents,
        {
          tight: true,
        },
      ],
    ],
    rehypePlugins: [
      slug,
      [
        autolinkHeadings,
        {
          behavior: 'append',
          content: {
            type: 'text',
            value: '#',
          },
        },
      ],
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
    mdx(),
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
  ],
});
