import { defineConfig } from 'astro/config';
import { rawFonts } from './src/utils/misc';
import { base } from './src/site.config';

// Official Astro integrations
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
import readingTime from './src/utils/article';
import slug from 'rehype-slug';
import tableOfContents from 'remark-toc';

// Third-party Astro integrations
import autoImport from 'astro-auto-import';
import compress from 'astro-compress';
import expressiveCode from 'astro-expressive-code';
import icon from 'astro-icon';
import workerLinks from 'astro-worker-links';

import catppuccinMocha from '@catppuccin/vscode/themes/mocha.json';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: vercel(),
  site: base.site.url,
  markdown: {
    remarkPlugins: [
      a11yEmoji,
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
          target: '_blank',
          contentProperties: {
            ariaHidden: true,
            className: ['external-link'],
          },
          content: {
            type: 'text',
            value: ' ↗',
          },
        },
      ],
    ],
  },
  integrations: [
    tailwind(),
    expressiveCode({
      themes: [catppuccinMocha],
      styleOverrides: {
        frames: {
          shadowColor: '#000',
          editorActiveTabIndicatorTopColor: '#f5c2e7',
          editorActiveTabForeground: '#f5c2e7',
        },
      },
    }),
    autoImport({
      imports: [
        {
          'astro-icon/components': ['Icon'],
        },
        './src/components/mdx/Caption.astro',
        './src/components/mdx/Spoiler.astro',
      ],
    }),
    mdx(),
    keystatic(),
    react(),
    icon({
      include: {
        mdi: ['*'],
        'simple-icons': ['kofi', 'patreon', 'paypal'],
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
  ],
  vite: {
    plugins: [rawFonts(['.ttf'])],
    build: {
      rollupOptions: {
        external: ['@astrojs/markdown-remark'],
      },
    },
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
});
