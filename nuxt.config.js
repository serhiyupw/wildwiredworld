export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,


  router: {
    routes: [
      {
        path: "/",
        component: "pages/index.vue",
      },
      {
        path: "/password",
        component: "pages/password.vue",
      },
      {
        path: "/protected-page",
        component: "pages/protected-page.vue",
      },
      {
        path: "/world1",
        component: "pages/world1.vue",
      },
    ],
  },
  
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'landscapes',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    // script: [
    //   {
    //     src: `https://maps.googleapis.com/maps/api/js?key=AIzaSyA4Il6qFcwwbltnGW56GN9EskBWlen9Pu0&libraries=geometry`,
    //   },
    // ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css',
  ],


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
