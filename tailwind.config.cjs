/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,md,mdx,ts,tsx}'],
  theme: {
    fontFamily: {
      body: ['Inter', 'sans-serif'],
      display: ['Atkinson Hyperlegible', 'sans-serif'],
    },
    colors: {
      'accent': '#eb99a1',
      'sakura': '#120c0e',
      'white': '#d9d8dc',
      'braytech': '#E33D5E',
      'dim': '#F37321',
      'destinyrecipes': '#C8455E',
      'dbots': '#7885ad',
      'littlelight': '#9e88ffcc',
      'novecore': '#5b7ef0',
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
  plugins: [],
};
