import components from '@lib/keystatic/components';
import { fields } from '@keystatic/core';

export default ({ type, typeInfo }: { type: string; typeInfo: string }) =>
  fields.mdx({
    label: 'Content',
    description: `The main body of the ${typeInfo}.`,
    options: {
      divider: true,
      link: true,
      image: {
        directory: `public/images/${type}`,
        publicPath: `/images/${type}`,
      },
    },
    components,
  });
