<template>
  <section id="closing" class="text-white myblek">
    <!-- Top Torn Paper Edge -->
    <div class="torn-edge torn-edge--top h-10 sm:h-14 md:h-20" aria-hidden="true"></div>

    <div class="max-w-5xl mx-auto px-6 py-8 sm:py-12 md:py-16">
      <!-- Editorial Meta Bar -->
      <div class="flex items-center justify-between pb-6 border-b border-white/10">
        <p class="text-sm sm:text-base md:text-lg font-medium tracking-wide text-neutral-200">
          {{ content.headerLeft }}
        </p>
        <div class="text-center px-3 py-1 rounded-lg bg-white/5 border border-white/10">
          <p class="text-xl sm:text-2xl font-bold leading-none">{{ content.dateDay }}</p>
          <p class="text-xs sm:text-sm font-light text-neutral-300 mt-0.5">{{ content.dateMonth }}</p>
        </div>
      </div>

      <!-- Credits Strip -->
      <div class="mt-6 flex items-center justify-between text-xs sm:text-sm text-neutral-300">
        <p class="text-left leading-tight">
          {{ content.credits.leftTop }}<br />
          <span class="font-semibold text-white">{{ content.credits.leftBottom }}</span>
        </p>
        <p class="text-center uppercase tracking-[0.2em] text-[11px] sm:text-xs text-amber-300 font-semibold">
          {{ content.credits.center }}
        </p>
        <p class="text-right leading-tight">
          {{ content.credits.rightTop }}<br />
          <span class="font-semibold text-white">{{ content.credits.rightBottom }}</span>
        </p>
      </div>

      <!-- Main Closing Headline -->
      <div class="text-center my-8 sm:my-12 md:my-14">
        <p class="text-sm sm:text-lg md:text-xl font-light tracking-[0.25em] text-neutral-300">
          {{ content.generation }}
        </p>
        <h2 class="mt-2 font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight">
          {{ content.headline }}
        </h2>
        <p class="mt-3 text-xs sm:text-sm md:text-base font-light tracking-[0.18em] text-neutral-300">
          {{ content.subheadline }}
        </p>
      </div>

      <!-- Story Row 1 + Polaroid -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center mt-8">
        <div class="md:col-span-6">
          <p class="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-neutral-200">
            {{ content.firstStory.text }}
          </p>
        </div>
        <div class="md:col-span-6">
          <PolaroidCard
            :src="content.firstStory.image"
            :alt="content.firstStory.alt"
            :caption="content.firstStory.caption"
            size="md"
            tilt-class="md:rotate-1"
          />
        </div>
      </div>

      <!-- Featured Wide Polaroid + Vertical Memories Typography -->
      <div class="grid grid-cols-12 gap-3 sm:gap-6 items-center mt-10 md:mt-14">
        <div class="col-span-10 md:col-span-10">
          <PolaroidCard
            :src="content.featuredPolaroid.image"
            :alt="content.featuredPolaroid.alt"
            :caption="content.featuredPolaroid.caption"
            size="lg"
          />
        </div>
        <div class="col-span-2 flex items-center justify-center">
          <div class="vertical-memories text-center select-none">
            <p class="text-2xl sm:text-4xl md:text-5xl font-bold tracking-wider text-white">
              {{ content.memoriesTitle }}
            </p>
            <p class="text-[10px] sm:text-xs md:text-sm tracking-[0.25em] uppercase text-neutral-400 mt-1">
              {{ content.memoriesSubtitle }}
            </p>
          </div>
        </div>
      </div>

      <!-- Story Row 2 + Polaroid (alternating order on desktop) -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center mt-10 md:mt-14">
        <div class="md:col-span-7 md:order-2">
          <p class="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-neutral-200">
            {{ content.secondStory.text }}
          </p>
        </div>
        <div class="md:col-span-5 md:order-1">
          <PolaroidCard
            :src="content.secondStory.image"
            :alt="content.secondStory.alt"
            :caption="content.secondStory.caption"
            size="sm"
            tilt-class="md:-rotate-2"
          />
        </div>
      </div>
    </div>

    <!-- Bottom Torn Paper Edge -->
    <div class="torn-edge torn-edge--bottom h-14 sm:h-20 md:h-28" aria-hidden="true"></div>
  </section>
</template>

<script>
import { closingContent } from '~/data/homeContent'
import PolaroidCard from '~/components/common/PolaroidCard.vue'

export default {
  name: 'ClosingStorySection',
  components: {
    PolaroidCard,
  },
  data() {
    return {
      content: closingContent,
    }
  },
}
</script>

<style scoped>
.torn-edge--top {
  background-image: url('~/assets/img/assetcomp/end3.png');
}

.torn-edge--bottom {
  background-image: url('~/assets/img/assetcomp/end2.png');
}

.vertical-memories {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
}
</style>
