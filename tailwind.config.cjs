/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{astro,html,js,md,mdx,ts}'],
  theme: {
    fontFamily: {
      body: ['Inter', 'sans-serif'],
      display: ['Atkinson Hyperlegible', 'sans-serif'],
      mono: ['Iosevka', 'monospace'],
    },
    colors: {
      'braytech': '#E33D5B',
      'dim': '#F37321',
      'destinyrecipes': '#C8455E',
      'dbots': '#a8bdff',
      'enlive': '#01C412',
      'littlelight': '#9a86f0',
      'novecore': '#708aff',
      'parallel': '#CA2917',
      'light-bg': '#e6e9ef',
      'light-accent': '#ea76cb',
      'light-text': '#4c4f69',
    },
    extend: {
      typography: () => ({
        invert: {
          css: {
            '--tw-prose-invert-bullets': '#f5c2e7',
            hr: {
              background: '#f5c2e7',
              height: '1px',
              borderTopWidth: '0',
            },
            a: {
              background: '#f5c2e7',
              backgroundClip: 'text',
              color: 'transparent',
            },
            'a:hover': {
              background: '#c99fbe',
              backgroundClip: 'text',
              color: 'transparent',
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
              background: '#8839ef',
              backgroundClip: 'text',
              color: 'transparent',
            },
            'a:hover': {
              background: '#6027ab',
              backgroundClip: 'text',
              color: 'transparent',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@catppuccin/tailwindcss')({
      prefix: 'ctp',
    }),
    require('@tailwindcss/typography'),
  ],
};
