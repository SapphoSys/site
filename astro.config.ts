import { defineConfig } from 'astro/config';
import { readFileSync } from 'node:fs';

import markdoc from '@astrojs/markdoc';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

import keystatic from '@keystatic/astro';

import icon from 'astro-icon';
import workerLinks from 'astro-worker-links';
import compress from 'astro-compress';
import simpleStackStream from 'simple-stack-stream';

const site = 'https://arciniega.one';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: vercel(),
  site,
  devToolbar: {
    enabled: false,
  },
  integrations: [
    tailwind(),
    markdoc(),
    react(),
    ...(process.env.SKIP_KEYSTATIC ? [] : [keystatic()]),
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
    simpleStackStream(),
  ],
  vite: {
    plugins: [rawFonts(['.ttf'])],
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
});

function rawFonts(ext: string[]) {
  return {
    name: 'vite-plugin-raw-fonts',
    transform(_: unknown, id: string) {
      if (ext.some((e) => id.endsWith(e))) {
        const buffer = readFileSync(id);
        return {
          code: `export default ${JSON.stringify(buffer)}`,
          map: null,
        };
      }
    },
  };
}
