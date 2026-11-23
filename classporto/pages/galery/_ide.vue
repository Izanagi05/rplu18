<template>
  <div class="myblek min-h-screen text-white pt-16 md:pt-20 pb-12">
    <div class="max-w-xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
      <!-- Top Header -->
      <GalleryHeader
        :active-album-id="activeAlbumId"
        :total-albums="totalAlbums"
        @share="handleShare"
      />

      <!-- Error State -->
      <div
        v-if="error"
        class="mt-8 p-6 rounded-2xl bg-red-500/10 border border-red-500/30 text-center"
      >
        <p class="text-sm text-red-200">{{ error }}</p>
        <button
          type="button"
          class="mt-4 px-4 py-2 rounded-full bg-white text-[#1E1E1E] text-xs font-bold"
          @click="loadAlbum"
        >
          Muat Ulang
        </button>
      </div>

      <!-- Loading Skeleton -->
      <div
        v-else-if="isLoading && !currentAlbum"
        class="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 animate-pulse"
      >
        <div class="lg:col-span-5 xl:col-span-4 h-[460px] rounded-2xl bg-white/5"></div>
        <div class="lg:col-span-7 xl:col-span-8 h-[460px] rounded-2xl bg-white/5"></div>
      </div>

      <!-- Main Responsive Layout: Stacked on mobile, Spotify Desktop Split View on lg+ -->
      <div
        v-else
        class="mt-6 lg:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-start"
      >
        <!-- Left Column: Sticky Spotify-Style Player & Album Playlist -->
        <div class="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-24">
          <GalleryPlayer
            :album="currentAlbum"
            :all-albums="allAlbums"
            :active-album-id="activeAlbumId"
            :cover-src="displayedCover"
            :is-playing="isPlaying"
            :is-favorite="isCurrentAlbumFavorite"
            :progress-percent="displayedProgress"
            :photo-count="subGalleryPhotos.length"
            @prev="goPrevAlbum"
            @next="goNextAlbum"
            @shuffle="goRandomAlbum"
            @toggle-play="toggleSlideshow"
            @share="handleShare"
            @toggle-favorite="toggleFavorite"
            @select-album="navigateToAlbum"
            @open-cover="openCoverInLightbox"
          />
        </div>

        <!-- Right Column: Masonry Photo Wall ("Lirik — Putih abu kala itu") -->
        <div class="lg:col-span-7 xl:col-span-8">
          <GalleryMasonry
            :photos="subGalleryPhotos"
            :album-title="currentAlbumTitle"
            @select-photo="openLightbox"
            @share="handleShare"
          />
        </div>
      </div>
    </div>

    <!-- Fullscreen Photo Lightbox -->
    <PhotoLightbox
      :is-open="lightboxOpen"
      :photos="subGalleryPhotos"
      :current-index="lightboxIndex"
      :album-title="currentAlbumTitle"
      @close="lightboxOpen = false"
      @change="lightboxIndex = $event"
    />

    <!-- Share / Action Toast -->
    <transition name="toast-fade">
      <div
        v-if="toastMessage"
        role="status"
        class="fixed bottom-6 left-1/2 -translate-x-1/2 z-[110] px-4 py-2.5 rounded-full bg-[#1ed760] text-[#1E1E1E] text-xs sm:text-sm font-bold shadow-2xl"
      >
        {{ toastMessage }}
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import siteMeta, { buildSeoMeta } from '~/data/siteMeta'
import GalleryHeader from '~/components/gallery/GalleryHeader.vue'
import GalleryPlayer from '~/components/gallery/GalleryPlayer.vue'
import GalleryMasonry from '~/components/gallery/GalleryMasonry.vue'
import PhotoLightbox from '~/components/gallery/PhotoLightbox.vue'

const FAVORITES_STORAGE_KEY = 'classporto_favorite_albums'

export default {
  name: 'GalleryDetailPage',
  components: {
    GalleryHeader,
    GalleryPlayer,
    GalleryMasonry,
    PhotoLightbox,
  },
  data() {
    return {
      isPlaying: false,
      slideshowIndex: 0,
      slideshowTimer: null,
      favoriteIds: [],
      lightboxOpen: false,
      lightboxIndex: 0,
      toastMessage: '',
      toastTimer: null,
    }
  },
  head() {
    const albumId = this.activeAlbumId || this.routeAlbumId
    const pageUrl = `${siteMeta.baseUrl}/galery/${albumId}`
    const albumTitle = this.currentAlbumTitle || 'Our Gallery'
    const albumSub =
      (this.currentAlbum && this.currentAlbum.subjudul) ||
      'Koleksi kenangan kelas XII RPL U (RPL Unggulan / Industri) Angkatan 18 SMKN 2 Kota Bekasi.'
    const photoCount = this.subGalleryPhotos.length
    const title = `${albumTitle} — Galeri XII RPL U Angkatan 18 | SMKN 2 Kota Bekasi`
    const description = `${albumTitle}: ${albumSub} (${photoCount} foto kenangan kelas 12 RPL U / RPL Unggulan / RPL Industri SMKN 2 Kota Bekasi 2021–2024).`
    const coverPath = this.currentAlbum && this.currentAlbum.foto
    const ogImage = coverPath
      ? `${siteMeta.baseUrl}${coverPath}`
      : siteMeta.ogImage

    return {
      title,
      link: [{ hid: 'canonical', rel: 'canonical', href: pageUrl }],
      meta: buildSeoMeta({
        title,
        description,
        url: pageUrl,
        image: ogImage,
        imageAlt: `${albumTitle} — ${siteMeta.className} ${siteMeta.school}`,
      }),
      script: [
        {
          hid: 'ld-json-gallery',
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'ImageGallery',
                '@id': `${pageUrl}#gallery`,
                name: title,
                description,
                url: pageUrl,
                inLanguage: 'id-ID',
                image: ogImage,
                numberOfItems: photoCount,
                isPartOf: { '@id': `${siteMeta.url}#website` },
                author: { '@id': `${siteMeta.creator.website}#identity` },
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Beranda',
                    item: siteMeta.url,
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Our Gallery',
                    item: `${siteMeta.baseUrl}/galery/1`,
                  },
                  {
                    '@type': 'ListItem',
                    position: 3,
                    name: albumTitle,
                    item: pageUrl,
                  },
                ],
              },
            ],
          },
        },
      ],
    }
  },
  computed: {
    ...mapGetters({
      activeAlbumId: 'mystore/getPathmaks',
      allAlbums: 'mystore/getAllAlbums',
      totalAlbums: 'mystore/getTotalAlbums',
      currentAlbum: 'mystore/getGaleryData',
      subGalleryPhotos: 'mystore/getSubGalleryPhotos',
      isLoading: 'mystore/isLoading',
      error: 'mystore/getError',
    }),
    routeAlbumId() {
      const parsed = parseInt(this.$route.params.ide, 10)
      return Number.isNaN(parsed) || parsed < 1 ? 1 : parsed
    },
    currentAlbumTitle() {
      return (this.currentAlbum && this.currentAlbum.judul) || ''
    },
    displayedCover() {
      if (this.isPlaying && this.subGalleryPhotos.length > 0) {
        const activePhoto = this.subGalleryPhotos[this.slideshowIndex]
        if (activePhoto && activePhoto.foto) return activePhoto.foto
      }
      return (this.currentAlbum && this.currentAlbum.foto) || ''
    },
    displayedProgress() {
      if (this.isPlaying && this.subGalleryPhotos.length > 0) {
        return Math.round(((this.slideshowIndex + 1) / this.subGalleryPhotos.length) * 100)
      }
      if (!this.totalAlbums) return 25
      return Math.round((this.activeAlbumId / this.totalAlbums) * 100)
    },
    isCurrentAlbumFavorite() {
      return this.favoriteIds.includes(this.activeAlbumId)
    },
  },
  watch: {
    '$route.params.ide'(newId) {
      this.stopSlideshow()
      this.lightboxOpen = false
      const parsed = parseInt(newId, 10)
      this.setActiveAlbum(Number.isNaN(parsed) ? 1 : parsed)
    },
  },
  async fetch() {
    await this.loadAlbum()
  },
  mounted() {
    this.restoreFavorites()
  },
  beforeDestroy() {
    this.stopSlideshow()
    if (this.toastTimer) clearTimeout(this.toastTimer)
  },
  methods: {
    ...mapActions({
      fetchGallery: 'mystore/fetchGallery',
      setActiveAlbum: 'mystore/setActiveAlbum',
    }),
    async loadAlbum() {
      await this.fetchGallery(this.routeAlbumId)
    },
    navigateToAlbum(targetId) {
      if (!this.totalAlbums) return
      const bounded = Math.min(Math.max(targetId, 1), this.totalAlbums)
      if (bounded === this.routeAlbumId) {
        this.setActiveAlbum(bounded)
        return
      }
      this.$router.push(`/galery/${bounded}`)
    },
    goNextAlbum() {
      if (!this.totalAlbums) return
      const nextId = this.activeAlbumId >= this.totalAlbums ? 1 : this.activeAlbumId + 1
      this.navigateToAlbum(nextId)
    },
    goPrevAlbum() {
      if (!this.totalAlbums) return
      const prevId = this.activeAlbumId <= 1 ? this.totalAlbums : this.activeAlbumId - 1
      this.navigateToAlbum(prevId)
    },
    goRandomAlbum() {
      if (this.totalAlbums <= 1) return
      let randomId = this.activeAlbumId
      while (randomId === this.activeAlbumId) {
        randomId = Math.floor(Math.random() * this.totalAlbums) + 1
      }
      this.navigateToAlbum(randomId)
    },
    toggleSlideshow() {
      if (this.isPlaying) {
        this.stopSlideshow()
      } else {
        this.startSlideshow()
      }
    },
    startSlideshow() {
      if (!this.subGalleryPhotos.length) return
      this.isPlaying = true
      this.slideshowIndex = 0
      this.slideshowTimer = setInterval(() => {
        this.slideshowIndex = (this.slideshowIndex + 1) % this.subGalleryPhotos.length
      }, 2800)
    },
    stopSlideshow() {
      this.isPlaying = false
      if (this.slideshowTimer) {
        clearInterval(this.slideshowTimer)
        this.slideshowTimer = null
      }
    },
    openLightbox(index) {
      this.lightboxIndex = index
      this.lightboxOpen = true
    },
    openCoverInLightbox() {
      if (!this.subGalleryPhotos.length) return
      if (this.isPlaying) {
        this.openLightbox(this.slideshowIndex)
        return
      }
      const coverIdx = this.subGalleryPhotos.findIndex(
        (photo) => photo.foto === this.displayedCover
      )
      this.openLightbox(coverIdx >= 0 ? coverIdx : 0)
    },
    toggleFavorite() {
      const id = this.activeAlbumId
      if (this.favoriteIds.includes(id)) {
        this.favoriteIds = this.favoriteIds.filter((item) => item !== id)
        this.showToast('Dihapus dari album favorit')
      } else {
        this.favoriteIds = [...this.favoriteIds, id]
        this.showToast('Disimpan ke album favorit')
      }
      if (process.client) {
        try {
          window.localStorage.setItem(
            FAVORITES_STORAGE_KEY,
            JSON.stringify(this.favoriteIds)
          )
        } catch (err) {
          // Ignore storage quota / privacy mode errors
        }
      }
    },
    restoreFavorites() {
      if (!process.client) return
      try {
        const saved = window.localStorage.getItem(FAVORITES_STORAGE_KEY)
        if (saved) {
          const parsed = JSON.parse(saved)
          if (Array.isArray(parsed)) this.favoriteIds = parsed
        }
      } catch (err) {
        // Ignore malformed localStorage data
      }
    },
    async handleShare() {
      if (!process.client) return
      const url = window.location.href
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(url)
        }
        this.showToast('Link galeri berhasil disalin!')
      } catch (err) {
        this.showToast('Salin URL dari address bar untuk berbagi')
      }
    },
    showToast(message) {
      this.toastMessage = message
      if (this.toastTimer) clearTimeout(this.toastTimer)
      this.toastTimer = setTimeout(() => {
        this.toastMessage = ''
      }, 2400)
    },
  },
}
</script>

<style scoped>
.toast-fade-enter-active,
.toast-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.toast-fade-enter,
.toast-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, 10px);
}
</style>
