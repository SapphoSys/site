import rss from '@astrojs/rss';

import { feed } from '../constants.cjs';
import type { PostFrontmatter } from '~/types';

interface Post {
  url: string;
  frontmatter: PostFrontmatter;
}

const retrieved = import.meta.glob<true, string, Post>('./posts/**/*.{md,mdx}', { eager: true });
const retrievedPosts = Object.values(retrieved);
const posts = retrievedPosts.filter((p) => !p.frontmatter.draft);

export const get = () =>
  rss({
    title: feed.title,
    description: feed.description,
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      description: post.frontmatter.description,
      link: post.url,
      pubDate: post.frontmatter.created,
      title: post.frontmatter.title,
    })),
  });
