// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@stylistic/quotes': ['error', 'single'],
    '@stylistic/semi': ['error', 'never'],
    '@stylistic/comma-dangle': ['error', 'never'],
    'vue/max-attributes-per-line': ['error', { singleline: 1 }],
    'vue/first-attribute-linebreak': ['error', { singleline: 'beside', multiline: 'below' }],
    'vue/html-indent': ['error', 2],
    'vue/html-closing-bracket-newline': ['error', { singleline: 'never', multiline: 'always' }]
  }
})
