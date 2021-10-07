
const bodyParser = require('body-parser');


export default {
  mode: 'universal',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'project-1',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap' },
    ]
  },

  loading: {
    color: '#3b8070',
    throttle: 5
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/styles/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    baseUrl: process.env.BASE_URL || 'https://nuxt-bl-default-rtdb.europe-west1.firebasedatabase.app/',
    creadentials: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  env: {
    baseUrl: process.env.BASE_URL || 'https://nuxt-bl-default-rtdb.europe-west1.firebasedatabase.app/',
    fbApiKey: process.env.FB_API_KEY || 'AIzaSyAfmAZiyuI3DJ23Eaq4yvLRVrbc-ACHBsQ'
  },

  transition: {
    name: 'fade',
    mode: 'out-in'
  },


  serverMiddleware: [
    bodyParser.json(),
    '~/api'
  ]
}
