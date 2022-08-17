module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:vue/vue3-essential', 'standard'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    camelcase: 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'multi-word-component-names': 'off',
    // 添加组件命名忽略规则
    'vue/multi-word-component-names': 'off'
    // "vue/multi-word-component-names": ["error",{
    //   "ignores": ["index"]//需要忽略的组件名
    // }]
  }
}
