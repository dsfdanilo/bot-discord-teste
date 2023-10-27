const { EmbedBuilder } = require('discord.js');
const { useMainPlayer, useQueue  } = require('discord-player');

module.exports = {
    name: 'skip',
    description: 'pular a música',
    voiceChannel: true,

    execute({ inter }) {
        const player = useMainPlayer()

const queue = useQueue(inter.guild);

         if (!queue || !queue.isPlaying()) return inter.editReply({ content:`Não há nenhuma música tocando, ${inter.member}... ❌`, ephemeral: true });

        const success = queue.node.skip();

        const SkipEmbed = new EmbedBuilder()
        .setColor('#2f3136')
        .setAuthor({name: success ? `A música ${queue.currentTrack.title} foi pulada! ✅` : `Algo deu errado, ${inter.member}... ❌` })


       return inter.editReply({ embeds: [SkipEmbed] });

    },
};