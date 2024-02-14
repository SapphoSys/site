import { fields } from '@keystatic/core';
import content from '../fields/content';

export default {
  title: fields.slug({
    name: {
      label: 'Title',
      description: 'Title of the article.',
      validation: {
        length: {
          min: 1,
        },
      },
    },
    slug: {
      label: 'Slug',
      description: 'Unique slug for the article. (/article/slug)',
    },
  }),

  description: fields.text({
    label: 'Description',
    description: 'Description of the article.',
    validation: {
      length: {
        min: 1,
      },
    },
  }),

  draft: fields.checkbox({
    label: 'Draft',
    description: 'Should this article be a draft?',
    defaultValue: false,
  }),

  created: fields.date({
    label: 'Created',
    description: 'The date that the article was created.',
    validation: {
      isRequired: true,
    },
    defaultValue: {
      kind: 'today',
    },
  }),

  modified: fields.date({
    label: 'Modified',
    description: 'The date that the article was last modified.',
  }),

  tags: fields.array(
    fields.text({
      label: 'Tag',
      description: 'Add a tag that you think fits this article.',
      validation: {
        length: {
          min: 1,
        },
      },
    }),

    {
      label: 'Tags',
      description: 'Tags that this article should have.',
      validation: {
        length: {
          min: 1,
        },
      },
      itemLabel: (props) => props.value,
    }
  ),

  comments: fields.checkbox({
    label: 'Comments',
    description: 'Should this article have comments enabled?',
    defaultValue: true,
  }),
  content: content({ type: 'article', typeInfo: 'article' }),
};
