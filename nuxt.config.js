const router = '/'//process.env.MODE !== 'dev' ? '/apple-service-landing/' : '/'
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // router: {
  //   base: router
  // },
  // server: {
  //   host: process.env.NUXT_ENV_APP_IP || '0.0.0.0',
  //   port: process.env.NUXT_ENV_APP_PORT || 3000
  // },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Apple Service',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: `${router}icons/Apple.svg` }
    ],
    script: [
      {
        src: 'https://unpkg.com/fast-average-color/dist/index.browser.min.js'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.scss',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/fontawesome.js',
    '~/plugins/gc.js'
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

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  axios: {
    credentials: false,
    proxyHeaders: false
  }
}
