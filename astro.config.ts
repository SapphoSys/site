import { defineConfig } from 'astro/config';
import { base } from './src/site.config';

// Official Astro integrations
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// Third-party Astro integrations
import autoImport from 'astro-auto-import';
import expressiveCode from 'astro-expressive-code';
import icon from 'astro-icon';

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
  // redirects: {
  //   '/.well-known/webfinger': 'https://auth.sappho.systems/.well-known/webfinger',
  // },
  integrations: [
    tailwind(),
    autoImport({
      imports: ['$components/markdown/Image.astro', '$components/markdown/Spoiler.astro'],
    }),
    expressiveCode({
      themes: [catppuccinMocha],
      styleOverrides: {
        frames: {
          shadowColor: '#000',
          editorActiveTabIndicatorTopColor: catppuccinMocha.colors['terminal.ansiMagenta'],
          editorActiveTabForeground: catppuccinMocha.colors['terminal.ansiMagenta'],
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
    react(),
  ],
  markdown: {
    remarkPlugins: [
      a11yEmoji,
      figureCaption,
      readingTime,
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
  vite: {
    plugins: [arrayBuffer()],
  },
});
