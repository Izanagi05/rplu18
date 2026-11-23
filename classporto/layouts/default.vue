<template>
  <div id="app" class="min-h-screen myblek text-white flex flex-col">
    <AppNavbar />
    <main class="flex-1">
      <nuxt />
    </main>
  </div>
</template>

<script>
import AppNavbar from '~/components/layout/AppNavbar.vue'

export default {
  name: 'DefaultLayout',
  components: {
    AppNavbar,
  },
}
</script>
