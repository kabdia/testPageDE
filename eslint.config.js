import js from "@eslint/js";

export default [
  js.configs.recommended,

  {
    languageOptions: {
      globals: {
        document: 'readonly',
        __dirname: 'readonly',
        browser: 'readonly', 
        es2021: 'readonly',
      },
    },
    rules: {
      semi: ['error', 'always'], 
    },
  },
];