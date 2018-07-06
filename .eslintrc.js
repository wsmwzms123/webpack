module.exports = {
  root: true,
  env: {
    browser: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ["standard", 'plugin:vue/essential'],
  plugins: ["vue"]
};