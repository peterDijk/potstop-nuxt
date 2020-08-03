module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  env: {
    browser: true,
    node: true,
  },

  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    // 'plugin:prettier/recommended',
    'prettier/vue',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier', 'vue'],
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
  },
};
