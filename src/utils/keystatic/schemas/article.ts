import { fields } from '@keystatic/core';
import content from '@utils/keystatic/fields/content';

export default {
  title: fields.slug({
    name: {
      label: 'Title',
      description: 'Title of the article.',
    },
    slug: {
      label: 'Slug',
      description: 'Unique slug for the article. (/article/slug)',
    },
  }),
  description: fields.text({
    label: 'Description',
    description: 'Description of the article.',
  }),
  draft: fields.checkbox({
    label: 'Draft',
    description: 'Should this article be a draft?',
    defaultValue: false,
  }),
  created: fields.date({
    label: 'Created',
    description: 'The date that the article was created.',
    defaultValue: {
      kind: 'today',
    },
  }),
  modified: fields.date({
    label: 'Modified',
    description: 'The date that the article was last modified.',
    defaultValue: {
      kind: 'today',
    },
  }),
  tag: fields.text({
    label: 'Tag',
    description: 'The tag that this article belongs to.',
  }),
  comments: fields.checkbox({
    label: 'Comments',
    description: 'Should this article have comments enabled?',
    defaultValue: false,
  }),
  content: content('article', 'article'),
};
