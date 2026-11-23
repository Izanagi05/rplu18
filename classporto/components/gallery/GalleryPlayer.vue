<template>
  <div
    class="bg-white/[0.03] border border-white/10 rounded-2xl p-5 sm:p-6 shadow-2xl"
  >
    <!-- Album Cover -->
    <div
      class="relative aspect-square sm:aspect-[4/3] lg:aspect-square w-full max-w-md mx-auto rounded-xl overflow-hidden bg-neutral-800 shadow-xl group cursor-pointer"
      role="button"
      tabindex="0"
      :aria-label="`Lihat foto utama ${albumTitle}`"
      @click="$emit('open-cover')"
      @keydown.enter="$emit('open-cover')"
    >
      <img
        v-if="coverSrc"
        :src="coverSrc"
        :alt="albumTitle"
        class="w-full h-full object-cover mytransition1 group-hover:scale-[1.03]"
      />
      <div
        v-if="isPlaying"
        class="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-sm text-[11px] font-semibold text-[#1ed760]"
      >
        <span class="w-2 h-2 rounded-full bg-[#1ed760] animate-pulse"></span>
        <span>Slideshow</span>
      </div>
      <div
        class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-end justify-end p-3"
      >
        <span
          class="opacity-0 group-hover:opacity-100 transition-opacity px-2.5 py-1 rounded-md bg-black/70 text-[11px] text-white"
        >
          Perbesar
        </span>
      </div>
    </div>

    <!-- Track Title & Favorite -->
    <div class="flex items-start justify-between gap-4 mt-6 mb-5">
      <div class="min-w-0">
        <h1 class="text-xl sm:text-2xl font-bold text-white truncate">
          {{ albumTitle }}
        </h1>
        <p class="mt-1 text-sm text-neutral-300 leading-snug">
          {{ albumSubtitle }}
        </p>
      </div>
      <button
        type="button"
        class="shrink-0 p-1.5 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1ed760]"
        :class="
          isFavorite
            ? 'text-[#1ed760] hover:text-[#1ca04a]'
            : 'text-white/85 hover:text-white'
        "
        :aria-pressed="String(isFavorite)"
        :aria-label="isFavorite ? 'Hapus dari favorit' : 'Simpan ke favorit'"
        @click="$emit('toggle-favorite')"
      >
        <BaseIcon
          :name="isFavorite ? 'checkCircle' : 'plusCircle'"
          size-class="w-7 h-7"
        />
      </button>
    </div>

    <!-- Progress Bar (20.21 — 20.24) -->
    <div>
      <div class="h-1.5 rounded-full w-full bg-white/25 overflow-hidden">
        <div
          class="h-full rounded-full transition-all duration-300"
          :class="isPlaying ? 'bg-[#1ed760]' : 'bg-white'"
          :style="{ width: `${progressPercent}%` }"
        ></div>
      </div>
      <div class="mt-1.5 flex justify-between items-center text-xs text-neutral-400 font-mono">
        <span>20.21</span>
        <span>20.24</span>
      </div>
    </div>

    <!-- Media Controls -->
    <div class="mt-5 flex items-center justify-between">
      <button
        type="button"
        class="p-2 rounded-full text-[#1ed760] hover:text-[#1ca04a] hover:bg-white/5 transition-colors"
        aria-label="Acak album"
        title="Album Acak"
        @click="$emit('shuffle')"
      >
        <BaseIcon name="shuffle" size-class="w-5 h-5" />
      </button>

      <div class="flex items-center gap-6 sm:gap-8">
        <button
          type="button"
          class="p-2 rounded-full text-white hover:text-neutral-300 hover:bg-white/5 transition-colors"
          aria-label="Album sebelumnya"
          title="Album Sebelumnya"
          @click="$emit('prev')"
        >
          <BaseIcon name="prev" size-class="w-6 h-6" />
        </button>

        <button
          type="button"
          class="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white text-[#1E1E1E] hover:bg-neutral-200 hover:scale-105 active:scale-95 transition-all flex items-center justify-center shadow-lg"
          :aria-label="isPlaying ? 'Jeda slideshow' : 'Putar slideshow'"
          :title="isPlaying ? 'Jeda Slideshow' : 'Putar Slideshow'"
          @click="$emit('toggle-play')"
        >
          <BaseIcon :name="isPlaying ? 'pause' : 'play'" size-class="w-6 h-6" />
        </button>

        <button
          type="button"
          class="p-2 rounded-full text-white hover:text-neutral-300 hover:bg-white/5 transition-colors"
          aria-label="Album berikutnya"
          title="Album Berikutnya"
          @click="$emit('next')"
        >
          <BaseIcon name="next" size-class="w-6 h-6" />
        </button>
      </div>

      <button
        type="button"
        class="p-2 rounded-full text-white hover:text-neutral-300 hover:bg-white/5 transition-colors"
        aria-label="Salin tautan album"
        title="Bagikan Album"
        @click="$emit('share')"
      >
        <BaseIcon name="share" size-class="w-5 h-5" />
      </button>
    </div>

    <!-- Secondary Action Row -->
    <div class="mt-5 flex items-center justify-between text-neutral-400">
      <div class="inline-flex items-center gap-2 text-xs">
        <BaseIcon name="device" size-class="w-4 h-4 text-[#1ed760]" />
        <span>XII RPL U Player</span>
      </div>
      <span class="text-xs">{{ photoCount }} foto</span>
    </div>

    <!-- Mobile Horizontal Album Switcher -->
    <div
      v-if="allAlbums.length > 1"
      class="mt-5 pt-4 border-t border-white/10 lg:hidden"
    >
      <p class="text-[11px] uppercase tracking-widest text-neutral-400 mb-2.5">
        Pilih Album
      </p>
      <div class="flex gap-2 overflow-x-auto pb-1 custom-scrollbar">
        <button
          v-for="(item, idx) in allAlbums"
          :key="item.judul"
          type="button"
          :class="[
            'shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors',
            idx + 1 === activeAlbumId
              ? 'bg-[#1ed760] text-[#1E1E1E]'
              : 'bg-white/10 text-neutral-200 hover:bg-white/20',
          ]"
          @click="$emit('select-album', idx + 1)"
        >
          {{ item.judul }}
        </button>
      </div>
    </div>

    <!-- Desktop Vertical Playlist / Up Next -->
    <div
      v-if="allAlbums.length > 1"
      class="hidden lg:block mt-6 pt-5 border-t border-white/10"
    >
      <p class="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3">
        Daftar Album ({{ allAlbums.length }})
      </p>
      <div class="space-y-2">
        <button
          v-for="(item, idx) in allAlbums"
          :key="item.judul"
          type="button"
          :class="[
            'w-full flex items-center gap-3 p-2 rounded-xl text-left transition-colors',
            idx + 1 === activeAlbumId
              ? 'bg-white/15 text-white ring-1 ring-[#1ed760]/60'
              : 'hover:bg-white/5 text-neutral-300',
          ]"
          @click="$emit('select-album', idx + 1)"
        >
          <img
            :src="item.foto"
            :alt="item.judul"
            loading="lazy"
            class="w-11 h-11 rounded-lg object-cover shrink-0 bg-neutral-800"
          />
          <div class="min-w-0 flex-1">
            <p
              :class="[
                'text-sm font-semibold truncate',
                idx + 1 === activeAlbumId ? 'text-[#1ed760]' : 'text-white',
              ]"
            >
              {{ item.judul }}
            </p>
            <p class="text-xs text-neutral-400 truncate">
              {{ item.subjudul }}
            </p>
          </div>
          <span class="text-[11px] text-neutral-400 shrink-0 pr-1">
            {{ getAlbumPhotoCount(item) }}
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseIcon from '~/components/common/BaseIcon.vue'

export default {
  name: 'GalleryPlayer',
  components: {
    BaseIcon,
  },
  props: {
    album: {
      type: Object,
      default: null,
    },
    allAlbums: {
      type: Array,
      default: () => [],
    },
    activeAlbumId: {
      type: Number,
      default: 1,
    },
    coverSrc: {
      type: String,
      default: '',
    },
    isPlaying: {
      type: Boolean,
      default: false,
    },
    isFavorite: {
      type: Boolean,
      default: false,
    },
    progressPercent: {
      type: Number,
      default: 25,
    },
    photoCount: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    albumTitle() {
      return (this.album && this.album.judul) || 'Memuat Album...'
    },
    albumSubtitle() {
      return (this.album && this.album.subjudul) || ''
    },
  },
  methods: {
    getAlbumPhotoCount(item) {
      if (item && item.subgalery && Array.isArray(item.subgalery.sub1)) {
        return `${item.subgalery.sub1.length} foto`
      }
      return ''
    },
  },
}
</script>
