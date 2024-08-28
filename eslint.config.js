// import js from '@eslint/js'
// export default [
//   {
//     rules: {
//       "no-unused-vars": 'error',
//       "no-undef": "error"
//     }
//   }
// ]

// import eslint from '@eslint/js';
// import tseslint from 'typescript-eslint';

// export default tseslint.config(
//   js.configs.recommended,
//   ...tseslint.configs.recommended,
// );

import js from '@eslint/js'
import eslintPluginVue from 'eslint-plugin-vue'
import ts from 'typescript-eslint'
import sort from 'eslint-plugin-simple-import-sort'

export default ts.config(
  js.configs.recommended,
  ...ts.configs.recommended,
  ...eslintPluginVue.configs['flat/recommended'],
  {
    files: ['*.vue', '**/*.vue'],
    rules: {
      "sort/imports": "error",
      "sort/exports": "error"
    }
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    },
    plugins: { sort }
  },
) 