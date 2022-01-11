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

You can only do 35 request every 15 minutes

---


## Updating Server Count

```js
const disbotapi = require("disbotapi")

client.on("ready", () => {
    const disbot = new disbotapi("BOT_API_TOKEN")
    setInterval(() => {
        disbot.updateStats(client.user.id, client.guilds.cache.size)
    }, 300000)
})
```

---

## Get Bot

```js
const disbotapi = require("disbotapi")
const disbot = new disbotapi("BOT_API_TOKEN")
disbot.getBot('BOT_ID').then(async (res) => {
    console.log(await res.json())
});
```

## Example Output (getBot)

```json
{
    "id": "770480621263912970",
    "username": "GoogBot",
    "creator": "Beefer#3014",
    "owners": "null",
    "servers": 15,
    "library": "discord.js",
    "votes": 3,
    "tags": [
        "Fun"
    ],
    "certified": "No",
    "prefix": "!",
    "prefixType": "Customizable",
    "avatar": "https://cdn.discordapp.com/avatars/770480621263912970/aac909d9d5dbdc0f3955631d053d9457.png?size=512",
    "websiteLink": "https://botguys.net/googbot",
    "inviteLink": "https://botguys.net/googbot/i",
    "githubLink": "null",
    "donateLink": "null",
    "short": "Just an simple meme for people to use! Go google it haha!",
    "long": "<h2>About</h2>\n<p class=\"botDescP\">It's just a simple one command bot, That displays greatness.</p>\n<hr class=\"botDescHR\" />\n<h2>Commands</h2>\n<ul class=\"botDescul\">\n<li class=\"botDescli\"><code>!googit</code></li>\n</ul>\n"
}
```

---

## Get Bot Votes

```js
const disbotapi = require("disbotapi")
const disbot = new disbotapi("BOT_API_TOKEN")
disbot.getBotVotes('BOT_ID').then(async (res) => {
    console.log(await res.json())
});
```

## Example Output (getBotVotes)

```json
[
    {
        "voterId": "329858985589080064",
        "rating": 5,
        "date": "Tue Dec 01 2020 03:07:11 GMT+0100 (Central European Standard Time)"
    },
    {
        "voterId": "282762192544333827",
        "rating": 4,
        "date": "Tue Dec 01 2020 04:52:07 GMT+0100 (Central European Standard Time)"
    },
    {
        "voterId": "683321216630521898",
        "rating": 1,
        "date": "Sun Jun 06 2021 12:05:26 GMT+0000 (Coordinated Universal Time)"
    }
]
```

---

## Get User

```js
const disbotapi = require("disbotapi")
const disbot = new disbotapi("BOT_API_TOKEN")
disbot.getUser('USER_ID').then(async (res) => {
    console.log(await res.json())
});
```

## Example Output (getUser)
```json
{
    "user": {
        "id": "329858985589080064",
        "username": "Beefer",
        "avatar": "https://cdn.discordapp.com/avatars/329858985589080064/5f4bbc429841295e91620c7387ef7ee4?size=512",
        "permission": "Administrator",
        "blacklisted": "No",
        "postban": "No",
        "bio": "Disbot.top - Admin / Developer"
    },
    "socials": {
        "discord": "https://disbot.top/discord",
        "twitter": "https://disbot.top/twitter",
        "github": "null"
    }
}
```

**Where can I find the auth token?**

You can find your auth token via the API page on the disbot.top website

https://disbot.top/api/bottokens
*(Ensure you're logged in.)*

--- 
