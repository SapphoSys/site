import { config } from '@keystatic/core';

import collections from '@lib/keystatic/collections';
import singletons from '@lib/keystatic/singletons';

export default config({
  storage: {
    kind: 'github',
    repo: 'solelychloe/sapphic.moe',
  },

  ui: {
    brand: {
      name: "Sapphic Angels' articles",
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
