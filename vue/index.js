const config = {
  extends: ['plugin:vue/vue3-recommended'],
  rules: {
    // Conflict with prettier
    'vue/html-self-closing': 'off',
    'vue/singleline-html-element-content-newline': 'off',
  },
};

module.exports = config;
