import { createMarkdownProcessor } from '@astrojs/markdown-remark';

import slug from 'rehype-slug';
import a11yEmoji from '@fec/remark-a11y-emoji';
import figureCaption from '@microflash/remark-figure-caption';
import tableOfContents from 'remark-toc';

export const createArticleRenderer = async function () {
  return createMarkdownProcessor({
    syntaxHighlight: false,
    rehypePlugins: [slug],
    remarkPlugins: [a11yEmoji, figureCaption, tableOfContents]
  })
}