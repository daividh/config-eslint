const config = {
  extends: ['plugin:eslint-comments/recommended'],
  rules: {
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
  },
};

module.exports = config;
