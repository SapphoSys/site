/** @type {import('@types/prettier').Options} */
module.exports = {
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  pluginSearchDirs: false,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  proseWrap: 'always',
  printWidth: 120,
  quoteProps: 'preserve',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
};
