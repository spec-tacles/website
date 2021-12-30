---
id: ping_pong
title: Ping Pong
---

Now that your bot is receiving messages, you can respond to them. Open your command handler from
the previous section.

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

```ts
import { Redis } from '@spectacles/brokers';
import Rest from '@spectacles/proxy';
import * as RedisClient from 'ioredis';

const client = new RedisClient();
const broker = new Redis('gateway', client);
const rest = new Rest(broker, 'your bot token');

broker.on('MESSAGE_CREATE', async (msg, { ack }) => {
	await ack();
	console.log(msg);

	if (msg.content === 'ping') {
		await rest.post(`/channels/${msg.channel_id}/messages`, { content: 'pong' });
	}
});

broker.subscribe('MESSAGE_CREATE');
```

## Next Steps

You have a fully functioning and scalable Discord bot now. The possibilities are endless:

- Continue developing your command handler
- Add a completely new application (a website?)
- Continue reading about how Spectacles works
- ???
