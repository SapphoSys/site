import { z, defineCollection } from 'astro:content';

const dateRegex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}Z$/;

export const collections = {
  posts: defineCollection({
    schema: z.object({
      title: z.string(),
      created: z.string().regex(dateRegex),
      description: z.string(),
      tag: z.string(),
      comments: z.boolean().optional().default(true),
      timeEstimate: z.string().optional(),
    }),
  }),
};
