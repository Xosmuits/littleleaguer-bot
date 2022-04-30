const Discord = require("discord.js")

require("dotenv").config()

const client = new Discord.Client({
    intents: [
         "GUILDS",
         "GUILD_MESSAGES"
    ]
})

let bot = {
    client
}

client.on("ready", () => {
    console.log(`${client.user.tag} is now online`)
})

//
//client.on("messageCreate", (message) => {
    //if (message.content == "hi"){
    //    message.reply("as")
  //  }

//})

client.login(process.env.TOKEN)

const TOKEN ="OTY5NTc2MzAxMzUyNjExODgw.YmvaTA.G0eQm35wMTi8mJFnnetZStzITrs"

