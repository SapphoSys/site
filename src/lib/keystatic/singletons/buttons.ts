import { singleton } from '@keystatic/core';
import schema from '@lib/keystatic/schemas/buttons';

export default singleton({
  label: 'Buttons',
  path: 'src/data/buttons/',
  format: { data: 'json' },
  schema,
});
