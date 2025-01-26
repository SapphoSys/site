import type { APIContext } from 'astro';
import type { ReactNode } from 'react';

import { html } from 'satori-html';
import { Transformer } from '@napi-rs/image';
import { getCollection } from 'astro:content';
import { format } from 'date-fns';

import HTMLTemplate from '$components/blog/OGImage.astro';

import { getContainerRenderer } from '@astrojs/mdx';
import { loadRenderers } from 'astro:container';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';

import satori from 'satori';
import Atkinson from '@fontsource/atkinson-hyperlegible/files/atkinson-hyperlegible-latin-400-normal.woff?arraybuffer';

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
      created: createdAt,
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

  const image = await Transformer.fromSvg(svg).crop(0, 0, 1200, 630).png();

  return new Response(image, {
    headers: {
      'Content-Type': 'image/png',
    },
  });
};
