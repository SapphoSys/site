/** @type import('prettier').Config */
module.exports = {
    plugins: [require.resolve('prettier-plugin-astro')],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro'
            }
        }
    ],
    proseWrap: 'preserve',
    printWidth: 100,
    quoteProps: 'preserve',
    semi: true,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'none'
};
