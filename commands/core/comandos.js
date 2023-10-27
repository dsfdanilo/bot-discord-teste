const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'comandos',
    description: "Todos os comandos do bot estão aqui!",
    showHelp: false,

    execute({ client, inter }) {
        const commands = client.commands.filter(x => x.showHelp !== false);
        
        const embed = new EmbedBuilder()
        .setColor('#ff0000')
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true }) })
        .setDescription('Todos os comandos do bot estão aqui!')
        .addFields([ { name: `Ativado: ${commands.size}`, value: commands.map(x => `\`${x.name}\``).join(' | ') } ])
        .setTimestamp()
        .setFooter({ text: 'Faça o bom uso do piranho!', iconURL: inter.member.avatarURL({ dynamic: true })});

        inter.editReply({ embeds: [embed] });
    },
};