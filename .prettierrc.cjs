/** @type import('prettier').Config */
module.exports = {
    plugins: [require.resolve('prettier-plugin-astro')],
    proseWrap: 'always',
    printWidth: 120,
    quoteProps: 'preserve',
    semi: true,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: 'es5',
    overrides: [
      {
        files: '*.astro',
        options: {
          parser: 'astro'
        },
      },
    ],
  };
