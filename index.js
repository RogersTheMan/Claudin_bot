// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');





// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection()

for (const file of commandsFile){
	const filePath = path.join(commandsPath, file)
	const commands = require(filePath)
	if ("data" in commands && "execute" in commands){
		client.commands.set(commands.data.name, commands)
	} else {
		console.log(`Esse comando em ${filePath} está com "data" ou "execute" ausentes!`)
	}
}

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
	console.log(`Pronto! Logado como ${c.user.tag}`);
});

// Log in to Discord with your client's token
client.login(TOKEN);

// Listeners de interações com o bot!

client.on(Events.InteractionCreate, interaction => {
	if (!interaction.isChatInputCommand()) return
	console.log(interaction)
})
