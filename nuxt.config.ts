export default {
  head: {
    title: 'Dev Pomodoro',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
  },

  css: [
    '~/assets/css/fonts.css',
    '~/assets/css/tailwind.css',
    '~/assets/css/variables.css',
  ],

  plugins: ['~/plugins/featherIcons'],

  components: [{ path: '@/components', pathPrefix: false }],

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
  ],

  modules: [
    '@nuxtjs/pwa',
    ['cookie-universal-nuxt', { alias: 'cookies' }],
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: process.env.FIREBASE_API_KEY,
          authDomain: process.env.FIREBASE_AUTH_DOMAIN,
          projectId: process.env.FIREBASE_PROJECT_ID,
          storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.FIREBASE_APP_ID,
          measurementId: process.env.MEASUREMENT_ID,
        },

        services: {
          firestore: true,
        },
      },
    ],
  ],

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  build: {},
}
