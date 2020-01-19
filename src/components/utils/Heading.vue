<template>
  <component
    :is="el"
    :class="style">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    l: {
      type: Number,
      default: 1,
      validator: v => v > 0 && v < 7,
    },
  },
  computed: {
    el() {
      return `h${this.l}`;
    },
    style() {
      switch (this.l) {
        case 1:
        default:
          return ['text-5xl', 'font-semibold'];
        case 2:
          return ['text-3xl', 'font-medium'];
      }
    },
  },
};
</script>
