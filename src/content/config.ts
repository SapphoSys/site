import { z, defineCollection } from 'astro:content';
import { blog } from '../site.config';

defineCollection({
  schema: z.object({
    title: z.string(),
    created: z.date(),
    description: z.string(),
    author: z.string().default(blog.defaultAuthor),
    draft: z.boolean(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});
