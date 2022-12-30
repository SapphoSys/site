import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import prefetch from '@astrojs/prefetch';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
    integrations: [
        mdx({
            drafts: true
        }),
        prefetch(),
        compress()
    ],
    site: 'https://arciniega.one'
});
