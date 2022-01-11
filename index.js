const fetch = require("node-fetch");

class disbot {
    constructor(authToken, debug) {
        this.authToken = authToken;
        this.debug = debug;
    }
    async updateStats(botId, serverCount){
        if(botId < 0) return console.log(`A botId must be supplied.`)
        if(serverCount < 0) return console.log(`A servercount must be supplied.`)
        let body = `serverCount=${serverCount}`;
        await fetch(`https://disbot.top/api/v3/bot/${botId}/update`, {
            method: 'POST',
            body: body,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'authorization': this.authToken },
        }).then(async (res) => {
            if(this.debug) {
                console.log(await res.json())
            }
        })
    }
    async getBot(botId) {
        if(botId < 0) return console.log(`A botId must be supplied.`)
        return await fetch(`https://disbot.top/api/v3/bot/${botId}/get`, {
            method: "GET",
            headers: { 'Content-Type': `application/json`, 'authorization': this.authToken },
        })
    }
    async getBotVotes(botId) {
        if(bot < 0) return console.log(`A botId must be supplied.`)
        return await fetch(`https://disbot.top/api/v3/bot/${botId}/votes/get`, {
            method: "GET",
            headers: { 'Content-Type': 'application/json', 'authorization': this.authToken },
        })
    }
    async getUser(userId) {
        if(userId < 0) return console.log(`A userId must be supplied.`)
        return await fetch(`https://disbot.top/api/v3/user/${userId}/get`, {
            method: "GET",
            headers: { 'Content-Type': 'application/json', 'authorization': this.authToken },
        })
    }
} 

module.exports = disbot;
