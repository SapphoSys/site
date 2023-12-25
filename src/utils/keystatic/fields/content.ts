import { fields } from '@keystatic/core';
import componentBlocks from '@utils/keystatic/components';

export default (type: string, typeInfo: string) =>
  fields.document({
    label: 'Content',
    description: `The main body of the ${typeInfo}.`,
    formatting: true,
    dividers: true,
    links: true,
    images: {
      directory: `src/content/${type}/*/images`,
      publicPath: `/src/content/${type}/images/`,
    },
    componentBlocks,
  });
