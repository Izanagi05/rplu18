<template>
  <figure
    :class="[
      'bg-white shadow-xl rounded-sm transition-transform duration-300 hover:scale-[1.02]',
      paddingClass,
      tiltClass,
    ]"
  >
    <div class="overflow-hidden bg-neutral-200">
      <img
        :src="src"
        :alt="alt"
        loading="lazy"
        class="w-full h-full object-cover"
      />
    </div>
    <figcaption
      v-if="caption"
      class="mt-2 sm:mt-3 text-center text-[11px] sm:text-xs font-medium tracking-wide text-neutral-700"
    >
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: 'PolaroidCard',
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: 'Kenangan XII RPL U',
    },
    caption: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'md',
      validator: (v) => ['sm', 'md', 'lg'].includes(v),
    },
    tiltClass: {
      type: String,
      default: '',
    },
  },
  computed: {
    paddingClass() {
      const map = {
        sm: 'pt-2.5 px-2 pb-4 sm:pt-3 sm:px-2.5 sm:pb-5',
        md: 'pt-3 px-2.5 pb-6 sm:pt-4 sm:px-3 sm:pb-7',
        lg: 'pt-4 px-3 pb-7 sm:pt-5 sm:px-4 sm:pb-9',
      }
      return map[this.size] || map.md
    },
  },
}
</script>
