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
      { property: 'og:url', content: 'https://izanagifarisaslam.vercel.app/' },
      { property: 'og:title', content: 'RPL U 18' },
      { property: 'og:description', content: 'Halo saya Izanagi Faris Aslam saya tertarik dengan web development, videografi, fotografi, dan aplikasi. Jelajahi karya kreatif dan proyek inovatif saya' },
      { property: 'og:image', content: 'https://izanagifarisaslam.vercel.app/_nuxt/img/foto.dabd7ce.jpg' },
      // Meta tags Twitter
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: 'https://izanagifarisaslam.vercel.app/' },
      { property: 'twitter:title', content: 'RPL U 18' },
      { property: 'twitter:description', content: 'Halo saya Izanagi Faris Aslam saya tertarik dengan web development, videografi, fotografi, dan aplikasi. Jelajahi karya kreatif dan proyek inovatif saya' },
      { property: 'twitter:image', content: 'https://izanagifarisaslam.vercel.app/_nuxt/img/foto.dabd7ce.jpg' },
      { property: 'linkedin:url', content: 'https://izanagifarisaslam.vercel.app/' },
      { property: 'linkedin:title', content: 'RPL U 18' },
      { property: 'linkedin:description', content: 'Halo saya Izanagi Faris Aslam saya tertarik dengan web development, videografi, fotografi, dan aplikasi. Jelajahi karya kreatif dan proyek inovatif saya' },
      { property: 'linkedin:image', content: 'https://izanagifarisaslam.vercel.app/_nuxt/img/foto.dabd7ce.jpg' },
      {
        hid: "description",
        name: "description",
        content:
          "Halo saya Izanagi Faris Aslam saya tertarik dengan web development, videografi, fotografi, dan aplikasi. Jelajahi karya kreatif dan proyek inovatif saya",
      },
      { hid: "description", name: "author", content: "Izanagi Faris Aslam" },
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
          "@context": "https://izanagifarisaslam.vercel.app/",
          "@type": "Person",
          name: "Izanagi Faris Aslam",
          url: "https://web.whatsapp.com/",
          sameAs: [
            "https://github.com/izanagi05",
            "https://www.instagram.com/z.frs_slm05",
            "https://www.linkedin.com/in/izanagi-faris-aslam-2b81842a2",
          ],
          jobTitle: "Web Developer, Videographer, Photographer, Musician",
          worksFor: {
            "@type": "Web Developer",
            name: "Izanagi Faris Aslam",
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
