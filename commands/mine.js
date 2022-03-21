const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('mine')
		.setDescription('Génère un plateau de démineur!')
		.addIntegerOption(option => option.setName('niveau').setDescription('Le niveau du jeu')),
	async execute(interaction) {
		const amount = interaction.options.getInteger('niveau');
		if (amount < 5 || amount > 9) {
			return interaction.reply({ content: 'Vous devez entrer un nombre entre 5 et 9.', ephemeral: true });
		}
		let m = Array();
		for(let i = -1; i<=amount;i++) {
			m[i] = Array();
			for(let j = -1; j<=amount;j++) {
				m[i][j] = ' ';
			}
		}
		let cpt=0;
		for(let i = 0; i<amount;i++) {
			for(let j = 0; j<amount;j++) {
				if(Math.random() <= 0.2) {
					m[i][j] = 'x';
					cpt++;
					if(m[i][j-1] == ' ') {m[i][j-1] = 1;} else if (m[i][j-1] !== 'x') {m[i][j-1]++;}
					if(m[i][j+1] == ' ') {m[i][j+1] = 1;} else if (m[i][j+1] !== 'x') {m[i][j+1]++;}
					if(m[i-1][j-1] == ' ') {m[i-1][j-1] = 1;} else if (m[i-1][j-1] !== 'x') {m[i-1][j-1]++;}
					if(m[i-1][j] == ' ') {m[i-1][j] = 1;} else if (m[i-1][j] !== 'x') {m[i-1][j]++;}
					if(m[i-1][j+1] == ' ') {m[i-1][j+1] = 1;} else if (m[i-1][j+1] !== 'x') {m[i-1][j+1]++;}
					if(m[i+1][j-1] == ' ') {m[i+1][j-1] = 1;} else if (m[i+1][j-1] !== 'x') {m[i+1][j-1]++;}
					if(m[i+1][j] == ' ') {m[i+1][j] = 1;} else if (m[i+1][j] !== 'x') {m[i+1][j]++;}
					if(m[i+1][j+1] == ' ') {m[i+1][j+1] = 1;} else if (m[i+1][j+1] !== 'x') {m[i+1][j+1]++;}
				}
			}
		}
		let mes = "";
		for(let i = 0; i<amount;i++) {
			for(let j = 0; j<amount;j++) {
				mes+= "|| `" +  m[i][j] + "` ||";
			}
			mes+="\n";
		}
		mes+="Total : " + cpt + " mine"+((cpt>0)?"s":"");
 		return interaction.reply(mes);
	},
};
