import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import astroPlugin from 'eslint-plugin-astro';

export default tseslint.config(
  {
    ignores: ['**/node_modules', '.astro', '.output', '**/.env', '**/dist'],
  },

  tseslint.configs.recommended,
  eslint.configs.recommended,
  tseslint.configs.eslintRecommended,
  ...astroPlugin.configs.recommended,
  ...astroPlugin.configs['jsx-a11y-recommended'],

  {
    files: ['**/*.astro'],
    languageOptions: {
      parserOptions: {
        // `projectService: true` does not work properly with Astro ruleset.
        // Using `project: true` instead.
        projectService: false,
        project: true,
      },
    },
    rules: {
      'no-console': ['warn'],
      'no-warning-comments': ['warn'],

      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],

      'astro/jsx-a11y/anchor-ambiguous-text': [
        'error',
        {
          words: [
            // Defaults
            'click here',
            'here',
            'link',
            'a link',
            'learn more',
          ],
        },
      ],

      'astro/semi': ['error', 'always'],
    },
  }
);
