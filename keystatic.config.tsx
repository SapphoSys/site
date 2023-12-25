import { config } from '@keystatic/core';

import articles from '@utils/keystatic/collections/articles';
import info from '@utils/keystatic/collections/info';

const IS_PROD = import.meta.env.MODE === 'production';

export default config({
  storage: IS_PROD
    ? {
        kind: 'github',
        repo: 'solelychloe/arciniega.one',
      }
    : {
        kind: 'local',
      },
  ui: {
    brand: {
      name: "Chloe's Article Posts",
      mark: () => {
        return <img src="https://em-content.zobj.net/source/whatsapp/352/sparkles_2728.png" height={24} />;
      },
    },
  },
  collections: {
    articles,
    info,
  },
});
