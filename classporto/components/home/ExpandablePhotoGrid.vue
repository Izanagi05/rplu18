<template>
  <div class="flex flex-col items-center">
    <div class="expandable-grid" :class="{ 'is-open': isOpen }">
      <img
        v-for="(photo, index) in photos"
        :key="photo.id"
        :src="photo.src"
        :alt="photo.alt"
        width="300"
        height="300"
        loading="lazy"
        :style="{ '--i': index + 1 }"
      />

      <button
        type="button"
        class="expand-toggle"
        :aria-expanded="String(isOpen)"
        :aria-label="isOpen ? 'Tutup kolase foto' : 'Buka kolase 9 foto'"
        @click="isOpen = !isOpen"
      >
        <span class="plus-bar plus-bar--h"></span>
        <span class="plus-bar plus-bar--v"></span>
      </button>
    </div>

    <button
      type="button"
      class="mt-4 text-xs sm:text-sm font-medium text-neutral-300 hover:text-amber-300 transition-colors"
      @click="isOpen = !isOpen"
    >
      {{ isOpen ? 'Tutup Kolase 3×3' : 'Ketuk + untuk Membuka Kolase 3×3' }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'ExpandablePhotoGrid',
  props: {
    photos: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>

<style scoped>
.expandable-grid {
  --sb: 88px;
  --gap: 6px;
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, var(--sb));
  gap: var(--gap);
  place-items: center;
  padding: 6px;
}

@media (min-width: 640px) {
  .expandable-grid {
    --sb: 108px;
    --gap: 8px;
  }
}

@media (min-width: 1024px) {
  .expandable-grid {
    --sb: 118px;
    --gap: 8px;
  }
}

.expandable-grid > img {
  width: var(--sb);
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 8px;
  transform: scale(0.18);
  opacity: 0.2;
  filter: brightness(0.7);
  pointer-events: none;
  transform-origin: var(--x, 50%) var(--y, 50%);
  transition: transform 0.65s cubic-bezier(0.22, 1, 0.36, 1) calc((var(--i) - 1) * 0.05s),
    opacity 0.5s ease calc((var(--i) - 1) * 0.05s),
    filter 0.5s ease;
}

.expandable-grid > img:nth-of-type(1) { --x: 150%; --y: 150%; }
.expandable-grid > img:nth-of-type(2) { --x: 50%;  --y: 150%; }
.expandable-grid > img:nth-of-type(3) { --x: -50%; --y: 150%; }
.expandable-grid > img:nth-of-type(4) { --x: 150%; --y: 50%; }
.expandable-grid > img:nth-of-type(5) { --x: 50%;  --y: 50%; }
.expandable-grid > img:nth-of-type(6) { --x: -50%; --y: 50%; }
.expandable-grid > img:nth-of-type(7) { --x: 150%; --y: -50%; }
.expandable-grid > img:nth-of-type(8) { --x: 50%;  --y: -50%; }
.expandable-grid > img:nth-of-type(9) { --x: -50%; --y: -50%; }

.expandable-grid.is-open > img {
  transform: scale(1);
  opacity: 1;
  filter: brightness(1);
  pointer-events: auto;
}

.expand-toggle {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 56px;
  height: 56px;
  border-radius: 9999px;
  border: 2px solid rgba(255, 255, 255, 0.85);
  background: rgba(30, 30, 30, 0.88);
  backdrop-filter: blur(6px);
  transform: translate(-50%, -50%) rotate(0deg);
  cursor: pointer;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s ease, background-color 0.25s ease, border-color 0.25s ease;
}

.expand-toggle:hover {
  border-color: #fcd34d;
  background: rgba(30, 30, 30, 0.96);
}

.expandable-grid.is-open .expand-toggle {
  transform: translate(-50%, -50%) scale(0.75) rotate(45deg);
  background: rgba(0, 0, 0, 0.72);
}

.plus-bar {
  position: absolute;
  background: #ffffff;
  border-radius: 9999px;
}

.plus-bar--h {
  width: 22px;
  height: 2.5px;
}

.plus-bar--v {
  width: 2.5px;
  height: 22px;
}
</style>
