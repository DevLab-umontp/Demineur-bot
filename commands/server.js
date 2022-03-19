const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Afficher les informations du serveur.'),
	async execute(interaction) {
		return interaction.reply(`Nom du serveur : ${interaction.guild.name}\nNombre de membres: ${interaction.guild.memberCount}`);
	},
};
