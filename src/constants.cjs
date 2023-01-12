// Base configuration for this website.
export const base = {
  // The accent color for this website
  color: '#e0802c',
  // The favicon for this website
  favicon: {
    // Alt text for the favicon
    alt: 'A pink love heart with stars around it, making it look like it is sparkling or shimmering.',
    // File name for the favicon (for example, /favicon.png)
    fileName: '/favicon.png',
  },
  // Plausible Analytics settings
  plausible: {
    // Whether to enable Plausible Analytics.
    // If you're using Vercel, you must also edit the rewrites found in the vercel.json file.
    // Read more about Plausible here: <https://plausible.io/>
    analytics: true,
  },
  // SEO information
  seo: {
    // Keywords for search engines
    keywords: ['solelychloe', 'chloe arciniega', 'solely chloe', 'chloe solely'],
  },
  // The site's name. (will appear as example.com)
  site: 'arciniega.one',
};

// Social links that appear on the home page.
// If you don't want to link anything here, leave this object empty. Don't uncomment or remove this, as you'll face errors!
export const socials = {
  // Your Discord tag and ID
  discord: {
    // Discord tag (will appear as example#1234)
    alt: 'solely#0001',
    // Discord ID (will appear as https://discord.com/users/423256515281585545)
    id: '312145496179474434',
  },
  // Your GitHub username (will appear as https://github.com/yourusername)
  github: 'solelychloe',
  // Your email (will appear as mail@example.com)
  mail: 'solely@riseup.net',
  // Your Mastodon instance identifier and link
  mastodon: {
    // Instance identifier (will appear as name@instance.link)
    alt: 'solely@tech.lgbt',
    // Instance link (will appear as https://instance.link/name)
    link: 'https://tech.lgbt/@solely',
  },
  // Your Telegram username (will appear as https://t.me/yourusername)
  telegram: 'solelychloe',
  // Your Twitter username (will appear as https://twitter.com/yourusername)
  twitter: 'solelychloe',
};

// prettier-ignore
// RSS feed for my blog.
export const feed = {
    // Whether to allow GitHub discussion comments provided via Giscus on your blog posts or not.
    // See <https://giscus.app/> for more information and edit src/components/blog/comments.astro if set to true.
    comments: true,
    // Description for the RSS feed
    description: 'A personal blog, comprising of whatever stuff I find interesting to post.',
    // Title for the RSS feed
    title: 'Chloe\'s Posts'
};
