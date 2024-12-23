import js from "@eslint/js";

export default [
  js.configs.recommended,

  {
    languageOptions: {
      
      globals: {        
        document: 'readonly',
        __dirname: 'readonly',
        "browser": true, 
        es2021: 'readonly',
        "FormData": "readonly"
      },
    },
    ignores: ['dist/**', 'build/**', 'node_modules/**'],
    rules: {
      semi: ['error', 'always'], 
    },
      
  },
];