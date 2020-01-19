<template>
  <pre
    v-highlightjs
    class="whitespace-pre mb-6"><code>{{ code }}</code></pre>
</template>

<script>
import { stripIndent } from 'common-tags';

export default {
  computed: {
    code() {
      return stripIndent(this.$slots.default[0].text);
    },
  },
};
</script>
