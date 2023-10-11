import { z, defineCollection } from 'astro:content';

const dateRegex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}Z$/;

const articlesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    created: z.string().regex(dateRegex),
    modified: z.string().regex(dateRegex).optional(),
    tag: z.string(),
    comments: z.boolean().optional().default(true),
  }),
});

const infoCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    modified: z.string().regex(dateRegex).optional(),
  }),
});

export const collections = {
  articles: articlesCollection,
  info: infoCollection,
};
