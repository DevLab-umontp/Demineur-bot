const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('options-info')
		.setDescription('Informations sur les options proposées.')
		.addStringOption(option => option.setName('entree').setDescription('L\'entrée à renvoyer en écho')),
	async execute(interaction) {
		const value = interaction.options.getString('entree');
		if (value) return interaction.reply(`La valeur demandé est : \`${value}\``);
		return interaction.reply('Aucune valeur n\'a été fournie !');
	},
};
