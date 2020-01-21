<template>
  <div class="pr-2 pb-2">
    <article
      :class="['p-4', 'rounded-t', inverted ? 'text-white' : '']"
      :style="color ? `background-color: ${color}` : ''">
      <div>
        <heading :l="2">{{ name }}</heading>
        <paragraph>{{ description }}</paragraph>
        <div class="flex">
          <dynamic-link
            :href="docs"
            class="flex-grow">
            <i class="fa fa-book" />
            <span class="ml-3">Docs</span>
          </dynamic-link>

          <dynamic-link
            :href="repo || `https://github.com/spec-tacles/${name}`"
            class="flex-grow">
            <span class="icon">
              <i class="fab fa-github" />
            </span>
            <span class="ml-3">Repository</span>
          </dynamic-link>
        </div>
      </div>
    </article>
    <pre class="rounded-b bg-gray-800 p-4 text-white"><code>{{ installation }}</code></pre>
  </div>
</template>

<script>
import Heading from './utils/Heading';
import DynamicLink from './utils/Link';
import Paragraph from './utils/Paragraph';

export default {
  components: {
    Heading,
    DynamicLink,
    Paragraph,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    installation: {
      type: String,
      required: true,
    },
    repo: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      required: true,
    },
    inverted: {
      type: Boolean,
      default: false,
    },
    docs: {
      type: String,
      required: true,
    },
  },
};
</script>
