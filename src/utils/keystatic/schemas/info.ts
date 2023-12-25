import { fields } from '@keystatic/core';
import content from '@utils/keystatic/fields/content';

export default {
  title: fields.slug({
    name: {
      label: 'Title',
      description: 'Title of the information object.',
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
  content: content('info', 'information object'),
};
