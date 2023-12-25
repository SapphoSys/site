import { component, fields } from '@keystatic/core';

export default component({
  label: 'Emoji',
  preview: (props) => <span>{props.fields.name.value}</span>,
  schema: {
    name: fields.text({ label: 'Name' }),
  },
});
