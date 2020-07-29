module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript'
    // 'prettier',
    // 'prettier/vue',
    // 'plugin:prettier/recommended',
    // 'plugin:nuxt/recommended',
  ],
  // plugins: ['prettier'],
  // add your custom rules here
  rules: {
    // 'vue/v-bind-style': ['longform'],
    'vue/html-self-closing': [
      'warn',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ]
  }
}
