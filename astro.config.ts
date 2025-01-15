import { defineConfig } from 'astro/config';
import { base } from './src/site.config';

// Official Astro integrations
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// Third-party Astro integrations
import expressiveCode from 'astro-expressive-code';
import icon from 'astro-icon';
// import workerLinks from 'astro-worker-links';

// Rehype and Remark plugins
import a11yEmoji from '@fec/remark-a11y-emoji';
import figureCaption from '@microflash/remark-figure-caption';
import autolinkHeadings from 'rehype-autolink-headings';
import externalLinks from 'rehype-external-links';
import readingTime from './src/utils/article';
import slug from 'rehype-slug';
import tableOfContents from 'remark-toc';

// Vite
import arrayBuffer from 'vite-plugin-arraybuffer';

// Expressive Code theme
import catppuccinMocha from '@catppuccin/vscode/themes/mocha.json';

// https://astro.build/config
export default defineConfig({
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
    mdx(),
    icon({
      include: {
        mdi: ['*'],
      },
    }),
    sitemap(),
    // workerLinks({
    //   domain: 'https://solstice.tf',
    //   secret: process.env.WORKER_SECRET!,
    //   getPageMapping(pages) {
    //     return pages
    //       .filter(
    //         (url) =>
    //           url.pathname !== '/article/' &&
    //           url.pathname.includes('/article') &&
    //           !url.pathname.includes('/article/tag')
    //       )
    //       .map((url) => {
    //         return {
    //           page: url.href,
    //           shortlink: url.pathname.replace('/article', ''),
    //         };
    //       });
    //   },
    // }),
  ],
  vite: {
    plugins: [arrayBuffer()],
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
});
