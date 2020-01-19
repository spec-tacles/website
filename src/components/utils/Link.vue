<template>
  <a
    v-if="isAbsolute"
    :href="href">
    <slot />
  </a>
  <router-link
    v-else
    :to="href">
    <slot />
  </router-link>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
    },
  },
  computed: {
    isAbsolute() {
      return this.href.startsWith('http');
    },
  },
};
</script>
