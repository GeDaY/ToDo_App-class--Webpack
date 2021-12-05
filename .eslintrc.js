module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard', 'plugin:import/recommended', 'airbnb', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {},
}
