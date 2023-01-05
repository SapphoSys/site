import rss from '@astrojs/rss';

import { feed } from '../constants.cjs';

export const get = () =>
    rss({
        title: feed.title,
        description: feed.description,
        site: import.meta.env.SITE,
        drafts: false,
        items: import.meta.glob('./blog/**/*.{md,mdx}'),
    });
