<template>
  <section
    class="rounded-2xl bg-[#3D3D3D] sm:bg-[#444444] border border-white/10 p-5 sm:p-6 lg:p-7 shadow-2xl"
    aria-label="Koleksi foto album"
  >
    <!-- Header Bar -->
    <div class="flex items-center justify-between gap-3">
      <div>
        <div class="flex items-center gap-2">
          <p class="text-base sm:text-lg font-semibold text-white/90">Lirik</p>
          <span
            class="px-2 py-0.5 rounded-full bg-black/30 text-[11px] font-medium text-neutral-200"
          >
            {{ photos.length }} foto
          </span>
        </div>
        <h2 class="mt-1 text-lg sm:text-2xl font-bold text-white">
          Putih abu kala itu
        </h2>
      </div>

      <div class="flex items-center gap-2.5 sm:gap-3 shrink-0">
        <button
          type="button"
          class="w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white hover:text-amber-300 transition-colors flex items-center justify-center"
          :aria-pressed="String(showLabels)"
          aria-label="Tampilkan atau sembunyikan nomor foto"
          title="Toggle Label Foto"
          @click="showLabels = !showLabels"
        >
          <BaseIcon name="translate" size-class="w-4 h-4" />
        </button>

        <button
          type="button"
          class="w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white hover:text-amber-300 transition-colors flex items-center justify-center"
          aria-label="Bagikan galeri"
          title="Bagikan Galeri"
          @click="$emit('share')"
        >
          <BaseIcon name="share" size-class="w-4 h-4" />
        </button>

        <button
          type="button"
          class="w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white hover:text-amber-300 transition-colors flex items-center justify-center lg:hidden"
          :aria-expanded="String(isExpanded)"
          :aria-label="isExpanded ? 'Perkecil panel foto' : 'Perluas panel foto'"
          title="Perluas Panel"
          @click="isExpanded = !isExpanded"
        >
          <BaseIcon name="expand" size-class="w-4 h-4" />
        </button>
      </div>
    </div>

    <p v-if="albumTitle" class="mt-1 text-xs sm:text-sm text-neutral-300">
      {{ albumTitle }} — Klik foto mana pun untuk melihat ukuran penuh
    </p>

    <!-- Masonry Photo Grid -->
    <div
      :class="[
        'mt-5 custom-scrollbar',
        isExpanded
          ? 'max-h-none'
          : 'max-h-[420px] sm:max-h-[540px] overflow-y-auto lg:max-h-none lg:overflow-visible pr-1 lg:pr-0',
      ]"
    >
      <div
        v-if="photos.length"
        class="columns-2 sm:columns-3 xl:columns-4 gap-3 sm:gap-3.5"
      >
        <button
          v-for="(photo, index) in photos"
          :key="photo.foto + '-' + index"
          type="button"
          class="relative block w-full mb-3 sm:mb-3.5 break-inside-avoid rounded-xl overflow-hidden bg-neutral-700 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
          :aria-label="`Buka ${albumTitle} foto ${index + 1}`"
          @click="$emit('select-photo', index)"
        >
          <img
            :src="photo.foto"
            :alt="`${albumTitle} — Foto ${index + 1}`"
            loading="lazy"
            class="w-full h-auto block object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <span
            v-if="showLabels"
            class="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-black/70 text-[10px] font-medium text-white"
          >
            #{{ index + 1 }}
          </span>
        </button>
      </div>

      <p v-else class="py-12 text-center text-sm text-neutral-300">
        Belum ada foto untuk album ini.
      </p>
    </div>
  </section>
</template>

<script>
import BaseIcon from '~/components/common/BaseIcon.vue'

export default {
  name: 'GalleryMasonry',
  components: {
    BaseIcon,
  },
  props: {
    photos: {
      type: Array,
      default: () => [],
    },
    albumTitle: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isExpanded: false,
      showLabels: false,
    }
  },
}
</script>
