/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,md,mdx,ts,tsx}'],
  plugins: [
    require('@catppuccin/tailwindcss')({
      prefix: 'ctp',
      defaultFlavour: 'mocha',
    }),
  ],
  theme: {
    fontFamily: {
      body: ['Inter', 'sans-serif'],
      display: ['Atkinson Hyperlegible', 'sans-serif'],
    },
    colors: {
      'braytech': '#E33D5E',
      'dim': '#F37321',
      'destinyrecipes': '#C8455E',
      'dbots': '#a8bdff',
      'littlelight': '#9e88ffcc',
      'novecore': '#809eff',
      'parallel': '#CA2917',
    },
    extend: {
      fontSize: {
        '3xl': [
          '1.8rem',
          {
            lineHeight: '1.5',
          },
        ],
      },
    },
  },
};
