import { z, defineCollection } from 'astro:content';

defineCollection({
  schema: z.object({
    title: z.string(),
    created: z.date(),
    description: z.string(),
    draft: z.boolean(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});
