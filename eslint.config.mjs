// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  extends: [
    '@nuxt/eslint-config',
    'eslint:recommended',
    'plugin:vue/vue3-recommended'
  ],
  rules: {
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'indent': ['error', 2],
    'vue/html-indent': ['error', 2]
  }
})
