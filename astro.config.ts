// https://astro.build/config

import { defineConfig } from 'astro/config';
import prefetch from '@astrojs/prefetch';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';

export default defineConfig({
  site: 'https://arciniega.one',
  trailingSlash: 'ignore',
  integrations: [sitemap(), prefetch(), compress()]
});
