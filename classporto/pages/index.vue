<template>
  <div class="overflow-x-hidden">
    <HomeHero />
    <YearbookShowcase />
    <MemoriesShowcase />
    <ClosingStorySection />
    <SiteFooter />
  </div>
</template>

<script>
import siteMeta, { buildSeoMeta } from '~/data/siteMeta'
import HomeHero from '~/components/home/HomeHero.vue'
import YearbookShowcase from '~/components/home/YearbookShowcase.vue'
import MemoriesShowcase from '~/components/home/MemoriesShowcase.vue'
import ClosingStorySection from '~/components/home/ClosingStorySection.vue'
import SiteFooter from '~/components/layout/SiteFooter.vue'

export default {
  name: 'IndexPage',
  components: {
    HomeHero,
    YearbookShowcase,
    MemoriesShowcase,
    ClosingStorySection,
    SiteFooter,
  },
  head() {
    return {
      title: siteMeta.title,
      link: [{ hid: 'canonical', rel: 'canonical', href: siteMeta.url }],
      meta: buildSeoMeta({
        title: siteMeta.title,
        description: siteMeta.description,
        url: siteMeta.url,
        image: siteMeta.ogImage,
        imageAlt: siteMeta.ogImageAlt,
      }),
      script: [
        {
          hid: 'ld-json-home',
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': `${siteMeta.url}#webpage`,
            url: siteMeta.url,
            name: siteMeta.title,
            description: siteMeta.description,
            inLanguage: 'id-ID',
            isPartOf: { '@id': `${siteMeta.url}#website` },
            about: { '@id': `${siteMeta.url}#school` },
            author: { '@id': `${siteMeta.creator.website}#identity` },
          },
        },
      ],
    }
  },
}
</script>
