import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginJest from 'eslint-plugin-jest';
import react from 'eslint-plugin-react';
import importPlugin from 'eslint-plugin-import';
import stylistic from '@stylistic/eslint-plugin';
import tailwind from 'eslint-plugin-tailwindcss';

export default defineConfig([
  globalIgnores(['dist', 'eslint.config.js']),
  importPlugin.flatConfigs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      tailwind.configs['flat/recommended'],
      reactRefresh.configs.vite,
    ],
    plugins: {
      react,
      jest: pluginJest,
      '@stylistic': stylistic,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      '@stylistic/no-multiple-empty-lines': ['error', { max: 1 }],
      '@stylistic/max-len': ['warn', { code: 140 }],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/array-bracket-spacing': ['error', 'never'],
      '@stylistic/space-before-function-paren': ['error', 'never'],
      '@stylistic/space-in-parens': ['error', 'never'],
      '@stylistic/keyword-spacing': ['error', { before: true, after: true }],

      'tailwindcss/no-custom-classname': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'react/react-in-jsx-scope': 'off',
      'import/prefer-default-export': 'off',
      'react/function-component-definition': 'off',
      'no-restricted-exports': 'off',
      'import/no-cycle': 'off',
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': ['error'],
      'react/jsx-no-useless-fragment': 'off',
      'no-use-before-define': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-use-before-define': 'error',
      '@typescript-eslint/no-unused-vars': 'warn',
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
      'react/jsx-props-no-spreading': 'off',
      'import/no-extraneous-dependencies': 'off',
      'no-unused-expressions': 'off',
      'react/prop-types': 'off',
      'react/require-default-props': 'off',
      'react/default-props-match-prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'no-underscore-dangle': 'off',
      'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal'],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
      tailwindcss: {
        config: false,
      },
      'better-tailwindcss': {
        entryPoint: 'src/index.css',
      },
      'import/resolver': {
        node: {
          paths: ['src'],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        typescript: {},
      },
    },
  },
]);
