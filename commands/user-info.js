const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user-info')
		.setDescription('Afficher des informations sur vous-même.'),
	async execute(interaction) {
		return interaction.reply(`Votre pseudo : ${interaction.user.username}\nVotre identifiant : ${interaction.user.id}`);
	},
};
