export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,


  router: {
    middleware: 'auth',
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
        path: "/password2",
        component: "pages/password2.vue",
      },
      {
        path: "/home",
        component: "pages/home.vue",
      },
      {
        path: "/world1",
        component: "pages/world1.vue",
        meta: { requiresAuth: true },
      },
      {
        path: "/world2",
        component: "pages/world3.vue",
        meta: { requiresAuth: true },
      },
      {
        path: "/PrickleBack",
        component: "pages/PrickleBack.vue",
        meta: { requiresAuth: true },
      },
      {
        path: "/PrickleBackworld",
        component: "pages/PrickleBackworld.vue",
        meta: { requiresAuth: true },
      },
      {
        path: "/LimbicForest",
        component: "pages/LimbicForest.vue",
        meta: { requiresAuth: true },
      },
      {
        path: "/LimbicForestworld",
        component: "pages/LimbicForestworld.vue",
        meta: { requiresAuth: true },
      },
      {
        path: "/FinalMetallic",
        component: "pages/FinalMetallic.vue",
        meta: { requiresAuth: true },
      },
      {
        path: "/FinalMetallicworld",
        component: "pages/FinalMetallicworld.vue",
        meta: { requiresAuth: true },
      },
    ],
  },
  
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Wild Wired!',
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
    // '@nuxtjs/sanity/module',
    // '@nuxtjs/sanity',
    '@nuxt/image',
    '@nuxtjs/sanity/module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  // modules: [
  //   '@nuxtjs/loading'
  // ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  image: {
    sanity: {
      projectId: 'rw9chil5',
      dataset: 'production',
    },
  },
  sanity: {
    withCredentials: true,
    useCdn: false,
  },
}
