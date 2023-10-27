const { EmbedBuilder } = require('discord.js');
const { useMainPlayer, useQueue } = require('discord-player');

module.exports = {
    name: 'history',
    description: 'Veja o histórico de músicas da fila!',
    voiceChannel: false,

    async execute({ inter }) {
const queue = useQueue(inter.guild);
        const player = useMainPlayer()

        if (!queue || queue.history.tracks.toArray().length == 0) return inter.editReply({ content: `Nenhuma música tocou ainda.`, ephemeral: true });

        const tracks = queue.history.tracks.toArray();
        console.log(tracks)
        let description = tracks
            .slice(0, 20)
            .map((track, index) => { return `**${index + 1}.** [${track.title}](${track.url}) by ${track.author}` })
            .join('\r\n\r\n');

        let HistoryEmbed = new EmbedBuilder()
            .setTitle(`historico`)
            .setDescription(description)
            .setColor('#2f3136')
            .setTimestamp()
            .setFooter({ text: 'Aqui está o histórico de músicas da fila', iconURL: inter.member.avatarURL({ dynamic: true })})


        inter.editReply({ embeds: [HistoryEmbed] });

    },
};