<template>
  <footer class="myblek border-t border-white/10 text-white">
    <div class="max-w-5xl mx-auto px-6 py-10 md:py-14">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <!-- Brand Column -->
        <div class="sm:col-span-2 space-y-3">
          <div class="flex items-center gap-2.5">
            <span class="text-xl font-extrabold tracking-widest">
              {{ siteMeta.className }}
            </span>
            <span
              class="text-xs font-semibold uppercase px-2.5 py-0.5 rounded-full bg-white/10 text-amber-200"
            >
              {{ siteMeta.generation }}
            </span>
          </div>
          <p class="text-sm text-neutral-400 max-w-sm leading-relaxed">
            Digital Yearbook &amp; Class Portfolio {{ siteMeta.className }}
            ({{ siteMeta.classAliases }}) — {{ siteMeta.school }}
            ({{ siteMeta.period.years }}).
          </p>
          <nuxt-link
            to="/galery/1"
            class="inline-flex items-center gap-1.5 text-sm font-medium text-amber-300 hover:text-amber-200 transition-colors"
          >
            <span>Lihat Galeri Kenangan</span>
            <span aria-hidden="true">&rarr;</span>
          </nuxt-link>
        </div>

        <!-- Data-driven Link Groups -->
        <div v-for="group in siteMeta.footerLinks" :key="group.heading">
          <h2 class="mb-4 text-xs font-semibold uppercase tracking-widest text-white/90">
            {{ group.heading }}
          </h2>
          <ul class="space-y-2.5 text-sm text-neutral-400 font-medium">
            <li v-for="link in group.items" :key="link.label">
              <a
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-white hover:underline transition-colors"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-500"
      >
        <p>&copy; {{ siteMeta.period.years }} {{ siteMeta.className }} {{ siteMeta.generation }}. All memories preserved.</p>
        <p>Built with Nuxt &amp; Tailwind CSS</p>
      </div>
    </div>
  </footer>
</template>

<script>
import siteMeta from '~/data/siteMeta'

export default {
  name: 'SiteFooter',
  data() {
    return {
      siteMeta,
    }
  },
}
</script>
