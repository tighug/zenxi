/**
 * By default, Nuxt.js is configured to cover most use cases.
 * This default configuration can be overwritten in this file
 * @link {https://nuxtjs.org/guide/configuration/}
 */

// eslint-disable-next-line nuxt/no-cjs-in-config
module.exports = {
  mode: "spa", // or 'universal'
  head: {
    title: "ZenXi"
  },
  loading: false,
  plugins: [],
  buildModules: [],
  modules: ["@nuxtjs/vuetify"],
  vuetify: {
    theme: {
      dark: true
    }
  }
};
