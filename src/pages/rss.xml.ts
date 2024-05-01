import rss, { type RSSFeedItem } from '@astrojs/rss';
import { createArticleRenderer } from '@utils/feed';

import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

import { dedent } from 'ts-dedent';
import { base, blog } from '$config';

const getURL = () => import.meta.env.PROD ? 'https://sapphic.moe/' : 'http://localhost:4321/';

const articles = await getCollection('articles');
const processor = await createArticleRenderer();

const items: RSSFeedItem[] = await Promise.all(
  articles.map(async ({ slug, data, body }) => {
    const { code: content } = await processor.render(body);

    return {
      title: data.title,
      description: data.description,
      pubDate: new Date(data.created),
      link: `article/${slug}`,
      content,
    }
  })
)

export const GET: APIRoute = ({ generator }) =>
  rss({
    title: blog.rss.options.title,
    description: blog.rss.options.description,
    site: import.meta.env.SITE,
    items,

    customData: dedent`
      <webMaster>contact@sapphic.moe</webMaster>
      <generator>${generator}</generator>
      <image>
        <url>${getURL()}${base.images.favicon.fileName}</url>
        <title>${blog.rss.options.title}</title>
        <link>${getURL()}</link>
      </image>
    `
  });
