import { fields } from '@keystatic/core';
import content from '@lib/keystatic/fields/content';

export default {
  title: fields.slug({
    name: {
      label: 'Title',
      description: 'Title of the information object.',
      validation: {
        length: {
          min: 1,
        },
      },
    },

    slug: {
      label: 'Slug',
      description: 'Unique slug for the information object. (/slug)',
    },
  }),

  description: fields.text({
    label: 'Description',
    description: 'Description of the information object.',
  }),

  content: content({ type: 'info', typeInfo: 'information object' }),
};
