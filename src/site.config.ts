interface Config {
  base: {
    favicon: {
      altText: string;
      fileName: string;
    };
    themeColor: `#${string}`;
    siteName: string;
  };
  blog: {
    comments: {
      enabled: boolean;
      options: {
        'data-repo': string;
        'data-repo-id': string;
        'data-category': string;
        'data-category-id': string;
        'data-mapping': 'pathname' | 'url' | 'title' | 'og:title' | 'specific' | 'number';
        'data-term'?: string;
        'data-strict': '0' | '1';
        'data-reactions-enabled': '0' | '1';
        'data-emit-metadata': '0' | '1';
        'data-input-position': 'bottom' | 'top';
        'data-theme':
          | 'light'
          | 'light_high_contrast'
          | 'light_protanopia'
          | 'light_tritanopia'
          | 'dark'
          | 'dark_high_contrast'
          | 'dark_protanopia'
          | 'dark_tritanopia'
          | 'dark_dimmed'
          | 'preferred_color_scheme'
          | 'transparent_dark'
          | 'noborder_light'
          | 'noborder_dark'
          | 'cobalt'
          | 'purple_dark'
          | `https://${string}`;
        'data-lang'?:
          | 'ar'
          | 'ca'
          | 'de'
          | 'en'
          | 'eo'
          | 'es'
          | 'fa'
          | 'fr'
          | 'he'
          | 'id'
          | 'it'
          | 'ja'
          | 'ko'
          | 'nl'
          | 'pl'
          | 'pt'
          | 'ro'
          | 'ru'
          | 'th'
          | 'tr'
          | 'vi'
          | 'uk'
          | 'zh-CN'
          | 'zh-TW';
        'data-loading'?: 'lazy';
        'crossorigin': 'anonymous';
      };
    };
    rss: {
      enabled: boolean;
      title: string;
      description: string;
    };
  };
  misc: {
    analytics: boolean;
  };
}

// Base configuration for this website.
export const base: Config['base'] = {
  favicon: {
    altText: 'A pink lotus flower in full bloom.', // Alt text for the favicon
    fileName: '/lotus.png', // The favicon file name (for example, /favicon.png)
  },
  themeColor: '#EF8496', // The site's accent color that will appear in embeds.
  siteName: 'arciniega.one', // The site's name. Used for Discord/Twitter embeds and etc.
};

// Blog configuration.
export const blog: Config['blog'] = {
  // Whether to allow GitHub discussion comments provided via Giscus on your blog posts or not.
  // See https://giscus.app/ for more information and edit "src/components/blog/comments.astro" if set to true.
  comments: {
    enabled: true,
    options: {
      'data-repo': 'solelychloe/arciniega.one',
      'data-repo-id': 'MDEwOlJlcG9zaXRvcnkzODQ2OTI0OTY=',
      'data-category': 'Comments',
      'data-category-id': 'DIC_kwDOFu3xEM4CTiMS',
      'data-mapping': 'og:title',
      'data-strict': '1',
      'data-reactions-enabled': '1',
      'data-emit-metadata': '0',
      'data-input-position': 'top',
      'data-theme': 'preferred_color_scheme',
      'data-lang': 'en',
      crossorigin: 'anonymous',
    },
  },

  rss: {
    enabled: false, // Toggle RSS on and off
    title: "Chloe's Posts", // RSS feed title
    description: 'A personal blog, comprising of whatever stuff I find interesting to post.', // RSS feed description
  },
};

// Miscellaneous configruation.
export const misc: Config['misc'] = {
  // Whether to enable Plausible Analytics.
  // If you're using Vercel, you must also edit the rewrites found in the vercel.json file.
  // Read more about Plausible here: https://plausible.io/
  analytics: true,
};
