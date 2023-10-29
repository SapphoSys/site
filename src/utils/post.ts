import type { PostData } from '@typings/utils';

import { toString } from 'mdast-util-to-string';
import getReadingTime from 'reading-time';

const remarkReadingTime = () => {
  return (tree: Node, { data }: PostData) => {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);

    data.astro.frontmatter.minutesRead = readingTime.text;
  };
};

export default remarkReadingTime;
