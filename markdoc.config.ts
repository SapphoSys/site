import { component, defineMarkdocConfig, nodes } from '@astrojs/markdoc/config';
import shiki from '@astrojs/markdoc/shiki';

export default defineMarkdocConfig({
  nodes: {
    link: {
      ...nodes.link,
      render: component('./src/components/mdoc/Link.astro'),
    },
    heading: {
      ...nodes.heading,
      render: component('./src/components/mdoc/Heading.astro'),
    },
  },
  tags: {
    emoji: {
      render: component('./src/components/mdoc/Emoji.astro'),
      attributes: {
        name: { type: String, required: true },
      },
    },
    imageWithCaption: {
      render: component('./src/components/mdoc/Caption.astro'),
      attributes: {
        src: { type: String, required: true },
        alt: { type: String },
        caption: { type: String },
      },
    },
    toc: {
      render: component('./src/components/mdoc/TableOfContents.astro'),
      attributes: {
        headings: { type: String, required: true },
      },
    },
  },
  extends: [
    shiki({
      theme: 'material-theme-ocean',
      wrap: true,
      langs: [],
    }),
  ],
});
