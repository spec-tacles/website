---
id: ping_pong
title: Ping Pong
---

Now that your bot is receiving messages, you can respond to them.

## Launching the Proxy

The proxy will handle all of your outgoing HTTP requests to Discord. To launch the Spectacles
proxy:

```bash
docker run \
	--rm -it \
	--network host \
	spectacles/proxy:latest
```

## Installing Dependencies

Add the Spectacles proxy client library.

```bash
npm i @spectacles/proxy
```

## Modifying The Handler

Update your command handler to send a "pong" back when it receives a "ping".

:::note

Replace `your bot token` with your Discord bot token.

:::

```js
import { Redis } from '@spectacles/brokers';
import Rest from '@spectacles/proxy';
import RedisClient from 'ioredis';

const client = new RedisClient();
const gatewayBroker = new Redis('gateway', client);
const proxyBroker = new Redis('proxy', client);
const rest = new Rest(proxyBroker, 'your bot token');

gatewayBroker.on('MESSAGE_CREATE', async (msg, { ack }) => {
	await ack();
	console.log(msg);

	if (msg.content === 'ping') {
		await rest.post(`/channels/${msg.channel_id}/messages`, { content: 'pong' });
	}
});

gatewayBroker.subscribe('MESSAGE_CREATE');
```

## Next Steps

You have a fully functioning and scalable Discord bot now. The possibilities are endless:

- Continue developing your command handler
- Add a completely new application (a website?)
- Continue reading about how Spectacles works
- ???
