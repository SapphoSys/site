import { collection } from '@keystatic/core';
import schema from '@utils/keystatic/schemas/article';

export default collection({
  label: 'Articles',
  slugField: 'title',
  path: 'src/content/articles/*',
  format: { contentField: 'content' },
  entryLayout: 'content',
  schema,
});
