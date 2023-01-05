import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import prefetch from '@astrojs/prefetch';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.arciniega.one',
    integrations: [
        mdx({
            drafts: true,
        }),
        prefetch(),
        sitemap(),
        compress(),
    ],
});
