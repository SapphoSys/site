import { collection } from '@keystatic/core';
import schema from '@utils/keystatic/schemas/info';

export default collection({
  label: 'Info',
  slugField: 'title',
  path: 'src/content/info/*',
  format: { contentField: 'content' },
  entryLayout: 'content',
  schema,
});
