<template>
  <transition name="lightbox-fade">
    <div
      v-if="isOpen && currentPhoto"
      class="fixed inset-0 z-[100] bg-black/92 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      :aria-label="`Pratinjau foto ${albumTitle}`"
      @click.self="$emit('close')"
    >
      <!-- Top Bar -->
      <div
        class="w-full max-w-5xl flex items-center justify-between text-white mb-4"
      >
        <div class="min-w-0">
          <p class="text-sm sm:text-base font-bold truncate">{{ albumTitle }}</p>
          <p class="text-xs text-neutral-400">
            Foto {{ currentIndex + 1 }} dari {{ photos.length }}
          </p>
        </div>

        <button
          type="button"
          class="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Tutup pratinjau foto"
          @click="$emit('close')"
        >
          <BaseIcon name="close" size-class="w-5 h-5" />
        </button>
      </div>

      <!-- Image + Navigation Arrows -->
      <div class="relative w-full max-w-5xl flex items-center justify-center">
        <button
          v-if="photos.length > 1"
          type="button"
          class="absolute left-1 sm:left-3 z-10 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-black/85 text-white border border-white/15 transition-colors"
          aria-label="Foto sebelumnya"
          @click="goPrev"
        >
          <BaseIcon name="chevronLeft" size-class="w-5 h-5" />
        </button>

        <img
          :src="currentPhoto.foto"
          :alt="`${albumTitle} — Foto ${currentIndex + 1}`"
          class="max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl select-none"
        />

        <button
          v-if="photos.length > 1"
          type="button"
          class="absolute right-1 sm:right-3 z-10 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-black/85 text-white border border-white/15 transition-colors"
          aria-label="Foto berikutnya"
          @click="goNext"
        >
          <BaseIcon name="chevronRight" size-class="w-5 h-5" />
        </button>
      </div>

      <p class="mt-4 text-xs text-neutral-400 hidden sm:block">
        Gunakan tombol panah kiri/kanan untuk navigasi, atau ESC untuk menutup
      </p>
    </div>
  </transition>
</template>

<script>
import BaseIcon from '~/components/common/BaseIcon.vue'

export default {
  name: 'PhotoLightbox',
  components: {
    BaseIcon,
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    photos: {
      type: Array,
      default: () => [],
    },
    currentIndex: {
      type: Number,
      default: 0,
    },
    albumTitle: {
      type: String,
      default: '',
    },
  },
  computed: {
    currentPhoto() {
      return this.photos[this.currentIndex] || null
    },
  },
  watch: {
    isOpen(open) {
      if (process.client) {
        document.body.style.overflow = open ? 'hidden' : ''
      }
    },
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeydown)
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.handleKeydown)
    if (process.client) {
      document.body.style.overflow = ''
    }
  },
  methods: {
    goPrev() {
      if (!this.photos.length) return
      const nextIdx = (this.currentIndex - 1 + this.photos.length) % this.photos.length
      this.$emit('change', nextIdx)
    },
    goNext() {
      if (!this.photos.length) return
      const nextIdx = (this.currentIndex + 1) % this.photos.length
      this.$emit('change', nextIdx)
    },
    handleKeydown(event) {
      if (!this.isOpen) return
      if (event.key === 'Escape') this.$emit('close')
      if (event.key === 'ArrowLeft') this.goPrev()
      if (event.key === 'ArrowRight') this.goNext()
    },
  },
}
</script>

<style scoped>
.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity 0.2s ease;
}
.lightbox-fade-enter,
.lightbox-fade-leave-to {
  opacity: 0;
}
</style>
