// Base configuration for this website.

export const base = {
  favicon: {
    // Alt text for the favicon
    altText: 'A pink lotus flower in full bloom.',

    // The favicon file name (for example, /favicon.png)
    fileName: '/lotus.png',
  },

  // The site's accent color that will appear in embeds
  themeColor: '#EF8496',

  // The site's name. Used for Discord/Twitter embeds and etc.
  siteName: 'arciniega.one',
};

// Blog configuration.

export const blog = {
  // Whether to allow GitHub discussion comments provided via Giscus on your blog posts or not.
  // See https://giscus.app/ for more information and edit "src/components/blog/comments.astro" if set to true.
  comments: true,

  rss: {
    // Title for the RSS feed
    title: "Chloe's Posts",

    // Description for the RSS feed
    description: 'A personal blog, comprising of whatever stuff I find interesting to post.',
  },
};

export const misc = {
  // Whether to enable Plausible Analytics.
  // If you're using Vercel, you must also edit the rewrites found in the vercel.json file.
  // Read more about Plausible here: https://plausible.io/
  analytics: true,
};
