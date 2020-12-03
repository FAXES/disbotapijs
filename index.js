const fetch = require("node-fetch");

class disbot {
    constructor(botId, authToken) {
        this.botId = botId;
        this.authToken = authToken;
    }
    async updateStats(serverCount){
        if(serverCount < 0) return console.log(`A servercount param must be supplied.`)
        let body = `serverCount=${serverCount}`;
        await fetch(`https://disbot.top/api/v1/botupdate/${this.botId}`, {
            method: 'POST',
            body: body,
            headers: {'Content-Type': 'application/x-www-form-urlencoded', 'authorization': this.authToken},
        }).then(async (res) => {console.log(await res.json())})
    }
} 

module.exports = disbot;