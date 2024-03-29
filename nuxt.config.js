const bodyParser = require('body-parser');
const axios = require('axios');

export default {
  mode: 'universal', 
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'sell-home',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [{ src: 'https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js',  integrity: 'sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj', crossorigin: 'anonymous' },
    { src: 'https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js', integrity: 'sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN',  crossorigin: 'anonymous' },
    { src: 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js', integrity: 'sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+', crossorigin: 'anonymous' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
  ],

  axios: {
    baseURL: process.env.BASE_URL || 'https://nuxt-blog-fdc27-default-rtdb.firebaseio.com',
    credentials: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    standalone: true,
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://nuxt-blog-fdc27-default-rtdb.firebaseio.com',
    fbAPIKey: 'AIzaSyCK85lAvSjJq9q3-yZ_E55Qnl9ey_x9GZA'
  },

  transition: {
    name: 'fade',
    mode: 'out-in'
  },

  serverMiddleware: [
    bodyParser.json(),
    '~/api'
  ],
  
  generate: {
    routes: function() {
      return axios.get('https://nuxt-blog-fdc27-default-rtdb.firebaseio.com/homes.json')
      .then(res => {
        const routes = []
        for (const key in res.data) {
          routes.push('/posts/' + key)
        }
        return routes
      })
    }
  },
}
