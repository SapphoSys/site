import { defineConfig } from 'astro/config';

// Astro modules
import mdx from '@astrojs/mdx';
import prefetch from '@astrojs/prefetch';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';

// Rehype modules
import autolinkHeadings from 'rehype-autolink-headings';
import externalLinks from 'rehype-external-links';
import slug from 'rehype-slug';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.arciniega.one',
  integrations: [
    mdx({
      rehypePlugins: [slug, autolinkHeadings, [externalLinks, { target: '_blank', rel: ['nofollow', 'noopener'] }]],
    }),
    prefetch(),
    sitemap(),
    compress(),
  ],
});
