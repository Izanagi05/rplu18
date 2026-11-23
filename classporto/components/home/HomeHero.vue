<template>
  <section id="hero" class="home-hero relative w-full min-h-screen flex items-center justify-center">
    <div class="relative z-10 max-w-5xl mx-auto px-6 text-center pt-16 pb-12 flex flex-col items-center">
      <p
        class="text-sm sm:text-base md:text-xl text-white/95 font-semibold tracking-wide mb-2 md:mb-3"
      >
        {{ content.greeting }}
      </p>

      <!-- Desktop headline -->
      <h1
        class="hidden md:block text-6xl lg:text-8xl text-white font-extrabold glow tracking-tight leading-none"
      >
        {{ content.headline }}
      </h1>

      <!-- Mobile headline -->
      <h1
        class="md:hidden text-5xl sm:text-6xl text-white font-extrabold glow tracking-tight leading-none"
      >
        {{ content.classLabel }}
      </h1>

      <p
        class="hidden md:block mt-4 text-sm lg:text-base text-white font-semibold uppercase tracking-[0.35em]"
      >
        {{ content.classLabel }}
      </p>

      <p
        class="mt-4 md:mt-5 text-xs sm:text-sm md:text-base text-white/90 font-medium max-w-xl"
      >
        {{ content.subtitle }}
      </p>

      <div class="mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        <nuxt-link
          :to="content.ctaPrimary.to"
          class="px-6 py-3 rounded-full bg-white text-[#1E1E1E] font-bold text-sm md:text-base shadow-xl hover:bg-amber-200 hover:scale-105 transition-all duration-200"
        >
          {{ content.ctaPrimary.label }}
        </nuxt-link>
        <a
          :href="content.ctaSecondary.href"
          class="px-6 py-3 rounded-full bg-black/35 backdrop-blur-sm border border-white/40 text-white font-semibold text-sm md:text-base hover:bg-black/55 transition-all duration-200"
        >
          {{ content.ctaSecondary.label }}
        </a>
      </div>
    </div>

    <!-- Subtle scroll cue -->
    <a
      href="#yearbook"
      aria-label="Gulir ke bagian Yearbook"
      class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/75 hover:text-white transition-colors"
    >
      <span class="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
      <span class="w-5 h-8 rounded-full border border-white/50 flex justify-center pt-1.5">
        <span class="w-1 h-2 rounded-full bg-white animate-bounce"></span>
      </span>
    </a>
  </section>
</template>

<script>
import { heroContent } from '~/data/homeContent'

export default {
  name: 'HomeHero',
  data() {
    return {
      content: heroContent,
    }
  },
}
</script>

<style scoped>
.home-hero {
  background-image: radial-gradient(
      circle,
      rgba(238, 207, 114, 0.82) 0%,
      rgba(246, 166, 62, 0.88) 100%
    ),
    url('~/assets/img/bgawal.jpg');
  background-size: cover;
  background-position: center 22%;
  background-repeat: no-repeat;
  z-index: 10;
}

.home-hero::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 48%;
  background: linear-gradient(
    to top,
    rgba(30, 30, 30, 1) 12%,
    rgba(30, 30, 30, 0.55) 48%,
    rgba(30, 30, 30, 0) 100%
  );
  z-index: 1;
  pointer-events: none;
}
</style>
