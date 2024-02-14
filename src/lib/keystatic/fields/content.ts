import components from '@lib/keystatic/components';
import { __experimental_mdx_field as mdx } from '@keystatic/core/form/fields/markdoc';

export default ({ type, typeInfo }: { type: string; typeInfo: string }) =>
  mdx({
    label: 'Content',
    description: `The main body of the ${typeInfo}.`,
    options: {
      divider: true,
      link: true,
      image: {
        directory: `src/content/${type}/*/images`,
        publicPath: `/src/content/${type}/images/`,
      },
    },
    components,
  });
