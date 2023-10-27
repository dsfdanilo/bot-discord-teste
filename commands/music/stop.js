const { EmbedBuilder } = require('discord.js');
const { useMainPlayer, useQueue  } = require('discord-player');

module.exports = {
    name: 'stop',
    description: 'Parar a música',
    voiceChannel: true,

    execute({ inter }) {
        const player = useMainPlayer()

const queue = useQueue(inter.guild);

        if (!queue || !queue.isPlaying()) return inter.editReply({ content:`Não há nenhuma música tocando, ${inter.member}... ❌`, ephemeral: true });

        queue.delete();

        const StopEmbed = new EmbedBuilder()
        .setColor('#2f3136')
        .setAuthor({name: `O piranho parou de tocar. Volto em breve. ✅` })


       return inter.editReply({ embeds: [StopEmbed] });

    },
};