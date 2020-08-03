module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },

  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'eslint-config-prettier',
  ],
  plugins: ['vue'], // vue
  // add your custom rules here
  rules: {
    // 'vue/v-bind-style': ['longform'],
    'vue/html-self-closing': [
      'warn',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/attribute-hyphenation': 'off',
  },
};
