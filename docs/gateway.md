---
id: gateway
title: Gateway
---

The gateway is responsible for connecting your bot to Discord and is what will put your bot
"online". The Spectacles Gateway automatically handles the complexities involved with reconnection,
ratelimiting, and sharding and outputs a continuous stream of events to your applications.

## Config

The Spectacles Gateway has a variety of configuration options, but there are only 2 values that
you *must* provide for the Gateway to work: your bot token and a list of events to publish.

```toml
token = "" # Discord token
events = [] # array of gateway event names to publish
```

By default, the Gateway reads its config file from `gateway.toml` in the current working directory.
You can also use environment variables in situations where that may be more convenient (e.g. when)
running in a Docker Compose environment.

You can also specify this config using environment variables.

- `DISCORD_TOKEN`: your token
- `DISCORD_EVENTS`: comma-separated string of gateway event names

### Gateway event names

Gateway events are documented on the [Discord API documentation](https://discord.com/developers/docs/topics/gateway#event-names).

## Standard IO

By default, the Gateway simply outputs to standard output. If you'd like to run a quick test,
here's a Docker command you can run to see incoming `MESSAGE_CREATE` events.

```
docker run --rm -it \
	--name gateway \
	-e DISCORD_TOKEN="your token" \
	-e DISCORD_EVENTS=MESSAGE_CREATE \
	spectacles/gateway
```

You can even publish data *back* to the gateway if you input JSON to the terminal.

This is the JSON format used when using the STDIO mode of the gateway. `event`
is mapped to the `t` property and `data` is mapped to the `d` property of a
[Gateway packet](https://discord.com/developers/docs/topics/gateway#payloads-gateway-payload-structure).

```json
{
	"event": "",
	"data": {}
}
```

## AMQP

Most of the time, you'll want to use a proper message broker for getting data from the Gateway to
your applications. Change your config to specify AMQP as the broker type by adding the TOML below.

```toml
[broker]
type = "amqp"
group = "gateway"
message_timeout = "2m"

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
