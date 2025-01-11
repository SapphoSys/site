import type { APIContext } from 'astro';
import type { ReactNode } from 'react';

import { html } from 'satori-html';
import { Resvg } from '@resvg/resvg-js';
import { getCollection } from 'astro:content';
import { format } from 'date-fns';

import HTMLTemplate from '@components/blog/OGImage.astro';

import { getContainerRenderer } from '@astrojs/mdx';
import { loadRenderers } from 'astro:container';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';

import satori from 'satori';
import Atkinson from '@utils/fonts/AtkinsonHyperlegible-Regular.ttf';
const dimensions = {
  width: 1200,
  height: 630,
};

interface Props {
  title: string;
  description: string;
  created: string | Date;
}

export const getStaticPaths = async () => {
  const articles = await getCollection('articles');

  return articles.map((article) => {
    return {
      params: {
        id: article.id,
      },
      props: {
        title: article.data.title,
        description: article.data.description,
        created: article.data.created,
      },
    };
  });
};

export const GET = async (context: APIContext) => {
  const { title, description, created } = context.props as Props;
  const createdAt = format(new Date(created), 'MMMM d, yyyy');

  const container = await AstroContainer.create({
    renderers: await loadRenderers([getContainerRenderer()]),
  });

  const htmlTemplate = await container.renderToString(HTMLTemplate, {
    props: {
      title,
      description,
      created: createdAt
    },
  });

  const imageTemplate = html(htmlTemplate);

  const svg = await satori(imageTemplate as ReactNode, {
    fonts: [
      {
        name: 'Atkinson Hyperlegible',
        data: Buffer.from(Atkinson),
        style: 'normal',
      },
    ],
    ...dimensions,
  });

  const image = new Resvg(svg, {
    fitTo: {
      mode: 'width',
      value: dimensions.width,
    },
  }).render();

  return new Response(image.asPng(), {
    headers: {
      'Content-Type': 'image/png',
    },
  });
};
