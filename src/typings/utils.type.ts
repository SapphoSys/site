import { z } from 'astro/zod';

const postSchema = z.object({
  data: z.object({
    astro: z.object({
      frontmatter: z.object({
        minutesRead: z.string().optional(),
      }),
    }),
  }),
});

const webringSchema = z.object({
  name: z.string(),
  link: z.string(),
  image: z.string(),
});

export type PostData = z.infer<typeof postSchema>;
export type Webring = z.infer<typeof webringSchema>;
