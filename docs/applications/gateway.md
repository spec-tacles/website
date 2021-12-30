---
id: gateway
title: Gateway
---

The gateway is responsible for connecting your bot to Discord and is what will put your bot
"online". The Spectacles Gateway automatically handles the complexities involved with reconnection,
ratelimiting, and sharding and outputs a continuous stream of events to your applications.

## Config

The Spectacles Gateway has a variety of configuration options, but there are only 3 values that
you *must* provide for the Gateway to work: your bot token, a list of
[events](https://discord.com/developers/docs/topics/gateway#event-names) to publish, and
[intents](https://discord.com/developers/docs/topics/gateway#gateway-intents).

```toml
token = ""
events = ["GUILD_CREATE"]
intents = ["GUILD"]
```

By default, the Gateway reads its config file from `gateway.toml` in the current working directory.
You can also use environment variables in situations where that may be more convenient (e.g. when)
running in a Docker Compose environment.

You can also specify this config using environment variables.

- `DISCORD_TOKEN`: your token
- `DISCORD_EVENTS`: comma-separated string of gateway event names
- `DISCORD_INTENTS`: comma-separated string of intents

## Standard IO

By default, the Gateway simply outputs to standard output. If you'd like to run a quick test,
here's a Docker command you can run to see incoming `MESSAGE_CREATE` events.

```
docker run --rm -it
	-e DISCORD_TOKEN="your token"
	-e DISCORD_EVENTS=MESSAGE_CREATE
	-e DISCORD_INTENTS=GUILD,GUILD_MESSAGES
	spectacles/gateway
```

You can even publish data *back* to the gateway if you input MessagePack to the terminal.

This is the JSON format used when using the STDIO mode of the gateway. `event`
is mapped to the `t` property and `data` is mapped to the `d` property of a
[Gateway packet](https://discord.com/developers/docs/topics/gateway#payloads-gateway-payload-structure).

```json
{
	"event": "",
	"data": {}
}
```

## Redis

Change your config to specify Redis as the broker type and provide Redis connection options.

```toml
# base config here

[broker]
type = "redis"

[redis]
url = "localhost:6379"
```

You can now consume events from this Redis instance. To verify that this is working, simply execute
`XREAD STREAMS {event_name} 0-0` on Redis, where `{event_name}` is replaced with a Discord event
you are expecting (e.g. GUILD_CREATE).

You can also change the shard store to Redis. This will allow your gateway sessions to persist past
restarts in case your gateway dies.

```toml
[shard_store]
type = "redis"
prefix = "gateway"
```

## AMQP

Change your config to specify AMQP as the broker type and provide AMQP connection options.

```toml
# base config here

[broker]
type = "amqp"

[amqp]
url = "amqp://localhost"
```

To run a quick demonstration of the AMQP capabilities:

1. Setup a RabbitMQ instance
```
docker run --rm -it \
	--name rabbit \
	-p 5672:5672 \
	-p 15672:15672 \
	rabbitmq:3-management
```
2. Run the Gateway and connect it to RabbitMQ
```
docker run --rm -it \
	--name gateway \
	-e DISCORD_TOKEN="your token" \
	-e DISCORD_EVENTS=MESSAGE_CREATE \
	-e BROKER_TYPE=amqp \
	-e AMQP_URL=amqp://localhost:5672
```
3. Send a message in any guild that your bot is in
4. View the RabbitMQ dashboard at [`http://localhost:15672`](http://localhost:15672)
5. Navigate to "Queues" and select "gateway:MESSAGE_CREATE"
6. Expand "Get messages"
7. Change "Ack Mode" to "Ack message requeue false"
8. Click "Get Message(s)"

You should see JSON output in your dashboard with the contents of the Discord message you sent.

## Reference

Detailed Spectacles Gateway documentation is available on [GitHub](https://github.com/spec-tacles/gateway).
