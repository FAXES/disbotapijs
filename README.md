# Disbot.top API
The [disbot.top](https://disbot.top) js library for the disbot API.

---

## Support

* [Discord](https://disbot.top/d)

* [Website](https://disbot.top)

---

## Installation

`npm i disbotapi`

---

## Ratelimits
You can POST Server and Shard Count stats once every 5 minutes

---


## Updating Server Count

```js
const disbotapi = require("disbotapi")

client.on("ready", () => {
    const disbot = new disbotapi(client.user.id, "bot-auth-token")
    setInterval(() => {
        disbot.updateStats(client.guilds.cache.size)
    }, 300000)
})
```

**Where can I find the auth token?**

You can find your auth token via the API page on the disbot.top website

https://disbot.top/api/bottokens
*(Ensure you're logged in.)*

--- 
