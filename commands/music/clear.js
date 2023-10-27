const { EmbedBuilder } = require('discord.js');
const { useMainPlayer, useQueue} = require('discord-player');

module.exports = {
    name: 'clear',
    description: 'Limpe todas as músicas da fila!',
    voiceChannel: true,

    async execute({ inter }) {
const queue = useQueue(inter.guild);
        const player = useMainPlayer()

        if (!queue || !queue.isPlaying()) return inter.editReply({ content: `Não há nenhuma música tocando, ${inter.member}... ❌`, ephemeral: true });

        if (!queue.tracks.toArray()[1]) return inter.editReply({ content: `Não há nenhuma música na fila depois dessa, ${inter.member}... ❌`, ephemeral: true });

        await queue.tracks.clear();

        const ClearEmbed = new EmbedBuilder()
        .setAuthor({name: `A fila de música foi limpa! 🗑️`})
        .setColor('#2f3136')
        
        inter.editReply({ embeds: [ClearEmbed] });

    },
};