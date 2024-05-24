export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'RPL U 18',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://rplu18.vercel.app/' },
      { property: 'og:title', content: 'RPL U 18' },
      { property: 'og:description', content: 'RPL U Angkatan 18' },
      { property: 'og:image', content: 'https://rplu18.vercel.app/_nuxt/img/bgawal.f2374ae.jpg' },
      // Meta tags Twitter
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: 'https://rplu18.vercel.app/' },
      { property: 'twitter:title', content: 'RPL U 18' },
      { property: 'twitter:description', content: 'RPL U Angkatan 18' },
      { property: 'twitter:image', content: 'https://rplu18.vercel.app/_nuxt/img/bgawal.f2374ae.jpg' },
      { property: 'linkedin:url', content: 'https://rplu18.vercel.app/' },
      { property: 'linkedin:title', content: 'RPL U 18' },
      { property: 'linkedin:description', content: 'RPL U Angkatan 18' },
      { property: 'linkedin:image', content: 'https://rplu18.vercel.app/_nuxt/img/bgawal.f2374ae.jpg' },
      {
        hid: "description",
        name: "description",
        content:
          "RPL U Angkatan 18",
      },
      { hid: "description", name: "author", content: "RPL U 18" },
      {
        name: "keywords",
        content:
          "Smkn 2 Kota Bekasi, Butun, SMK, Alumni Smkn 2 Kota Bekasi, jasa pembuatan website, web developer, desain website, video editing, editor, fotografi, kamera, google",
      },

      { name: "format-detection", content: "telephone=no" },
    ],
    script: [
      {
        type: "application/ld+json",
        json: {
          "@context": "https://rplu18.vercel.app/",
          "@type": "Person",
          name: "RPL U 18",
          url: "https://web.whatsapp.com/",
          sameAs: [
            "https://github.com/izanagi05",
            "https://www.instagram.com/z.frs_slm05",
            "https://www.linkedin.com/in/izanagi-faris-aslam-2b81842a2",
          ],
          jobTitle: "Web Developer, Videographer, Photographer, Musician",
          worksFor: {
            "@type": "Web Developer",
            name: "RPL U 18",
          },
        },
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
