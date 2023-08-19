import type { Config } from 'tailwindcss';
import type { PluginAPI } from 'tailwindcss/types/config';

import catppuccin from '@catppuccin/tailwindcss';
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,md,mdx,ts,tsx}'],
  theme: {
    fontFamily: {
      body: ['Atkinson Hyperlegible', 'sans-serif'],
      mono: ['Iosevka', 'monospace'],
    },
    colors: {},
    extend: {
      typography: () => ({
        invert: {
          css: {
            '--tw-prose-invert-bullets': '#f38ba8',

            hr: {
              background: '#f5c2e7',
              height: '1px',
              borderTopWidth: '0',
            },
            a: {
              color: '#f5c2e7',
              textDecorationLine: 'none',

              '&:hover': {
                color: '#c99fbe',
                textDecorationLine: 'underline',
              },
            },
            figure: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',

              '& img': {
                maxHeight: '500px',
                width: 'auto',
                height: '100%',
              },
            },
            figcaption: {
              fontStyle: 'italic',
              color: 'white',
              opacity: '0.75',
            },
          },
        },
        DEFAULT: {
          css: {
            '--tw-prose-bullets': '#8839ef',

            hr: {
              background: '#8839ef',
              height: '1px',
              borderTopWidth: '0',
            },
            a: {
              color: '#8839ef',
              textDecorationLine: 'none',

              '&:hover': {
                color: '#6027ab',
                textDecorationLine: 'underline',
              },
            },
            figure: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',

              '& img': {
                maxHeight: '500px',
                width: 'auto',
                height: '100%',
              },
            },
            figcaption: {
              fontStyle: 'italic',
              color: 'white',
              opacity: '0.75',
            },
          },
        },
      }),
    },
  },
  plugins: [
    catppuccin({
      prefix: 'ctp',
    }),
    typography,
    ({ addComponents }: PluginAPI) => {
      addComponents({
        '.title': {
          '@apply text-4xl font-bold': {},
        },
      });
    },
  ],
} satisfies Config;
