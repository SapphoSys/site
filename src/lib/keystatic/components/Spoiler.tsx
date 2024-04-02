import { fields } from '@keystatic/core';
import { wrapper } from '@keystatic/core/content-components';
import { MdOutlineVisibilityOff } from 'react-icons/md';

import SpoilerPreview from '@components/keystatic/SpoilerPreview.tsx';

export default wrapper({
  label: 'Spoiler',
  description: 'Put an image behind a spoiler.',
  ContentView: (props) => <SpoilerPreview {...props} />,
  icon: <MdOutlineVisibilityOff size={28} />,
  schema: {
    description: fields.text({
      label: 'Description',
      multiline: true,
      validation: {
        length: {
          min: 1,
        },
      },
    }),
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
