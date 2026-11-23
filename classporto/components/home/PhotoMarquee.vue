<template>
  <div class="marquee-shell w-full max-w-md sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto overflow-hidden py-4">
    <div class="marquee-track flex gap-4 sm:gap-5">
      <div
        v-for="photo in loopedPhotos"
        :key="photo.loopKey"
        class="shrink-0 w-52 sm:w-64 md:w-72 lg:w-80 aspect-[3/2] rounded-xl overflow-hidden bg-neutral-800 shadow-lg"
      >
        <img
          :src="photo.src"
          :alt="photo.alt"
          loading="lazy"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotoMarquee',
  props: {
    photos: {
      type: Array,
      required: true,
    },
  },
  computed: {
    loopedPhotos() {
      const firstSet = this.photos.map((p, idx) => ({ ...p, loopKey: `a-${idx}` }))
      const secondSet = this.photos.map((p, idx) => ({ ...p, loopKey: `b-${idx}` }))
      return [...firstSet, ...secondSet]
    },
  },
}
</script>

<style scoped>
.marquee-shell {
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
}

.marquee-track {
  width: max-content;
  animation: marquee-scroll 26s linear infinite;
}

.marquee-shell:hover .marquee-track {
  animation-play-state: paused;
}

@keyframes marquee-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
