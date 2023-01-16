/**
 * @file Types
 * @description Typings for the website's components
 * @typedef types
 */

/**
 * Properties for the Markdown Frontmatter
 */
export interface PostFrontmatter {
  author: string;
  comments: Boolean;
  created: Date;
  description: string;
  draft: Boolean;
  image?: {
    alt?: string;
    url?: string;
  };
  tags?: Array<String>;
  title: string;
}

/**
 * Properties for a page
 */
export interface PageProps {
  description: string;
  siteName: string;
  title: string;
}
