import { fields } from '@keystatic/core';

export default {
  friends: fields.array(
    fields.object({
      name: fields.text({
        label: 'Name',
        description: 'Name of the button to display.',
        validation: { length: { min: 1 } },
      }),

      image: fields.image({
        label: 'Image',
        description: 'Image to display.',
        directory: 'public/buttons/',
        publicPath: '/buttons/',
        validation: { isRequired: true },
      }),

      url: fields.url({
        label: 'URL',
        description: 'URL of the link to display.',
        validation: { isRequired: true },
      }),
    }),

    {
      label: 'Friend buttons',
      slugField: 'name',
      description: 'Friend buttons to display in the main page',
      itemLabel: (props) => props.fields.name.value,
    }
  ),

  other: fields.array(
    fields.object({
      name: fields.text({
        label: 'Name',
        description: 'Name of the button to display.',
        validation: { length: { min: 1 } },
      }),

      image: fields.image({
        label: 'Image',
        description: 'Image to display.',
        directory: 'public/buttons/',
        publicPath: '/buttons/',
        validation: { isRequired: true },
      }),

      url: fields.url({
        label: 'URL',
        description: 'URL of the link to display.',
      }),
    }),

    {
      label: 'Other buttons',
      slugField: 'name',
      description: 'Other buttons to display in the main page',
      itemLabel: (props) => props.fields.name.value,
    }
  ),
};
