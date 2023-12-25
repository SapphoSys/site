import { z } from 'astro/zod';

const readTimeSchema = z.object({
  text: z.string(),
  minutes: z.number(),
  time: z.number(),
  words: z.number(),
});

const articleSchema = z.object({
  data: z.object({
    astro: z.object({
      frontmatter: z.object({
        title: z.string(),
        created: z.string(),
        modified: z.string(),
        description: z.string(),
        tag: z.string(),
        readingTime: readTimeSchema,
        minutesRead: z.number(),
      }),
    }),
  }),
});

const webringSchema = z.object({
  name: z.string(),
  link: z.string(),
  image: z.string(),
});

const otherButtonSchema = z.object({
  name: z.string(),
  link: z.string().optional(),
  image: z.string(),
});

export type ArticleData = z.infer<typeof articleSchema>;
export type Webring = z.infer<typeof webringSchema>;
export type OtherButton = z.infer<typeof otherButtonSchema>;
