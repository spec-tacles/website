<template>
  <div>
    <article :class="{
      tile: true,
      'is-child': true,
      notification: true,
      library: true,
      'has-text-white': inverted,
    }" :style="color ? `background-color: ${color}` : ''">
      <div class="content">
        <p class="title">{{ name }}</p>
        <p class="subtitle">{{ description }}</p>
        <div class="content">
          <div class="columns">
            <div class="column">
              <router-link :to="`/docs/${name}`" class="client-link">
                <span class="icon">
                  <i class="fa fa-book"></i>
                </span>
                <span class="text">Docs</span>
              </router-link>
            </div>

            <div class="column">
              <a :href="repo || `https://github.com/spec-tacles/${name}`" class="client-link">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span class="text">Repository</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
    <pre class="install-client"><code>{{ installation }}</code></pre>
  </div>
</template>

<script>
export default {
  props: [
    'name',
    'description',
    'installation',
    'repo',
    'color',
    'inverted',
  ],
};
</script>
