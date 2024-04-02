import { fields } from '@keystatic/core';
import { wrapper } from '@keystatic/core/content-components';
import { MdImage } from 'react-icons/md';

import CaptionPreview from '@components/keystatic/CaptionPreview.tsx';

export default wrapper({
  label: 'Image with Caption',
  description: 'An image with a caption.',
  ContentView: (props) => <CaptionPreview {...props} />,
  icon: <MdImage size={28} />,
  schema: {
    src: fields.conditional(fields.checkbox({ label: 'Is this an external image?' }), {
      true: fields.url({
        label: 'Image URL',
        description: 'Enter the URL of the external image.',
        validation: {
          isRequired: true,
        },
      }),
      false: fields.image({
        label: 'Image',
        description: 'Upload an image.',
        directory: 'public/images/article',
        publicPath: '/images/article',
        validation: {
          isRequired: true,
        },
      }),
    }),
    alt: fields.text({ label: 'Alt text', multiline: true }),
    caption: fields.text({ label: 'Caption', multiline: true }),
  },
});
