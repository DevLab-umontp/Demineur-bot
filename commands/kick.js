const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kick')
		.setDescription('Sélectionnez un membre et excluez-le (mais pas vraiment).')
		.addUserOption(option => option.setName('cible').setDescription('Le membre à exclure')),
	async execute(interaction) {
		const user = interaction.options.getUser('cible');
		return interaction.reply({ content: `Vous voulez exclure : ${user.username}`, ephemeral: true });
	},
};
