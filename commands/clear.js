const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('clear')
		.setDescription('Effacez jusqu\'à 99 messages.')
		.addIntegerOption(option => option.setName('nombre').setDescription('Nombre de messages à supprimer')),
	async execute(interaction) {
		const amount = interaction.options.getInteger('nombre');

		if (amount <= 1 || amount > 100) {
			return interaction.reply({ content: 'Vous devez entrer un nombre entre 1 et 99.', ephemeral: true });
		}
		await interaction.channel.bulkDelete(amount, true).catch(error => {
			console.error(error);
			interaction.reply({ content: 'Une erreur s\'est produite lors de la tentative de suppression des messages dans ce canal !', ephemeral: true });
		});

		return interaction.reply({ content: `Effacement de \`${amount}\` messages avec succès.`, ephemeral: true });
	},
};
