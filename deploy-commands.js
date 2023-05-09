const { REST, Routes } = require("discord.js")

//importacao
const fs = require("node:fs")
const path = require("node:path")

const commandsPath = path.join(__dirname, "commands")
const commandsFile = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"))

const commands = []

for (const file in commands){
    const command = require(`./commands/${file}`)
    commands.push(command.data.toJSON())
}



//dotenv
const dotenv = require("dotenv")
dotenv.config()
const { TOKEN } = process.env

// rest
const rest = new REST({version:"10"}).setToken(TOKEN)

// deploy 
(async () => {})