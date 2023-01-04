import rss from '@astrojs/rss';

import { feed } from '../constants';

export const get = () =>
    rss({
        title: feed.title,
        description: feed.description,
        site: import.meta.env.SITE,
        items: import.meta.glob('./blog/**/*.{md,mdx}')
    });
