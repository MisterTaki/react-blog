// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // custom rules here
  'rules': {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    'no-plusplus': ["error", { "allowForLoopAfterthoughts": true }],
    'max-len': 0,
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": ["warn", { "aspects": ["invalidHref"] }]
  }
}
