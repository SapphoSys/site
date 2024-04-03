import type { Config } from '@typings/config.type';

export const donation: Config['donation'] = {
  percent: 12,
  donated: 2465,
  goal: 17500,

  kofi: 'https://ko-fi.com/solelychloe',
  patreon: 'https://patreon.com/solelychloe',
  paypal: 'https://paypal.me/solsticesol',
};

export const base: Config['base'] = {
  images: {
    favicon: {
      altText:
        'The pink flower of a cherry blossom tree. Depicted as a single, light-pink cherry blossom with five, notched petals and red-tipped stamens in a yellow or white center.',
      fileName: '/favicon.ico',
    },
    twitter: {
      altText:
        'The pink flower of a cherry blossom tree. Depicted as a single, light-pink cherry blossom with five, notched petals and red-tipped stamens in a yellow or white center.',
      fileName: '/favicon.png',
    },
  },
  themeColor: '#EF8496',
  site: {
    name: 'sapphic.moe',
    url: 'https://sapphic.moe',
  },
};

export const blog: Config['blog'] = {
  // See https://giscus.app/ for more information.
  comments: {
    enabled: true,
    options: {
      'data-repo': 'SapphicMoe/sapphic.moe',
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
    enabled: true,
    options: {
      title: "Sapphic Angels' articles",
      description: 'A personal blog, comprising of whatever stuff we find interesting to post.',
      href: `https://${base.site.name}/rss.xml`,
    },
  },
};

export const misc: Config['misc'] = {
  // Edit the rewrites found in the vercel.json file if you're using Vercel.
  // Read more about Plausible here: https://plausible.io/
  plausible: {
    enabled: true,
    options: {
      'data-domain': base.site.name,
      'data-api': '/api/event',
      src: '/js/script.js',
    },
  },
};
