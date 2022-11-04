import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import prefetch from '@astrojs/prefetch';

// https://astro.build/config
export default defineConfig({
  site: 'https://arciniega.one',
  trailingSlash: 'ignore',
  integrations: [sitemap(), prefetch()],
  vite: {
    build: {
      rollupOptions: {
        input: '~/src/assets/details-polyfill.js'
      }
    }
  }
});
