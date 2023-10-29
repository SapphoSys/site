import type { APIContext } from 'astro';
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
  created: string;
}

export async function getStaticPaths() {
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
}

export async function GET(context: APIContext) {
  const { title, description, created } = context.props as Props;
  const createdAt = formatDate(parseISO(created)) ?? undefined;

  const imageTemplate = html`
    <div class="flex h-full w-full flex-col bg-[#1e1e2e] text-[#cdd6f4]">
      <div class="flex h-4/5 w-full flex-col justify-center p-10">
        <span class="text-xl text-[#a6adc8]">${createdAt}</span>
        <h1 class="text-6xl font-bold">${title}</h1>
        <h2>${description}</h2>
      </div>

      <div class="flex h-1/5 w-full items-center justify-between border-t-4 border-[#f5c2e7] p-10">
        <div class="flex items-center">
          <img src="https://avatars.githubusercontent.com/u/22654782?v=4" class="h-15 w-15 rounded-full" />
          <div class="flex flex-col pl-3">
            <span class="text-2xl">Chloe Arciniega</span>
            <span class="text-[#f5c2e7]">(she/it/they)</span>
          </div>
        </div>
        <div class="flex items-center">
          <img src="https://arciniega.one/lotus.png" class="h-15 w-15" />
          <span class="pl-3 text-2xl text-[#f5c2e7]">arciniega.one</span>
        </div>
      </div>
    </div>
  `;

  const svg = await satori(imageTemplate, {
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
}
