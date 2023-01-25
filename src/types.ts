/**
 * @file Types
 * @description Typings for the website's components
 * @typedef types
 */

/**
 * Properties for the Markdown Frontmatter
 */
export interface PostFrontmatter {
  comments: boolean;
  created: string;
  description: string;
  draft?: boolean;
  image?: {
    alt?: string;
    url?: string;
  };
  tags?: Array<string>;
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
