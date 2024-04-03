import type { APIContext } from 'astro';
import type { ReactNode } from 'react';

import { html } from 'satori-html';
import { Resvg } from '@resvg/resvg-js';
import { getCollection } from 'astro:content';
import { format, parseISO } from 'date-fns';

import satori from 'satori';
import Atkinson from '@utils/fonts/AtkinsonHyperlegible-Regular.ttf';

const formatDate = (date: Date) => format(date, 'MMMM d, yyyy');

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
        slug: article.slug,
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
  const createdAt =
    formatDate(typeof created === 'string' ? parseISO(created) : created) ?? undefined;

  const imageTemplate = html`
    <div class="flex h-full w-full flex-col bg-[#1e1e2e] text-[#cdd6f4]">
      <div class="flex h-4/5 w-full flex-col justify-center p-10">
        <span class="text-xl	text-[#9399b2]">${createdAt}</span>
        <h1 class="text-6xl font-bold">${title}</h1>
        <h2 class="opacity-60">${description}</h2>
      </div>

      <div class="flex h-1/5 w-full items-center justify-between border-t-4 border-[#f5c2e7] p-10">
        <div class="flex items-center">
          <img class="h-15 w-15 rounded-full" src="https://github.com/SapphicMoe.png" />
          <div class="flex flex-col pl-3">
            <span class="text-2xl">Sapphic Angels</span>
            <span class="text-[#f5c2e7]">(she/it/they - plural)</span>
          </div>
        </div>
        <div class="flex items-center">
          <img
            class="h-10 w-10"
            src="https://em-content.zobj.net/source/google/387/cherry-blossom_1f338.png"
          />
          <div class="flex flex-row items-center pl-3 text-2xl">
            <span>Article on</span>
            <span class="pl-1.5 text-[#f5c2e7]">sapphic.moe</span>
          </div>
        </div>
      </div>
    </div>
  `;

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
