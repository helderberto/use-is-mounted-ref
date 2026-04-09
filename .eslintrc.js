module.exports = {
  env: {
    browser: true,
    es2018: true,
  },
  parser: '@typescript-eslint/parser',
  extends: ['plugin:react/recommended', 'prettier', 'plugin:vitest/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'vitest'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/jsx-filename-extension': 'off',
    'prettier/prettier': 'error',
  },
};
