import { z } from 'astro/zod';

const urlExpression =
  /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g;

const configSchema = z.object({
  donation: z.object({
    percent: z.number(),
    donated: z.number(),
    goal: z.number(),
    kofi: z.string().regex(urlExpression),
    paypal: z.string().regex(urlExpression),
  }),

  base: z.object({
    images: z.object({
      favicon: z.object({
        altText: z.string(),
        fileName: z.string(),
      }),
      twitter: z.object({
        altText: z.string(),
        fileName: z.string(),
      }),
    }),
    themeColor: z.string().regex(urlExpression),
    site: z.object({
      name: z.string(),
      url: z.string(),
    }),
  }),

  blog: z.object({
    comments: z.object({
      enabled: z.boolean(),
      options: z.object({
        'data-repo': z.string(),
        'data-repo-id': z.string(),
        'data-category': z.string(),
        'data-category-id': z.string(),
        'data-mapping': z.enum(['pathname', 'url', 'title', 'og:title', 'specific', 'number']),
        'data-term': z.string().optional(),
        'data-strict': z.enum(['0', '1']),
        'data-reactions-enabled': z.enum(['0', '1']),
        'data-emit-metadata': z.enum(['0', '1']),
        'data-input-position': z.enum(['bottom', 'top']),
        'data-theme': z
          .enum([
            'light',
            'light_high_contrast',
            'light_protanopia',
            'light_tritanopia',
            'dark',
            'dark_high_contrast',
            'dark_protanopia',
            'dark_tritanopia',
            'dark_dimmed',
            'preferred_color_scheme',
            'transparent_dark',
            'noborder_light',
            'noborder_dark',
            'cobalt',
            'purple_dark',
          ])
          .or(z.string().regex(urlExpression)),
        'data-lang': z
          .enum([
            'ar',
            'ca',
            'de',
            'en',
            'eo',
            'es',
            'fa',
            'fr',
            'he',
            'id',
            'it',
            'ja',
            'ko',
            'nl',
            'pl',
            'pt',
            'ro',
            'ru',
            'th',
            'tr',
            'vi',
            'uk',
            'zh-CN',
            'zh-TW',
          ])
          .optional(),
        'data-loading': z.enum(['lazy']).optional(),
        crossorigin: z.enum(['anonymous']),
      }),
    }),

    rss: z.object({
      enabled: z.boolean(),
      options: z.object({
        title: z.string(),
        description: z.string(),
        href: z.string(),
      }),
    }),
  }),

  misc: z.object({
    plausible: z.object({
      enabled: z.boolean(),
      options: z.object({
        'data-domain': z.string(),
        'data-api': z.string(),
        src: z.string(),
      }),
    }),
  }),
});

export type Config = z.infer<typeof configSchema>;
