<template>
  <div class="home">
    <section class="hero is-dark is-bold is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <img class="logo" src="../assets/white-padding.svg" alt="Spectacles">
          <h1 class="title main">
            Spectacles
          </h1>
          <h2 class="subtitle main">
            Discord bots at scale
          </h2>
        </div>
      </div>
      <div class="hero-foot has-text-centered">
        <span class="icon is-large">
          <i class="fas fa-chevron-down fa-2x"></i>
        </span>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h1 class="title">What is Spectacles?</h1>
        <p class="content">
          Spectacles is a collection of applications and libraries designed to help you make stable, microservice-oriented Discord bots.
        </p>
        <img class="image" src="../assets/architecture.svg" alt="Architecture diagram" />
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h1 class="title">Applications</h1>
        <section class="columns" v-for="(app, name) in applications" :key="name">
          <module-card
            class="column is-one-third"
            :name="name"
            :description="app.description"
            :installation="app.installation"
            :repo="app.repo"
            :color="app.color"
            :inverted="app.inverted"
            :docs="app.repo"
          />
        </section>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h1 class="title">Libraries</h1>

        <section v-for="(language, langName) in libraries" :key="langName">
          <h2 class="title is-4" style="margin-bottom: 0.25em">{{ language.name }}</h2>
          <div class="columns" style="margin-bottom: 1em">
            <module-card
              class="column is-one-third"
              v-for="(lib, libName) in language.libraries"
              :key="libName"
              :name="libName"
              :description="lib.description"
              :installation="lib.installation"
              :repo="lib.repo"
              :color="language.color"
              :inverted="language.inverted"
              :docs="`/docs/${langName}/${libName}`"
            />
          </div>
        </section>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>Spectacles</strong> by <a href="https://github.com/appellation">appelation</a> and <a href="https://github.com/Hackzzila">Hackzzila</a>.
          </p>
          <p>
            <a class="icon is-large" href="https://github.com/spec-tacles">
              <i class="fab fa-github fa-2x"></i>
            </a>
            <a class="icon" href="https://discord.gg/myGTdw">
              <i class="fab fa-discord fa-2x"></i>
            </a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import applications from '../../static/applications.json';
import libraries from '../../static/libraries.json';
import ModuleCard from './ModuleCard';

export default {
  name: 'Home',
  data() {
    return { libraries, applications };
  },
  components: { ModuleCard },
};
</script>

<style lang="sass">
@import '../../node_modules/bulma/bulma.sass'
@import '../../node_modules/balloon-css/balloon.css'

.main.title
  font-family: 'Raleway', sans-serif
  font-weight: 900
  font-size: 3.5em
  margin-top: -20px

.main.subtitle
  margin-top: 20px !important

.client-link
  text-decoration: none !important

  .text
    text-decoration: underline

.library
  border-bottom-left-radius: 0
  border-bottom-right-radius: 0


pre.install-client
  background: $dark
  color: $white
  border-bottom-left-radius: 3px
  border-bottom-right-radius: 3px
</style>

