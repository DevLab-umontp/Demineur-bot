const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Obtenez l\'URL de l\'avatar de l\'utilisateur sélectionné ou votre propre avatar.')
		.addUserOption(option => option.setName('cible').setDescription('L\'utilisateur dot vous voulez l\'avatar')),
	async execute(interaction) {
		const user = interaction.options.getUser('cible');
		if (user) return interaction.reply(`Avatar de ${user.username} : ${user.displayAvatarURL({ dynamic: true })}`);
		return interaction.reply(`Votre avatar: ${interaction.user.displayAvatarURL({ dynamic: true })}`);
	},
};
