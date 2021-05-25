// @flow
module.exports = {
  plugins: ['import'],
  parserOptions: {
    ecmaVersion: '2017',
    sourceType: 'module',
  },
  rules: {
    'import/no-unresolved': 'error',
  },
};
