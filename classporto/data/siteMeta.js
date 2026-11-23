const siteUrl = 'https://rplu18.vercel.app'

const siteMeta = {
  siteName: 'Classporto — XII RPL U Angkatan 18',
  title: 'XII RPL U Angkatan 18 | RPL Unggulan & Industri — SMKN 2 Kota Bekasi',
  shortTitle: 'RPL U 18',
  className: 'XII RPL U',
  classAliases: '12 RPL U / RPL Unggulan / RPL Industri',
  generation: 'Angkatan 18',
  period: {
    start: '20.21',
    end: '20.24',
    years: '2021 – 2024',
  },
  school: 'SMKN 2 Kota Bekasi',
  schoolFullName: 'SMK Negeri 2 Kota Bekasi',
  description:
    'Buku tahunan digital (digital yearbook) dan galeri kenangan kelas XII RPL U (12 RPL U / RPL Unggulan / RPL Industri) Angkatan 18 SMKN 2 Kota Bekasi (2021–2024). Dibuat oleh Izanagi Faris Aslam.',
  url: `${siteUrl}/`,
  baseUrl: siteUrl,
  themeColor: '#1E1E1E',
  locale: 'id_ID',
  ogImage: `${siteUrl}/og-image.jpg`,
  ogImageWidth: '872',
  ogImageHeight: '581',
  ogImageAlt: 'Foto kelas XII RPL U (RPL Unggulan / Industri) Angkatan 18 SMKN 2 Kota Bekasi',
  keywords: [
    'XII RPL U',
    '12 RPL U',
    'RPL Unggulan',
    'RPL Industri',
    'RPL U Angkatan 18',
    'Rekayasa Perangkat Lunak Unggulan',
    'Rekayasa Perangkat Lunak Industri',
    'SMKN 2 Kota Bekasi',
    'SMK Negeri 2 Kota Bekasi',
    'Butun',
    'Alumni SMKN 2 Kota Bekasi',
    'Yearbook XII RPL U',
    'Buku Tahunan Digital SMKN 2 Bekasi',
    'Class Portfolio',
    'Izanagi Faris Aslam',
  ].join(', '),
  creator: {
    name: 'Izanagi Faris Aslam',
    givenName: 'Izanagi',
    familyName: 'Faris Aslam',
    handle: '@zaa.frsslm',
    role: 'Full Stack Developer & Software Engineer',
    bio: 'Software Engineering student focused on backend and full stack development with Laravel, Nuxt JS, and PostgreSQL.',
    website: 'https://www.izanagifaris.my.id/',
    websiteLabel: 'izanagifaris.my.id',
    github: 'https://github.com/Izanagi05',
    instagram: 'https://www.instagram.com/zaa.frsslm',
    linkedin: 'https://www.linkedin.com/in/izanagi-faris-aslam-2b81842a2',
    knowsAbout: [
      'Laravel',
      'Nuxt JS',
      'PostgreSQL',
      'REST API',
      'Backend Development',
      'Full Stack Development',
    ],
  },
  navLinks: [
    { label: 'Home', to: '/#hero' },
    { label: 'Yearbook', to: '/#yearbook' },
    { label: 'Memories', to: '/#memories' },
    { label: 'The End', to: '/#closing' },
  ],
  footerLinks: [
    {
      heading: 'Created By',
      items: [
        { label: 'Izanagi Faris Aslam', href: 'https://www.izanagifaris.my.id/' },
        { label: 'izanagifaris.my.id', href: 'https://www.izanagifaris.my.id/' },
      ],
    },
    {
      heading: 'Follow Us',
      items: [
        { label: 'Portfolio', href: 'https://www.izanagifaris.my.id/' },
        { label: 'GitHub', href: 'https://github.com/Izanagi05' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/izanagi-faris-aslam-2b81842a2' },
        { label: 'Instagram (@zaa.frsslm)', href: 'https://www.instagram.com/zaa.frsslm' },
      ],
    },
  ],
}

/**
 * Helper to generate consistent OpenGraph + Twitter meta tags without duplication.
 */
function buildSeoMeta({
  title = siteMeta.title,
  description = siteMeta.description,
  url = siteMeta.url,
  image = siteMeta.ogImage,
  imageAlt = siteMeta.ogImageAlt,
  type = 'website',
} = {}) {
  return [
    { hid: 'description', name: 'description', content: description },
    // Open Graph
    { hid: 'og:type', property: 'og:type', content: type },
    { hid: 'og:locale', property: 'og:locale', content: siteMeta.locale },
    { hid: 'og:site_name', property: 'og:site_name', content: siteMeta.siteName },
    { hid: 'og:url', property: 'og:url', content: url },
    { hid: 'og:title', property: 'og:title', content: title },
    { hid: 'og:description', property: 'og:description', content: description },
    { hid: 'og:image', property: 'og:image', content: image },
    { hid: 'og:image:alt', property: 'og:image:alt', content: imageAlt },
    { hid: 'og:image:type', property: 'og:image:type', content: 'image/jpeg' },
    // Twitter Card
    { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
    { hid: 'twitter:url', name: 'twitter:url', content: url },
    { hid: 'twitter:title', name: 'twitter:title', content: title },
    { hid: 'twitter:description', name: 'twitter:description', content: description },
    { hid: 'twitter:image', name: 'twitter:image', content: image },
    { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: imageAlt },
  ]
}

module.exports = siteMeta
module.exports.buildSeoMeta = buildSeoMeta
