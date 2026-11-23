<template>
  <header
    :class="[
      'fixed top-0 inset-x-0 z-50 transition-all duration-300',
      isScrolled || !isHomePage
        ? 'bg-[#1E1E1E]/90 backdrop-blur-md border-b border-white/10 shadow-lg'
        : 'bg-gradient-to-b from-black/50 to-transparent border-b border-transparent',
    ]"
  >
    <nav
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-14 md:h-16 flex items-center justify-between"
      aria-label="Navigasi utama"
    >
      <nuxt-link
        to="/"
        class="flex items-center gap-2.5 group focus:outline-none"
      >
        <span
          class="text-base md:text-lg font-extrabold tracking-widest text-white group-hover:text-amber-300 transition-colors"
        >
          {{ siteMeta.className }}
        </span>
        <span
          class="text-[10px] md:text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/15 text-amber-200 border border-white/15"
        >
          18
        </span>
      </nuxt-link>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-7">
        <nuxt-link
          v-for="item in siteMeta.navLinks"
          :key="item.label"
          :to="item.to"
          class="text-sm font-medium text-white/80 hover:text-white transition-colors"
        >
          {{ item.label }}
        </nuxt-link>
        <nuxt-link
          to="/galery/1"
          :class="[
            'inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200',
            isGalleryPage
              ? 'bg-[#1ed760] text-[#1E1E1E] shadow-md shadow-[#1ed760]/25'
              : 'bg-white text-[#1E1E1E] hover:bg-amber-300',
          ]"
        >
          <span>Our Gallery</span>
        </nuxt-link>
      </div>

      <!-- Mobile Actions -->
      <div class="flex md:hidden items-center gap-2.5">
        <nuxt-link
          to="/galery/1"
          :class="[
            'px-3 py-1 rounded-full text-xs font-semibold transition-colors',
            isGalleryPage
              ? 'bg-[#1ed760] text-[#1E1E1E]'
              : 'bg-white text-[#1E1E1E]',
          ]"
        >
          Gallery
        </nuxt-link>
        <button
          type="button"
          class="p-2 rounded-lg text-white/90 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
          :aria-expanded="String(menuOpen)"
          aria-label="Toggle menu navigasi"
          @click="menuOpen = !menuOpen"
        >
          <BaseIcon :name="menuOpen ? 'close' : 'menu'" size-class="w-5 h-5" />
        </button>
      </div>
    </nav>

    <!-- Mobile Dropdown Menu -->
    <transition name="nav-fade">
      <div
        v-if="menuOpen"
        class="md:hidden bg-[#1E1E1E]/95 backdrop-blur-md border-b border-white/10 px-6 py-4 space-y-2"
      >
        <nuxt-link
          v-for="item in siteMeta.navLinks"
          :key="item.label"
          :to="item.to"
          class="block py-2 text-sm font-medium text-white/85 hover:text-amber-300 transition-colors"
          @click.native="menuOpen = false"
        >
          {{ item.label }}
        </nuxt-link>
        <nuxt-link
          to="/galery/1"
          class="block py-2 text-sm font-semibold text-[#1ed760]"
          @click.native="menuOpen = false"
        >
          Our Gallery (4 Albums)
        </nuxt-link>
      </div>
    </transition>
  </header>
</template>

<script>
import siteMeta from '~/data/siteMeta'
import BaseIcon from '~/components/common/BaseIcon.vue'

export default {
  name: 'AppNavbar',
  components: {
    BaseIcon,
  },
  data() {
    return {
      siteMeta,
      isScrolled: false,
      menuOpen: false,
    }
  },
  computed: {
    isHomePage() {
      return this.$route.path === '/'
    },
    isGalleryPage() {
      return this.$route.path.startsWith('/galery')
    },
  },
  watch: {
    $route() {
      this.menuOpen = false
    },
  },
  mounted() {
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 40
    },
  },
}
</script>

<style scoped>
.nav-fade-enter-active,
.nav-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.nav-fade-enter,
.nav-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
