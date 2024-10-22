/** @type {import('stylelint').Config} */
export default {
  extends: 'stylelint-config-recommended-vue',
  overrides: [
      {
          files: ['*.vue', '**/*.vue'],
          rules: {
              'unit-allowed-list': ['em', 'rem', 's', 'ms', '%', 'px', 'vh', 'fr' ],
              'no-empty-source': null,
              "function-no-unknown": [true, {
                  ignoreFunctions: ['const']
              }]
          }
      }
  ]
}
