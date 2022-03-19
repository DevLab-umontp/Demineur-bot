// INITIALISATION
// Initialisation des modules requis
const fs = require('node:fs');
const { Client, Collection, Intents } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });


// Initialisation des commandes
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

// ÉVÉNEMENTS

// On start
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



// On commande
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'Oupss ... Une erreur c\'est produite, veuillez réessayer', ephemeral: true });
	}
});


// Lancement du bot
client.login(token);

