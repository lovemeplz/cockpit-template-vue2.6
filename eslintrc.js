module.exports = {
  'root': true,
  'env': {
    'node': true
  },
  'extends': [
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  'rules': {
    'no-debugger': 'off',
    'indent': ['error', 2],
    'no-multi-assign': 'error',
    'arrow-spacing': [2, {
      'before': true,
      'after': true
    }],
    'vue/max-attributes-per-line': ['error', {
      'singleline': 3,      
      'multiline': 1
    }],
    'vue/multiline-html-element-content-newline': ['error', {
      'ignoreWhenEmpty': true,
      'ignores': [],
      'allowEmptyLines': true
    }]
  },
  'parserOptions': {
    'parser': 'babel-eslint'
  }
}