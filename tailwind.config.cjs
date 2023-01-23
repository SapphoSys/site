/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,md,mdx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'Atkinson Hyperlegible', 'sans-serif'],
    },
    colors: {
      'sakura': '#120c0e',
      'accent': '#eb99a1',
      'white': '#d9d8dc',
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
