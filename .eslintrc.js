module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  extends: ['plugin:prettier/recommended', 'plugin:react/recommended'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  }
}
