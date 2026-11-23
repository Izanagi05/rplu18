<template>
  <section
    id="yearbook"
    class="myblek relative text-white overflow-hidden py-16 sm:py-20 md:py-28"
  >
    <!-- Decorative Vertical Filmstrip -->
    <img
      :src="content.filmStripSrc"
      alt=""
      aria-hidden="true"
      loading="lazy"
      class="pointer-events-none select-none absolute -right-16 sm:-right-12 lg:-right-6 top-6 w-36 sm:w-44 md:w-52 lg:w-60 -rotate-3 opacity-25 sm:opacity-35 lg:opacity-45"
    />

    <!-- Decorative Scrapbook Stickers -->
    <img
      v-for="sticker in content.stickers"
      :key="sticker.id"
      :src="sticker.src"
      alt=""
      aria-hidden="true"
      loading="lazy"
      :class="['pointer-events-none select-none absolute z-10', sticker.positionClass]"
    />

    <div class="relative z-20 max-w-6xl mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-10 md:mb-14">
        <p class="text-xs sm:text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">
          {{ content.eyebrow }}
        </p>
        <h2 class="mt-2 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
          {{ content.title }}
        </h2>
        <p class="mt-2.5 text-xs sm:text-sm text-neutral-400">
          {{ content.hint }}
        </p>
      </div>

      <!-- Responsive 3D Cards Grid: stacked on mobile, 3-column showcase on md+ -->
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12 items-center"
      >
        <YearbookCard3D
          v-for="card in content.cards"
          :key="card.id"
          :cover-src="card.coverSrc"
          :character-src="card.characterSrc"
          :label="card.label"
          :alt="card.alt"
          :tilt-class="card.tiltClass"
        />
      </div>

      <!-- Interactive Cassette CTA to Gallery -->
      <div class="mt-14 md:mt-20 flex flex-col items-center">
        <div class="relative flex items-center justify-center">
          <img
            :src="content.cta.arrowSrc"
            alt=""
            aria-hidden="true"
            class="hidden sm:block w-16 md:w-20 -mr-3 -mt-12 mix-blend-screen opacity-80 pointer-events-none select-none"
          />

          <nuxt-link
            :to="content.cta.to"
            class="group flex items-center gap-4 px-5 py-3.5 sm:px-7 sm:py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/20 hover:border-amber-300/70 shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <img
              :src="content.cta.cassetteSrc"
              alt="Buka Galeri Kelas"
              class="w-14 sm:w-16 h-auto mix-blend-screen rotate-6 group-hover:rotate-0 transition-transform duration-300"
            />
            <div class="text-left">
              <span
                class="block text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors"
              >
                {{ content.cta.label }} &rarr;
              </span>
              <span class="block text-xs text-neutral-400">
                {{ content.cta.sublabel }}
              </span>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { yearbookContent } from '~/data/homeContent'
import YearbookCard3D from '~/components/home/YearbookCard3D.vue'

export default {
  name: 'YearbookShowcase',
  components: {
    YearbookCard3D,
  },
  data() {
    return {
      content: yearbookContent,
    }
  },
}
</script>
