const siteMeta = require('./data/siteMeta')
const { buildSeoMeta } = siteMeta

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: siteMeta.title,
    htmlAttrs: {
      lang: 'id',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'robots',
        name: 'robots',
        content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      },
      { hid: 'googlebot', name: 'googlebot', content: 'index, follow' },
      { hid: 'keywords', name: 'keywords', content: siteMeta.keywords },
      { hid: 'author', name: 'author', content: siteMeta.creator.name },
      { hid: 'creator', name: 'creator', content: siteMeta.creator.name },
      { hid: 'publisher', name: 'publisher', content: siteMeta.creator.name },
      { name: 'application-name', content: siteMeta.siteName },
      { name: 'theme-color', content: siteMeta.themeColor },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:image:width', property: 'og:image:width', content: siteMeta.ogImageWidth },
      { hid: 'og:image:height', property: 'og:image:height', content: siteMeta.ogImageHeight },
      ...buildSeoMeta(),
    ],
    script: [
      {
        hid: 'ld-json-graph',
        type: 'application/ld+json',
        json: {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@id': `${siteMeta.url}#website`,
              '@type': 'WebSite',
              name: siteMeta.siteName,
              alternateName: [
                'XII RPL U Angkatan 18',
                '12 RPL U SMKN 2 Kota Bekasi',
                'RPL Unggulan SMKN 2 Kota Bekasi',
                'RPL Industri SMKN 2 Kota Bekasi',
              ],
              description: siteMeta.description,
              url: siteMeta.url,
              inLanguage: 'id-ID',
              creator: { '@id': `${siteMeta.creator.website}#identity` },
              publisher: { '@id': `${siteMeta.creator.website}#identity` },
            },
            {
              '@id': `${siteMeta.url}#school`,
              '@type': 'EducationalOrganization',
              name: siteMeta.schoolFullName,
              alternateName: [siteMeta.school, 'Butun'],
              department: {
                '@type': 'Organization',
                name: `${siteMeta.className} (${siteMeta.classAliases}) ${siteMeta.generation}`,
                description:
                  'Kelas XII Rekayasa Perangkat Lunak Unggulan / Kelas Industri Angkatan 18 periode 2021–2024.',
              },
            },
            {
              '@id': `${siteMeta.creator.website}#identity`,
              '@type': 'Person',
              name: siteMeta.creator.name,
              givenName: siteMeta.creator.givenName,
              familyName: siteMeta.creator.familyName,
              jobTitle: siteMeta.creator.role,
              description: siteMeta.creator.bio,
              url: siteMeta.creator.website,
              alumniOf: { '@id': `${siteMeta.url}#school` },
              knowsAbout: siteMeta.creator.knowsAbout,
              sameAs: [
                siteMeta.creator.website,
                siteMeta.creator.github,
                siteMeta.creator.linkedin,
                siteMeta.creator.instagram,
              ],
            },
          ],
        },
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'author', href: siteMeta.creator.website },
      { hid: 'canonical', rel: 'canonical', href: siteMeta.url },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  buildModules: [],

  modules: ['@nuxtjs/axios'],

  axios: {
    baseURL: '/',
  },

  build: {},
}
