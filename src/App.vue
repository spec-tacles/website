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
@import '../node_modules/bulma/bulma.sass'

html
  overflow: auto !important
</style>
