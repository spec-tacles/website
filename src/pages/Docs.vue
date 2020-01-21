<template>
  <div class="docs">
    <nav class="bg-gray-800 text-white flex">
      <div class="flex-grow p-4">
        <router-link
          to="/">
          <img
            src="../assets/white-nopadding.svg"
            alt="Spectacles"
            width="56"
            height="28">
        </router-link>
      </div>

      <div class="w-40 p-4">
        <multiselect
          :value="libraryName"
          :options="Object.keys(libraries)"
          :searchable="false"
          :show-labels="false"
          @input="onLibrarySelected" />
      </div>

      <div class="w-40 p-4">
        <multiselect
          v-if="library.versions"
          :value="version"
          :options="library.versions"
          :searchable="false"
          :show-labels="false"
          @input="onVersionSelected" />
      </div>
    </nav>

    <section
      ref="loading"
      class="hero is-fullheight loading">
      <div class="hero-body">
        <div class="container">
          <div class="sk-cube-grid">
            <div class="sk-cube sk-cube1" />
            <div class="sk-cube sk-cube2" />
            <div class="sk-cube sk-cube3" />
            <div class="sk-cube sk-cube4" />
            <div class="sk-cube sk-cube5" />
            <div class="sk-cube sk-cube6" />
            <div class="sk-cube sk-cube7" />
            <div class="sk-cube sk-cube8" />
            <div class="sk-cube sk-cube9" />
          </div>
        </div>
      </div>
    </section>

    <iframe
      ref="docsFrame"
      class="h-full w-full"
      frameborder="0"
      @load="load" />
  </div>
</template>

<script>
import vSelect from 'vue-select';
import Multiselect from 'vue-multiselect';
import libraries from '../../static/libraries.json';

export default {
  name: 'Docs',

  components: {
    Multiselect,
    vSelect,
  },

  computed: {
    libraries() {
      return this.language.libraries;
    },
    language() {
      if (!(this.$route.params.language in libraries)) throw new Error('invalid language');
      return libraries[this.$route.params.language];
    },
    libraryName() {
      return this.$route.params.library;
    },
    library() {
      if (!(this.libraryName in this.libraries)) throw new Error('invalid library');
      return this.libraries[this.libraryName];
    },
    version() {
      return this.$route.params.version;
    },
  },

  watch: {
    $route() {
      this.handleRoute();
    },
  },

  async mounted() {
    this.handleRoute();
  },

  methods: {
    load() {
      this.$refs.loading.style.opacity = '0';
    },

    onLibrarySelected(value) {
      this.$router.push({ name: 'docs', params: { language: this.$route.params.language, library: value } });
    },

    onVersionSelected(value) {
      this.$router.push({ name: 'docs-version', params: { version: value } });
    },

    async handleRoute() {
      if (!this.$refs.docsFrame) return;

      if (!this.version) {
        this.$router.push({ name: 'docs-version', params: { version: 'master' } });
        return;
      }

      let lib;
      try {
        lib = this.library;
      } catch (e) {
        alert(e.message);
        return;
      }

      const url = lib.docs.replace('{version}', this.version);
      this.$refs.docsFrame.src = url;
    },
  },
};
</script>

<style lang="scss">
@import '../../node_modules/vue-multiselect/dist/vue-multiselect.min.css';
</style>

<style lang="scss" scoped>
.docs {
  height: 100vh;
}

nav {
  z-index: 10;
}

.loading {
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  transition: all 500ms linear;

  .hero-body {
    padding-top: 0;
    padding-bottom: 0;
  }
}

</style>

<style scoped>
.sk-cube-grid {
  width: 40px;
  height: 40px;
  margin: 100px auto;
}

.sk-cube-grid .sk-cube {
  width: 33%;
  height: 33%;
  background-color: #333;
  float: left;
  -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
          animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
}
.sk-cube-grid .sk-cube1 {
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s; }
.sk-cube-grid .sk-cube2 {
  -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s; }
.sk-cube-grid .sk-cube3 {
  -webkit-animation-delay: 0.4s;
          animation-delay: 0.4s; }
.sk-cube-grid .sk-cube4 {
  -webkit-animation-delay: 0.1s;
          animation-delay: 0.1s; }
.sk-cube-grid .sk-cube5 {
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s; }
.sk-cube-grid .sk-cube6 {
  -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s; }
.sk-cube-grid .sk-cube7 {
  -webkit-animation-delay: 0s;
          animation-delay: 0s; }
.sk-cube-grid .sk-cube8 {
  -webkit-animation-delay: 0.1s;
          animation-delay: 0.1s; }
.sk-cube-grid .sk-cube9 {
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s; }

@-webkit-keyframes sk-cubeGridScaleDelay {
  0%, 70%, 100% {
    -webkit-transform: scale3D(1, 1, 1);
            transform: scale3D(1, 1, 1);
  } 35% {
    -webkit-transform: scale3D(0, 0, 1);
            transform: scale3D(0, 0, 1);
  }
}

@keyframes sk-cubeGridScaleDelay {
  0%, 70%, 100% {
    -webkit-transform: scale3D(1, 1, 1);
            transform: scale3D(1, 1, 1);
  } 35% {
    -webkit-transform: scale3D(0, 0, 1);
            transform: scale3D(0, 0, 1);
  }
}
</style>
