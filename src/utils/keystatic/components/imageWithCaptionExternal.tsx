import { component, fields } from '@keystatic/core';
import CaptionPreview from '@components/keystatic/CaptionPreview.tsx';

export default component({
  label: 'Image with caption (external)',
  preview: (props) => <CaptionPreview {...props} />,
  schema: {
    src: fields.url({
      label: 'Image URL',
      description: 'Enter the URL of the external image.',
    }),
    alt: fields.text({ label: 'Alt text', multiline: true }),
    caption: fields.text({ label: 'Caption', multiline: true }),
  },
});
