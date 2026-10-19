import js from '@eslint/js';
import vitest from '@vitest/eslint-plugin';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import reactHooks from 'eslint-plugin-react-hooks';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['dist', 'coverage']),
  {
    files: ['**/*.ts'],
    extends: [js.configs.recommended, tseslint.configs.recommended, reactHooks.configs.flat.recommended],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ['src/__tests__/**/*.ts'],
    extends: [vitest.configs.recommended],
    languageOptions: { globals: vitest.environments.env.globals },
  },
  prettierRecommended,
]);
