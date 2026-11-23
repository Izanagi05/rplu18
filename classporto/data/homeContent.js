import bgAwal from '~/assets/img/bgawal.jpg'
import filmStrip from '~/assets/img/ybk/pjg2.png'
import cardP1 from '~/assets/img/ybk/p1.png'
import cardP1Char from '~/assets/img/ybk/p1nobg.png'
import cardP2 from '~/assets/img/ybk/p2.png'
import cardP2Char from '~/assets/img/ybk/p2nobg.png'
import cardP3 from '~/assets/img/ybk/p3.png'
import cardP3Char from '~/assets/img/ybk/p3nobg.png'
import iconClapper from '~/assets/img/ybk/iconybk/1.png'
import iconCursor from '~/assets/img/ybk/iconybk/2.png'
import iconPlane from '~/assets/img/ybk/iconybk/3.png'
import iconReel from '~/assets/img/ybk/iconybk/4.png'
import iconCassette from '~/assets/img/ybk/iconybk/5.png'
import iconSpark from '~/assets/img/ybk/iconybk/6.png'
import iconArrow from '~/assets/img/ybk/iconybk/7.png'
import iconCamera from '~/assets/img/ybk/iconybk/8.png'

/**
 * Helper to generate repeated placeholder image items cleanly.
 * Replace individual entries with specific photo imports or `/datajson/galery/img/...` paths anytime.
 */
function createPhotoList(count, defaultSrc, prefix) {
  return Array.from({ length: count }, (_, index) => ({
    id: `${prefix}-${index + 1}`,
    src: defaultSrc,
    alt: `XII RPL U Angkatan 18 — ${prefix} ${index + 1}`,
  }))
}

export const heroContent = {
  greeting: 'Hi, Visitor!',
  headline: 'WELCOME',
  classLabel: 'XII RPL U',
  subtitle: 'RPL Unggulan / Industri • Angkatan 18 • SMKN 2 Kota Bekasi • 2021 – 2024',
  ctaPrimary: {
    label: 'Explore Gallery',
    to: '/galery/1',
  },
  ctaSecondary: {
    label: 'Read Our Story',
    href: '#yearbook',
  },
}

export const yearbookContent = {
  eyebrow: 'Yearbook Archive',
  title: 'Moments Captured in 3D',
  hint: 'Hover atau ketuk foto untuk efek 3D pop-out',
  filmStripSrc: filmStrip,
  cta: {
    to: '/galery/1',
    cassetteSrc: iconCassette,
    arrowSrc: iconArrow,
    label: 'Open Class Gallery',
    sublabel: '4 Albums • 66 Memories',
  },
  cards: [
    {
      id: 'boys',
      label: 'The Boys of RPL U',
      coverSrc: cardP1,
      characterSrc: cardP1Char,
      alt: 'Foto kelompok siswa putra XII RPL U',
      tiltClass: '-rotate-2 md:-rotate-3',
    },
    {
      id: 'girls',
      label: 'The Girls of RPL U',
      coverSrc: cardP2,
      characterSrc: cardP2Char,
      alt: 'Foto kelompok siswi putri XII RPL U',
      tiltClass: 'rotate-2 md:rotate-1',
    },
    {
      id: 'all',
      label: 'XII RPL U Family',
      coverSrc: cardP3,
      characterSrc: cardP3Char,
      alt: 'Foto seluruh kelas XII RPL U Angkatan 18',
      tiltClass: '-rotate-1 md:rotate-3',
    },
  ],
  stickers: [
    {
      id: 'clapper',
      src: iconClapper,
      alt: 'Clapperboard dekorasi',
      positionClass: 'top-6 left-4 md:top-10 md:left-8 w-14 md:w-20 -rotate-12 opacity-90',
    },
    {
      id: 'camera',
      src: iconCamera,
      alt: 'Kamera retro dekorasi',
      positionClass: 'top-12 right-6 md:top-14 md:right-14 w-16 md:w-24 rotate-12 opacity-95',
    },
    {
      id: 'plane',
      src: iconPlane,
      alt: 'Pesawat kertas dekorasi',
      positionClass: 'top-1/2 left-2 md:left-6 w-12 md:w-16 -scale-x-100 opacity-75 hidden sm:block',
    },
    {
      id: 'reel',
      src: iconReel,
      alt: 'Gulungan film dekorasi',
      positionClass: 'bottom-28 left-4 md:bottom-16 md:left-12 w-12 md:w-16 invert opacity-60',
    },
    {
      id: 'cursor',
      src: iconCursor,
      alt: 'Kursor piksel dekorasi',
      positionClass: 'bottom-32 right-6 md:bottom-20 md:right-16 w-10 md:w-14 invert opacity-50 hidden md:block',
    },
    {
      id: 'spark',
      src: iconSpark,
      alt: 'Aksen dekorasi',
      positionClass: 'bottom-10 right-1/4 w-10 opacity-40 hidden lg:block',
    },
  ],
}

export const memoriesContent = {
  verticalTitle: ['S', 'E', 'E', 'Y', 'O', 'U'],
  farewellText:
    'Time has flown by so quickly, and now we must say goodbye. Every laugh, joke, and struggle we’ve shared will forever remain in my memory. Thank you for being such an important part of my life. May we always have the chance to meet again in the future.',
  strokeHeading: 'Excellence Class',
  quadPhotos: createPhotoList(4, bgAwal, 'Quad Memory'),
  expandablePhotos: createPhotoList(9, bgAwal, 'Collage Memory'),
  marqueePhotos: createPhotoList(5, bgAwal, 'Highlight'),
}

export const closingContent = {
  headerLeft: 'Great Story',
  dateDay: '18',
  dateMonth: 'Maret',
  credits: {
    leftTop: 'Made with',
    leftBottom: 'Nuxt',
    center: 'Daily Activity',
    rightTop: 'Made with',
    rightBottom: 'Tailwind',
  },
  generation: 'ANGKATAN 18',
  headline: '#THE END',
  subheadline: 'GOOD BYE AND SEE YOU LATER XII RPL U',
  memoriesTitle: 'Memories',
  memoriesSubtitle: 'Our Memories',
  firstStory: {
    text: 'It’s hard to believe we’ve reached this point, where we have to say goodbye and start a new chapter in our lives. Thanks for all the fun and unforgettable moments. Keep in touch! Wishing you all the best success.',
    image: bgAwal,
    caption: 'Chapter 2021 – 2024',
    alt: 'Kenangan perpisahan XII RPL U',
  },
  featuredPolaroid: {
    image: bgAwal,
    caption: 'XII RPL U — Together Forever',
    alt: 'Foto utama kelas XII RPL U',
  },
  secondStory: {
    text: 'Saying goodbye is never easy, but it’s the start of new beginnings. Let’s embrace the future with open hearts and minds. Best of luck to everyone on their new paths. We’ll meet again someday, stronger and wiser.',
    image: bgAwal,
    caption: 'See You On Top',
    alt: 'Foto kebersamaan XII RPL U',
  },
}
