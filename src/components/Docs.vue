<template>
  <div class="docs">
    <nav class="navbar is-dark">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <img src="../assets/white-nopadding.svg" alt="Spectacles" width="56" height="28">
        </router-link>
        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">
            Home
          </router-link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="/documentation/overview/start/">
              Library
            </a>
            <div class="navbar-dropdown is-right is-boxed">
              <router-link v-for="(value, lb) in libraries" :key="lb" class="navbar-item" :class="{ 'is-active': lb === library }" :to="`/docs/${lb}`">
                {{ lb }}
              </router-link>
            </div>
          </div>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="/documentation/overview/start/">
              Version
            </a>
            <div class="navbar-dropdown is-right is-boxed">
              <router-link v-for="br in libraries[this.$route.params.library]" :key="br" class="navbar-item" :class="{ 'is-active': br === version }" :to="`/docs/${library}/${br}`">
                {{ br }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <section class="hero is-fullheight loading" id="loading">
      <div class="hero-body">
        <div class="container">
          <div class="sk-cube-grid">
            <div class="sk-cube sk-cube1"></div>
            <div class="sk-cube sk-cube2"></div>
            <div class="sk-cube sk-cube3"></div>
            <div class="sk-cube sk-cube4"></div>
            <div class="sk-cube sk-cube5"></div>
            <div class="sk-cube sk-cube6"></div>
            <div class="sk-cube sk-cube7"></div>
            <div class="sk-cube sk-cube8"></div>
            <div class="sk-cube sk-cube9"></div>
          </div>
        </div>
      </div>
    </section>

    <iframe
      id="iframe"
      height="0"
      frameborder="0"
      scrolling="no"
      @load="resize">
    </iframe>
  </div>
</template>

<script>
export default {
  name: 'docs',

  data() {
    return {
      libraries: {},
      library: this.$route.params.library,
      version: this.$route.params.version,
    };
  },

  methods: {
    resize(obj) {
      obj.target.contentWindow.scroll(0, 0);
      obj.target.style.height = 'calc(100vh - 3.75rem)';
      obj.target.style.height = `${obj.target.contentWindow.document.body.scrollHeight}px`;
      if (obj.target.contentWindow.location.hash.substr(1)) {
        const el = obj.target.contentWindow.document.getElementById(obj.target.contentWindow.location.hash.substr(1));
        if (el) {
          el.scrollIntoView();
        }
      }
      // alert(obj.target.contentWindow.location.hash);
      document.getElementById('loading').style.opacity = '0';
    },

    async handleRoute(route) {
      if (!this.$data.libraries.length) {
        const res = await fetch(new Request('/static/docs/docs.json'));
        this.$data.libraries = await res.json();
      }

      const library = route.params.library;
      let version = route.params.version || 'master';

      if (!(library in this.$data.libraries)) {
        alert('Invalid Library');
      }

      if (!(version in this.$data.libraries[library])) {
        version = 'master';
      }

      this.$data.library = library;
      this.$data.version = version;

      const target = document.getElementById('iframe');
      target.src = `/static/docs/${library}/${version}/index.html`;
    },
  },

  watch: {
    $route(to) {
      this.handleRoute(to);
    },
  },

  async created() {
    this.handleRoute(this.$route);
  },
};
</script>


<style lang="sass" scoped>
@import '../../node_modules/bulma/bulma.sass'

iframe
  width: 100%

nav
  z-index: 10

.loading
  pointer-events: none
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
  background: white
  transition: all 500ms linear

  .hero-body
    padding-top: 0
    padding-bottom: 0
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
