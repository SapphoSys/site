import { component, fields } from '@keystatic/core';
import CaptionPreview from '@components/keystatic/CaptionPreview.tsx';

export default component({
  label: 'Image with caption (local)',
  preview: (props) => <CaptionPreview {...props} />,
  schema: {
    src: fields.image({
      label: 'Image',
      directory: 'src/content/articles/images',
      publicPath: '/src/content/articles/images/',
      validation: {
        isRequired: true,
      },
    }),
    alt: fields.text({ label: 'Alt text', multiline: true }),
    caption: fields.text({ label: 'Caption', multiline: true }),
  },
});
