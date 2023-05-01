// Base configuration for this website.

export const base = {
  favicon: {
    // Alt text for the favicon
    altText: 'A pink lotus flower in full bloom.',

    // The favicon file name (for example, /favicon.png)
    fileName: '/lotus.png',
  },

  seo: {
    // The site's accent color that will appear in embeds
    themeColor: '#EF8496',
  },

  // The site's name. Used for Discord/Twitter embeds and etc.
  siteName: 'arciniega.one',
};

// Blog configuration.

export const blog = {
  // Information about the blog author that will appear in the blog posts.
  author: {
    // The author's name
    name: 'Chloe',

    // The author's image
    image: '/solely.png',
  },

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

  lastFM: {
    username: 'solelychloe',
  },
};

// Social links that appear on the home page.
// If you don't want to link anything here, you can remove this object.

// export const socials = {
//   discord: {
//     // Your Discord tag (will appear as example#1234)
//     tag: 'solely#0001',

//     // Your Discord ID (will appear as https://discord.com/users/423256515281585545)
//     id: '312145496179474434',
//   },

//   // Your GitHub username (will appear as https://github.com/yourusername)
//   github: 'solelychloe',

//   // Your email address (will appear as mail@example.com)
//   mail: 'solely@riseup.net',

//   mastodon: {
//     // Instance identifier (will appear as name@instance.link)
//     tag: 'solely@tech.lgbt',

//     // Instance link (will appear as https://instance.link/name)
//     link: 'https://tech.lgbt/@solely',
//   },

//   // Your Telegram username (will appear as https://t.me/yourusername)
//   telegram: '',

//   // Your Twitter username (will appear as https://twitter.com/yourusername)
//   twitter: 'solelychloe',
// };
