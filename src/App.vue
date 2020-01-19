<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="sass">
@tailwind base
@tailwind components
@tailwind utilities

html
  overflow: auto !important
</style>
