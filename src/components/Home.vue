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
            Some cool sounding line
          </h2>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h1 class="title">What is Spectacles?</h1>
        <p>
          a meme
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h1 class="title">Libraries</h1>

        <div class="columns">
          <div class="column is-4">
            <article class="tile is-child notification is-success library">
              <div class="content">
                <p class="title">spectacles.js <span class="tag">Node.JS</span></p>
                <p class="subtitle">The Javascript spectacles client.</p>
                <div class="content">
                  <div class="columns">

                    <div class="column">
                      <span data-balloon="Maintainer" data-balloon-pos="up">
                        <span class="icon">
                          <i class="fa fa-wrench"></i>
                        </span>
                        <span>Spectacles</span>
                      </span>
                    </div>

                    <div class="column has-text-centered">
                      <router-link to="/docs/spectacles.js" class="client-link">
                        <span class="icon">
                          <i class="fa fa-book"></i>
                        </span>
                        <span class="text">Docs</span>
                      </router-link>
                    </div>

                    <div class="column has-text-right">
                      <a href="https://github.com/spec-tacles/spectacles.js" class="client-link">
                        <span class="icon">
                          <i class="fa fa-github"></i>
                        </span>
                        <span class="text">Repository</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <pre class="install-client"><code>npm i @spectacles/spectacles.js</code></pre>
          </div>

          <div class="column is-4">
            <article class="tile is-child notification is-success library">
              <div class="content">
                <p class="title">gateway <span class="tag">Node.JS</span></p>
                <p class="subtitle">The gateway to Discord.</p>
                <div class="content">
                  <div class="columns">

                    <div class="column">
                      <span data-balloon="Maintainer" data-balloon-pos="up">
                        <span class="icon">
                          <i class="fa fa-wrench"></i>
                        </span>
                        <span>Spectacles</span>
                      </span>
                    </div>

                    <div class="column has-text-centered">
                      <router-link to="/docs/gateway" class="client-link">
                        <span class="icon">
                          <i class="fa fa-book"></i>
                        </span>
                        <span class="text">Docs</span>
                      </router-link>
                    </div>

                    <div class="column has-text-right">
                      <a href="https://github.com/spec-tacles/gateway" class="client-link">
                        <span class="icon">
                          <i class="fa fa-github"></i>
                        </span>
                        <span class="text">Repository</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <pre class="install-client"><code>npm i @spectacles/gateway</code></pre>
          </div>

          <div class="column is-4">
            <article class="tile is-child notification is-success library">
              <div class="content">
                <p class="title">rest <span class="tag">Node.JS</span></p>
                <p class="subtitle">The Discord REST client library.</p>
                <div class="content">
                  <div class="columns">

                    <div class="column">
                      <span data-balloon="Maintainer" data-balloon-pos="up">
                        <span class="icon">
                          <i class="fa fa-wrench"></i>
                        </span>
                        <span>Spectacles</span>
                      </span>
                    </div>

                    <div class="column has-text-centered">
                      <router-link to="/docs/rest" class="client-link">
                        <span class="icon">
                          <i class="fa fa-book"></i>
                        </span>
                        <span class="text">Docs</span>
                      </router-link>
                    </div>

                    <div class="column has-text-right">
                      <a href="https://github.com/spec-tacles/rest" class="client-link">
                        <span class="icon">
                          <i class="fa fa-github"></i>
                        </span>
                        <span class="text">Repository</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <pre class="install-client"><code>npm i @spectacles/rest</code></pre>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>Coming Never</p>
          <p>
            <strong>Spectacles</strong> by <a href="https://github.com/appellation">appelation</a> and <a href="https://github.com/Hackzzila">Hackzzila</a>.
          </p>
          <p>
            <a class="icon" href="https://github.com/spec-tacles">
              <i class="fa fa-github"></i>
            </a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Home',
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

