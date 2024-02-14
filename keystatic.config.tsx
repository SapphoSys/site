import { config } from '@keystatic/core';

import collections from '@lib/keystatic/collections';
import singletons from '@lib/keystatic/singletons';

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
        return (
          <img
            src="https://em-content.zobj.net/source/whatsapp/352/sparkles_2728.png"
            alt="The glittering flashes of sparkles. Generally depicted as a cluster of three, yellow four-point stars, with one large sparkle and two small ones to its left or right."
            height={24}
          />
        );
      },
    },
  },

  collections,
  singletons,
});
