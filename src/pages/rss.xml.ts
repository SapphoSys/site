import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

import { dedent } from 'ts-dedent';
import { base, blog } from '$config';

import { getContainerRenderer } from '@astrojs/mdx';
import { loadRenderers } from 'astro:container';

import { format } from 'date-fns';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { transform, walk } from 'ultrahtml';

import rss, { type RSSFeedItem } from '@astrojs/rss';
import sanitize from 'ultrahtml/transformers/sanitize';

import RSSRenderer from '@components/blog/RSSRenderer.astro';

export async function fixLinks(html: string, baseUrl: string) {
  return await transform(html, [
    async (node) => {
      await walk(node, (node) => {
        if (node.name === 'a' && node.attributes.href?.startsWith('/')) {
          node.attributes.href = baseUrl + node.attributes.href;
        }
        if (node.name === 'img' && node.attributes.src?.startsWith('/')) {
          node.attributes.src = baseUrl + node.attributes.src;
        }
      });
      return node;
    },

    sanitize({ dropElements: ['script', 'style'] }),
  ]);
}

const formatDate = (date: string | Date) => format(new Date(date), 'MMMM d, yyyy');

export const GET: APIRoute = async ({ generator }) => {
  let baseUrl = import.meta.env.PROD ? 'https://sapphic.moe' : 'http://localhost:4321';
  if (baseUrl.at(-1) === '/') baseUrl = baseUrl.slice(0, -1);

  const articles = await getCollection('articles');

  const items: RSSFeedItem[] = [];
  const container = await AstroContainer.create({
    renderers: await loadRenderers([getContainerRenderer()]),
  });

  for (const article of articles) {
    let html = await container.renderToString(RSSRenderer, {
      params: { id: article.id },
    });

    html = await fixLinks(html, baseUrl);

    items.push({
      title: article.data.title,
      description: article.data.description,
      pubDate: new Date(article.data.created),
      link: `/article/${article.id}`,
      categories: article.data.tags,
      content: html,
      customData: dedent`
        <prettyDate>${formatDate(article.data.created)}</prettyDate>
      `,
    });
  }

  return await rss({
    title: blog.rss.options.title,
    description: blog.rss.options.description,
    site: import.meta.env.SITE,
    items,
    stylesheet: '/rss/feed.xsl',

    customData: dedent`
      <webMaster>contact@sapphic.moe</webMaster>
      <generator>${generator}</generator>
      <image>
        <url>${baseUrl}${base.images.favicon.fileName}</url>
        <title>${blog.rss.options.title}</title>
        <link>${baseUrl}</link>
      </image>
    `,
  });
};
