<template>
  <section id="memories" class="myblek relative text-white py-12 sm:py-16 md:py-24">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Row 1: SEE YOU Farewell + Interactive Photo Quad -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <!-- Left: Vertical SEE YOU badge + Farewell Message -->
        <div class="lg:col-span-6 grid grid-cols-12 gap-4 sm:gap-6 items-start">
          <div class="col-span-3 sm:col-span-2">
            <div
              class="bg-white text-black font-bold text-2xl sm:text-3xl md:text-4xl leading-snug py-3 sm:py-4 text-center rounded-sm shadow-lg select-none"
            >
              <span
                v-for="(letter, idx) in content.verticalTitle"
                :key="idx"
                class="block"
              >
                {{ letter }}
              </span>
            </div>
          </div>

          <div class="col-span-9 sm:col-span-10 space-y-5">
            <p
              class="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-neutral-200"
            >
              {{ content.farewellText }}
            </p>
            <div class="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
              <span>XII RPL U • Angkatan 18</span>
              <nuxt-link
                to="/galery/1"
                class="text-amber-300 hover:text-amber-200 font-semibold transition-colors"
              >
                Lihat Album &rarr;
              </nuxt-link>
            </div>
          </div>
        </div>

        <!-- Right: Interactive 2x2 Circular Photo Quad -->
        <div class="lg:col-span-6 flex justify-center lg:justify-end">
          <InteractivePhotoQuad :photos="content.quadPhotos" />
        </div>
      </div>

      <!-- Row 2: Interactive 3x3 Expandable Collage -->
      <div class="mt-14 md:mt-20 flex flex-col items-center">
        <ExpandablePhotoGrid :photos="content.expandablePhotos" />
      </div>

      <!-- Row 3: Layered Stroke Typography -->
      <div class="mt-10 md:mt-14">
        <StrokeHeading :text="content.strokeHeading" />
      </div>

      <!-- Row 4: Responsive Photo Marquee -->
      <div class="mt-4 md:mt-6">
        <PhotoMarquee :photos="content.marqueePhotos" />
      </div>
    </div>
  </section>
</template>

<script>
import { memoriesContent } from '~/data/homeContent'
import StrokeHeading from '~/components/common/StrokeHeading.vue'
import InteractivePhotoQuad from '~/components/home/InteractivePhotoQuad.vue'
import ExpandablePhotoGrid from '~/components/home/ExpandablePhotoGrid.vue'
import PhotoMarquee from '~/components/home/PhotoMarquee.vue'

export default {
  name: 'MemoriesShowcase',
  components: {
    StrokeHeading,
    InteractivePhotoQuad,
    ExpandablePhotoGrid,
    PhotoMarquee,
  },
  data() {
    return {
      content: memoriesContent,
    }
  },
}
</script>
