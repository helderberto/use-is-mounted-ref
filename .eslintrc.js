module.exports = {
  env: {
    jest: true,
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    }
  },
  plugins: [
    'react',
    'prettier',
    'jest',
  ],
  rules: {
    "react/jsx-filename-extension": "off",
    "import/extensions": "off",
    'import/no-unresolved': 'off',
    'no-return-assign': 'off',
    "prettier/prettier": "error",
  },
};
