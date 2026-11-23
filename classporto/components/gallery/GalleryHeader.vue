<template>
  <div class="flex items-center justify-between gap-4">
    <nuxt-link
      to="/"
      class="inline-flex items-center gap-2 text-white/90 hover:text-amber-300 transition-colors group"
      aria-label="Kembali ke beranda"
    >
      <span
        class="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors flex items-center justify-center"
      >
        <BaseIcon name="chevronLeft" size-class="w-4 h-4" />
      </span>
      <span class="hidden sm:inline text-sm font-medium">Beranda</span>
    </nuxt-link>

    <div class="text-center min-w-0">
      <p class="text-sm sm:text-base font-semibold tracking-wide truncate">
        Our Gallery
      </p>
      <p v-if="totalAlbums > 0" class="text-[11px] text-neutral-400">
        Album {{ activeAlbumId }} dari {{ totalAlbums }}
      </p>
    </div>

    <button
      type="button"
      class="p-2 rounded-full text-white/90 hover:text-white hover:bg-white/10 transition-colors"
      aria-label="Bagikan album galeri"
      @click="$emit('share')"
    >
      <BaseIcon name="dots" size-class="w-5 h-5" />
    </button>
  </div>
</template>

<script>
import BaseIcon from '~/components/common/BaseIcon.vue'

export default {
  name: 'GalleryHeader',
  components: {
    BaseIcon,
  },
  props: {
    activeAlbumId: {
      type: Number,
      default: 1,
    },
    totalAlbums: {
      type: Number,
      default: 0,
    },
  },
}
</script>
