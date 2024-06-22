import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

import { dedent } from 'ts-dedent';
import { base, blog } from '$config';

import { getContainerRenderer } from '@astrojs/mdx';
import { loadRenderers } from 'astro:container';

import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { transform, walk } from 'ultrahtml';
import rss from '@astrojs/rss';
import sanitize from 'ultrahtml/transformers/sanitize';

import RSSRenderer from '@components/blog/RSSRenderer.astro';

export const GET: APIRoute = async ({ generator }) => {
  let baseUrl = import.meta.env.PROD ? 'https://sapphic.moe' : 'http://localhost:4321';
  if (baseUrl.at(-1) === '/') baseUrl = baseUrl.slice(0, -1);

  const articles = await getCollection('articles');

  const items = [];
  const container = await AstroContainer.create({
    renderers: await loadRenderers([getContainerRenderer()]),
  });

  for (const article of articles) {
    const html = await container.renderToString(RSSRenderer, {
      params: { slug: article.slug },
    });

    const sanitized = await transform(html, [
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

    items.push({
      title: article.data.title,
      description: article.data.description,
      pubDate: new Date(article.data.created),
      link: `/article/${article.slug}`,
      content: sanitized,
    });
  }

  return await rss({
    title: blog.rss.options.title,
    description: blog.rss.options.description,
    site: import.meta.env.SITE,
    items,

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
