module.exports = {
  root: true,
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js',
      },
    },
  },
  // custom rules here
  rules: {
    'max-len': 'warn',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'react/prop-types': ['warn', { ignore: ['className'] }],
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
  },
};
