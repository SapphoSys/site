import type { Config } from '$typings/config.type';

// export const donation: Config['donation'] = {
//   percent: 12,
//   donated: 2465,
//   goal: 17500,

//   kofi: 'https://ko-fi.com/solelychloe',
//   patreon: 'https://patreon.com/solelychloe',
//   paypal: 'https://paypal.me/solsticesol',
// };

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
  themeColor: '#f5c2e7',
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
      'data-theme': 'https://giscus.catppuccin.com/themes/mocha-pink.css',
      'data-lang': 'en',
      crossorigin: 'anonymous',
    },
  },

  rss: {
    enabled: true,
    options: {
      title: "Sapphic Angels' articles",
      description: 'A personal blog, comprising of whatever stuff we feel like rambling about.',
      href: `https://${base.site.name}/rss.xml`,
    },
  },
};

export const misc: Config['misc'] = {
  // Edit the rewrites found in Caddyfile.
  // Read more about Umami here: https://umami.is/
  umami: {
    enabled: true,
    options: {
      'data-website-id': '1279cae7-78b6-4bfd-b13c-10d4dd9893ee',
      src: '/script.js',
    },
  },
};
