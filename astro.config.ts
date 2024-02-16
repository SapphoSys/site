import { defineConfig } from 'astro/config';
import { rawFonts } from './src/utils/misc';
import { base } from './src/site.config';

import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

// Rehype and Remark plugins
import a11yEmoji from '@fec/remark-a11y-emoji';
import figureCaption from '@microflash/remark-figure-caption';
import autolinkHeadings from 'rehype-autolink-headings';
import externalLinks from 'rehype-external-links';
import slug from 'rehype-slug';
import codeTitle from 'remark-code-title';
import tableOfContents from 'remark-toc';
import readingTime from './src/utils/article';

import autoImport from 'astro-auto-import';
import compress from 'astro-compress';
import icon from 'astro-icon';
import workerLinks from 'astro-worker-links';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: vercel(),
  site: base.site.url,
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
      readingTime,
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
          content: {
            type: 'element',
            tagName: 'svg',
            properties: {
              width: 16,
              height: 16,
              version: 1.1,
              viewBox: '0 0 24 24',
              xlmns: 'http://www.w3.org/2000/svg',
              fill: 'currentcolor',
            },
            children: [
              {
                type: 'element',
                tagName: 'path',
                properties: {
                  d: 'M19.33 10.18a1 1 0 0 1-.77 0 1 1 0 0 1-.62-.93l.01-1.83-8.2 8.2a1 1 0 0 1-1.41-1.42l8.2-8.2H14.7a1 1 0 0 1 0-2h4.25a1 1 0 0 1 1 1v4.25a1 1 0 0 1-.62.93Z',
                },
                children: [],
              },
              {
                type: 'element',
                tagName: 'path',
                properties: {
                  d: 'M11 4a1 1 0 1 1 0 2H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-4a1 1 0 1 1 2 0v4a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h4Z',
                },
                children: [],
              },
            ],
          },
          contentProperties: {
            'aria-hidden': 'true',
            class: 'external-link-icon',
          },
        },
      ],
    ],
  },
  integrations: [
    tailwind(),
    autoImport({
      imports: [{ 'astro-icon/components': ['Icon'] }, './src/components/mdx/Caption.astro'],
    }),
    mdx(),
    keystatic(),
    react(),
    icon({
      include: {
        mdi: ['*'],
        'simple-icons': ['paypal', 'kofi'],
      },
    }),
    sitemap(),
    compress(),
    workerLinks({
      domain: 'https://solstice.tf',
      secret: process.env.WORKER_SECRET!,
      getPageMapping(pages) {
        return pages
          .filter(
            (url) =>
              url.pathname !== '/article/' &&
              url.pathname.includes('/article') &&
              !url.pathname.includes('/article/tag')
          )
          .map((url) => {
            return {
              page: url.href,
              shortlink: url.pathname.replace('/article', ''),
            };
          });
      },
    }),
    // TODO: Re-enable later
    // simpleStackStream(),
  ],
  vite: {
    plugins: [rawFonts(['.ttf'])],
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
});
