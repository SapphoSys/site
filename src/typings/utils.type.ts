import { z } from 'astro/zod';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const articleSchema = z.object({
  data: z.object({
    astro: z.object({
      frontmatter: z.object({
        title: z.string(),
        description: z.string(),
        draft: z.boolean(),
        created: z.string(),
        modified: z.string().optional(),
        tag: z.array(z.any()),
        comments: z.boolean().optional(),
        minutesRead: z.string(),
      }),
    }),
  }),
});

export type ArticleData = z.infer<typeof articleSchema>;
