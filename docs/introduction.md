---
slug: /
id: introduction
title: Introduction
---

Spectacles is a distributed Discord bot framework.

![Architecture](../static/img/architecture.svg)

A basic Spectacles bot runs 4 services:

1. Gateway
2. Proxy
3. Message broker
4. Command handler

The Spectacles organization provides the gateway, proxy and broker services. You are responsible for
writing your own command handler (that's why you're here, after all).

Each of these services is fully stateless and can be easily scaled up or down across machines.

## Message Broker

The message broker is the heart of a Spectacles application. To launch Redis as a message broker:

```bash
docker run \
	--rm -it \
	-p 6379:6379 \
	redis
```

## Command Handler

To launch a basic command handler:

1. Create a new project
2. Install dependencies
```bash
npm i ioredis @spectacles/brokers
```
3. Create a command handler called `index.mjs`
```js
import { Redis } from '@spectacles/brokers';
import RedisClient from 'ioredis';

const client = new RedisClient();
const broker = new Redis('gateway', client);

broker.on('MESSAGE_CREATE', async (msg, { ack }) => {
	await ack();
	console.log(msg);
});

broker.subscribe('MESSAGE_CREATE');
```
4. Run it with `node index.mjs`

## Proxy

The proxy will handle all of your outgoing HTTP requests to Discord. To launch the Spectacles
proxy:

```bash
docker run \
	--rm -it \
	--network host
	spectacles/proxy:latest
```

## Gateway

The gateway manages your bot's connection to the Discord gateway. To launch the Spectacles gateway:

:::note

Replace the `DISCORD_TOKEN` environment variable with your bot's token.

:::

```bash
docker run \
	--rm -it \
	--network host
	-e DISCORD_TOKEN="your token" \
	-e DISCORD_EVENTS=MESSAGE_CREATE \
	-e DISCORD_INTENTS=GUILD,GUILD_MESSAGES \
	-e BROKER_TYPE=redis \
	-e REDIS_URL=localhost:6379 \
	spectacles/gateway
```

## Next Steps

Send a message in a guild that your bot is in, and you will see it in the console output of your
command handler.
