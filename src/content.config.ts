import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const mdLoader = (collection: string) =>
  glob({ pattern: '**/[^_]*.{md,mdx}', base: `./src/content/${collection}` });

const articlesCollection = defineCollection({
  loader: mdLoader('articles'),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    draft: z.boolean().optional().default(false),
    created: z.string().or(z.date()),
    modified: z.string().or(z.date()).optional(),
    tags: z.array(z.any()),
    comments: z.boolean().optional().default(true),
  }),
});

const infoCollection = defineCollection({
  loader: mdLoader('info'),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    modified: z.string().or(z.date()).optional(),
  }),
});

export const collections = {
  articles: articlesCollection,
  info: infoCollection,
};
