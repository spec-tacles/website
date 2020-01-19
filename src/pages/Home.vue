<template>
  <div class="home">
    <section class="h-screen bg-gray-900 flex items-center text-center text-white flex-col">
      <div class="m-auto">
        <div class="container has-text-centered">
          <img
            class="logo"
            src="../assets/white-padding.svg"
            alt="Spectacles">
          <h1 class="title main">
            Spectacles
          </h1>
          <h2 class="subtitle main text-xl">
            Discord bots at scale
          </h2>
        </div>
      </div>
      <i class="fas fa-chevron-down fa-2x" />
    </section>

    <padded-section>
      <heading>What is Spectacles?</heading>
      <paragraph>Spectacles is a collection of applications and libraries designed to help you make stable, microservice-oriented Discord bots.</paragraph>
      <img
        class="image"
        src="../assets/architecture.svg"
        alt="Architecture diagram">
    </padded-section>

    <padded-section>
      <heading>Getting Started</heading>
      <paragraph>Since Spectacles is microservice-oriented, you need to run a minimum of three services to get started.</paragraph>
      <ol class="list-decimal list-inside pl-3 mb-6">
        <li>Message broker</li>
        <li>Gateway</li>
        <li>Worker</li>
      </ol>

      <heading :l="2">Message Broker</heading>
      <paragraph>
        The message broker is responsible for handling communication between the Discord gateway and your application. Spectacles uses the AMQP
        protocol, so we recommend using <a href="https://www.rabbitmq.com/">RabbitMQ</a> for this.
      </paragraph>
      <Code>docker run -d --name rabbit -p 5672:5672 rabbitmq</Code>

      <heading :l="2">Gateway</heading>
      <paragraph>
        Running the Spectacles gateway is easiest using Docker. First, you need to create a config file: call it <code>gateway.toml</code>.
      </paragraph>
      <pre
        is="codeblock"
        lang="toml">
        token = &quot;your bot token&quot;
        events = [&quot;MESSAGE_CREATE&quot;]&#10;

        [broker]
        type = "amqp"
      </pre>
      <paragraph>
        Now you can create a Dockerfile with the config file you just created.
      </paragraph>
      <pre
        is="codeblock"
        lang="dockerfile">
        FROM spectacles/gateway
        COPY gateway.toml /
      </pre>
      <info>
        We do not support command line flags or environment variables in an effort to protect your bot's token. You should ensure that
        appropriate file restrictions (recommended 600) are applied to your <code>gateway.toml</code> file.
      </info>
      <Code>docker build -t gateway .</Code>

      <heading :l="2">Worker</heading>
      <paragraph>
        The worker is where your application logic goes. Here, you can add commands, event listeners, or whatever else you want. We recommend that
        you keep this as stateless as possible (avoid timers, local caching, etc.) but you can make it stateful if you don't plan on horizontally
        scaling with high loads.
      </paragraph>
      <paragraph>
        Here is a simple example in JavaScript, but we have other libraries listed below.
      </paragraph>
      <pre
        is="codeblock"
        lang="javascript">
        const { Amqp } = require('@spectacles/brokers');
        const { Rest } = require('@spectacles/rest');

        const broker = new Amqp('gateway');
        const rest = new Rest('your bot token');

        (async () => {
          await broker.connect('localhost');
          await broker.subscribe(['MESSAGE_CREATE'], async (event, data) => {
            // event will be whichever event is received (in this case, only "MESSAGE_CREATE")
            // data is the deserialized payload as received from Discord
            switch (event) {
              case 'MESSAGE_CREATE': {
                if (data.author.bot) return;
                if (data.content === '!ping') await rest.post(`/channels/${data.channel_id}/messages`, { content: 'pong!' });
              }
            }
          });
        })();
      </pre>
    </padded-section>

    <padded-section>
      <Heading>Applications</Heading>
      <div
        v-for="(app, name) in applications"
        :key="name"
        class="flex flex-wrap">
        <module-card
          :name="name"
          :description="app.description"
          :installation="app.installation"
          :repo="app.repo"
          :color="app.color"
          :inverted="app.inverted"
          :docs="app.repo"
          class="w-1/3"
        />
      </div>
    </padded-section>

    <padded-section>
      <Heading>Libraries</Heading>

      <section
        v-for="(language, langName) in libraries"
        :key="langName">
        <Heading :l="2">{{ language.name }}</Heading>
        <div
          class="flex flex-wrap"
          style="margin-bottom: 1em">
          <module-card
            v-for="(lib, libName) in language.libraries"
            :key="libName"
            :name="libName"
            :description="lib.description"
            :installation="lib.installation"
            :repo="lib.repo"
            :color="language.color"
            :inverted="language.inverted"
            :docs="`/docs/${langName}/${libName}`"
            class="w-1/3"
          />
        </div>
      </section>
    </padded-section>

    <footer class="text-center bg-gray-800 text-white">
      <div class="container mx-auto py-32">
        <paragraph>
          <strong>Spectacles</strong> by <a href="https://github.com/appellation">appelation</a> and <a href="https://github.com/Hackzzila">Hackzzila</a>.
        </paragraph>
        <a
          class="mx-4"
          href="https://github.com/spec-tacles">
          <i class="fab fa-github fa-2x" />
        </a>
        <a
          class="mx-4"
          href="https://discord.gg/zU3vha6">
          <i class="fab fa-discord fa-2x" />
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
import applications from '../../static/applications.json';
import libraries from '../../static/libraries.json';

import Info from '../components/tips/Info';

import Code from '../components/utils/Code';
import Codeblock from '../components/utils/Codeblock';
import Heading from '../components/utils/Heading';
import PaddedSection from '../components/utils/PaddedSection';
import Paragraph from '../components/utils/Paragraph';

import ModuleCard from '../components/ModuleCard';

export default {
  name: 'Home',
  components: {
    Code,
    Codeblock,
    Heading,
    Info,
    ModuleCard,
    PaddedSection,
    Paragraph,
  },
  data() {
    return { libraries, applications };
  },
};
</script>

<style lang="sass">
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
  border-bottom-left-radius: 3px
  border-bottom-right-radius: 3px
</style>

