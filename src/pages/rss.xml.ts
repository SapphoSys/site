import rss from '@astrojs/rss';

import { feed } from '@config';
import { getCollection } from 'astro:content';
import { parseISO } from 'date-fns';

const posts = await getCollection('posts');

export const get = () =>
  rss({
    title: feed.title,
    description: feed.description,
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      description: post.data.description,
      link: `posts/${post.slug}`,
      pubDate: parseISO(post.data.created),
      title: post.data.title,
    })),
  });
