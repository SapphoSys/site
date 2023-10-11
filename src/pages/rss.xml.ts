import rss from '@astrojs/rss';

import { blog } from '@config';
import { getCollection } from 'astro:content';
import { parseISO } from 'date-fns';

const articles = await getCollection('articles');

export const GET = () =>
  rss({
    title: blog.rss.title,
    description: blog.rss.description,
    site: import.meta.env.SITE,
    items: articles.map((article) => ({
      description: article.data.description,
      link: `article/${article.slug}`,
      pubDate: parseISO(article.data.created),
      title: article.data.title,
    })),
  });
