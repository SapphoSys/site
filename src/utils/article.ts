import type { ArticleData } from '@typings/utils.type';

import { toString } from 'mdast-util-to-string';
import getReadingTime from 'reading-time';

const remarkReadingTime = () => {
  return (tree: Node, { data }: ArticleData) => {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);

    data.astro.frontmatter.readingTime = readingTime;
    data.astro.frontmatter.minutesRead = readingTime.minutes;
  };
};

const readTime = (article: { body: string }) => {
  return getReadingTime(article.body).text;
};

export default remarkReadingTime;
export { readTime };
