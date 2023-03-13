// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
const dotenv = require("dotenv")
dotenv.config()
const { TOKEN, CLIENT_ID, GUILD_ID } = process.dotenv

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
	console.log(`Pronto! Logado como ${c.user.tag}`);
});

// Log in to Discord with your client's token
client.login(TOKEN);