// eslint.config.js
import js from '@eslint/js'
import eslintPluginVue from 'eslint-plugin-vue'
import ts from 'typescript-eslint'
import sort from 'eslint-plugin-simple-import-sort'

export default ts.config(js.configs.recommended, ...ts.configs.recommended, ...eslintPluginVue.configs['flat/recommended'], {
    files: ['*.vue', '**/*.vue'],
    rules: {
      'max-depth': ['error', 2],
      'sort/imports': 'error',
      'sort/exports': 'error',
      'vue/html-indent': 'off'
    },
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    },
    plugins: { 
      sort
    }
})
