<template>
  <div class="stroke-heading-wrapper text-center select-none overflow-hidden py-8 sm:py-12 md:py-16">
    <div class="stroke-stack inline-block relative">
      <span class="stroke-layer stroke-layer--top" aria-hidden="true">{{ text }}</span>
      <span class="stroke-layer stroke-layer--mid" aria-hidden="true">{{ text }}</span>
      <h2 class="stroke-layer stroke-layer--main">
        {{ text }}
      </h2>
      <span class="stroke-layer stroke-layer--bottom" aria-hidden="true">{{ text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StrokeHeading',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.stroke-stack {
  line-height: 1;
}

.stroke-layer {
  display: block;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 0.08em;
  white-space: nowrap;
  font-size: clamp(1.75rem, 6vw, 4.75rem);
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-color: rgba(254, 254, 254, 0.85);
  -webkit-text-stroke-width: 1px;
}

.stroke-layer--top {
  opacity: 0.25;
  transform: translateY(38%);
}

.stroke-layer--mid {
  opacity: 0.5;
  transform: translateY(18%);
}

.stroke-layer--main {
  position: relative;
  z-index: 2;
  -webkit-text-fill-color: #fefefe;
  -webkit-text-stroke-width: 0;
  text-shadow: 0 0 24px rgba(255, 255, 255, 0.2);
}

.stroke-layer--bottom {
  opacity: 0.35;
  transform: translateY(-22%);
}
</style>
