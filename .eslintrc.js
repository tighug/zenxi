module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  globals: {
    __resources: true
  },
  parserOptions: {
    sourceType: "module",
    parser: "babel-eslint"
  },
  extends: [
    "@nuxtjs",
    "plugin:nuxt/recommended",
    "prettier/vue",
    "plugin:prettier/recommended"
  ],
  // add your custom rules here
  rules: {
    "vue/max-attributes-per-line": "off"
  }
};
