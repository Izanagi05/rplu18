<template>
  <div
    class="yearbook-card-wrap flex flex-col items-center pt-10 sm:pt-12 md:pt-16"
    :class="tiltClass"
  >
    <button
      type="button"
      class="cardgalery relative w-full max-w-[300px] sm:max-w-[320px] md:max-w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 rounded-lg"
      :class="{ 'is-active': isActive }"
      :aria-pressed="String(isActive)"
      :aria-label="`${label} — ketuk atau arahkan kursor untuk efek 3D`"
      @click="isActive = !isActive"
    >
      <div class="wrappergalery relative rounded-md overflow-hidden">
        <img
          :src="coverSrc"
          :alt="alt"
          loading="lazy"
          class="w-full h-auto block object-cover select-none"
        />
      </div>

      <img
        :src="characterSrc"
        :alt="`${alt} — efek 3D`"
        loading="lazy"
        class="character pointer-events-none select-none object-contain"
      />
    </button>

    <p class="mt-4 text-xs sm:text-sm font-medium tracking-wider uppercase text-neutral-300">
      {{ label }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'YearbookCard3D',
  props: {
    coverSrc: {
      type: String,
      required: true,
    },
    characterSrc: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: 'Foto kelas XII RPL U',
    },
    tiltClass: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isActive: false,
    }
  },
}
</script>

<style scoped>
.cardgalery {
  perspective: 1800px;
  cursor: pointer;
}

.wrappergalery {
  transition: transform 0.5s ease, box-shadow 0.5s ease;
  position: relative;
  z-index: 10;
}

.wrappergalery::before,
.wrappergalery::after {
  content: '';
  opacity: 0;
  width: 100%;
  transition: opacity 0.5s ease;
  position: absolute;
  left: 0;
  pointer-events: none;
}

.wrappergalery::before {
  top: 0;
  height: 100%;
  background-image: linear-gradient(
    to top,
    transparent 45%,
    rgba(12, 13, 19, 0.45) 70%,
    rgba(12, 13, 19, 0.85) 100%
  );
}

.wrappergalery::after {
  bottom: 0;
  height: 45%;
  background-image: linear-gradient(
    to bottom,
    transparent 20%,
    rgba(12, 13, 19, 0.55) 65%,
    rgba(12, 13, 19, 0.9) 100%
  );
}

.cardgalery:hover .wrappergalery,
.cardgalery.is-active .wrappergalery {
  transform: perspective(900px) rotateX(24deg) translateZ(0);
  box-shadow: 0 30px 36px -10px rgba(0, 0, 0, 0.8);
}

.cardgalery:hover .wrappergalery::before,
.cardgalery:hover .wrappergalery::after,
.cardgalery.is-active .wrappergalery::before,
.cardgalery.is-active .wrappergalery::after {
  opacity: 1;
}

.character {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 25;
  transition: opacity 0.45s ease, transform 0.5s ease;
  transform: translate3d(0%, 0%, 0) scale(0.96);
}

.cardgalery:hover .character,
.cardgalery.is-active .character {
  opacity: 1;
  transform: translate3d(0%, -22%, 90px) scale(1.06);
}
</style>
