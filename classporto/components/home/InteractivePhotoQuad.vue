<template>
  <div class="flex flex-col items-center">
    <div class="imgcard1">
      <img
        v-for="photo in photos"
        :key="photo.id"
        :src="photo.src"
        :alt="photo.alt"
        width="500"
        height="500"
        loading="lazy"
      />
    </div>
    <p class="mt-3 text-[11px] sm:text-xs text-neutral-400 tracking-wide">
      Hover foto untuk memperbesar
    </p>
  </div>
</template>

<script>
export default {
  name: 'InteractivePhotoQuad',
  props: {
    photos: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.imgcard1 {
  position: relative;
  --sk: 112px;
  --gk: 4px;
  display: grid;
  grid: auto-flow var(--sk) / repeat(2, var(--sk));
  gap: var(--gk);
}

@media (min-width: 640px) {
  .imgcard1 {
    --sk: 145px;
    --gk: 6px;
  }
}

@media (min-width: 1024px) {
  .imgcard1 {
    --sk: 175px;
    --gk: 8px;
  }
}

.imgcard1 > img {
  width: 100%;
  object-fit: cover;
  aspect-ratio: 1;
  cursor: pointer;
  filter: grayscale(100%);
  overflow: clip;
  z-index: 0;
  border-radius: 6px;
  transition: 0.28s ease, z-index 0s 0.28s;
}

.imgcard1 > img:hover {
  width: calc(200% + var(--gk));
  filter: grayscale(0%);
  z-index: 2;
  --c: 50%;
  transition: 0.4s ease, z-index 0s;
}

.imgcard1 > img:nth-child(1) {
  clip-path: circle(var(--c, 55% at 70% 70%));
  place-self: start;
}

.imgcard1 > img:nth-child(2) {
  clip-path: circle(var(--c, 55% at 30% 70%));
  place-self: start end;
}

.imgcard1 > img:nth-child(3) {
  clip-path: circle(var(--c, 55% at 70% 30%));
  place-self: end start;
}

.imgcard1 > img:nth-child(4) {
  clip-path: circle(var(--c, 55% at 30% 30%));
  place-self: end;
}
</style>
