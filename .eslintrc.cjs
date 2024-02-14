/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    node: true,
    es2022: true,
    browser: true,
  },
  extends: ['eslint:recommended', 'plugin:astro/recommended', 'plugin:jsx-a11y/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' },
        ],
        '@typescript-eslint/no-non-null-assertion': 'off',
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        '@typescript-eslint/triple-slash-reference': 'off',
      },
    },
    {
      files: ['**/*.astro/*.js', '*.astro/*.js'],
      parser: '@typescript-eslint/parser',
    },
  ],
};
