---
id: proxy
title: Proxy
---

The proxy handles sending HTTP requests to Discord. Your client apps can dispatch requests to the
proxy without worrying about ratelimiting; as long as there is a single Redis instance or cluster,
your application will never be ratelimited.
