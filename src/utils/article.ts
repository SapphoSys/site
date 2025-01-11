import type { ArticleData } from '$typings/utils.type';

import { toString as convertToString } from 'mdast-util-to-string';
import getReadingTime from 'reading-time';

const remarkReadingTime = () => {
  return (tree: Node, { data }: ArticleData) => {
    const textOnPage = convertToString(tree);
    const readingTime = getReadingTime(textOnPage);

    data.astro.frontmatter.minutesRead = readingTime.text;
  };
};

export default remarkReadingTime;
