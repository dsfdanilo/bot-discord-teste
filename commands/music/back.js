const { EmbedBuilder } = require('discord.js');
const { useMainPlayer, useQueue  } = require('discord-player');
module.exports = {
    name: 'back',
    description: "Volte para a música de antes!",
    voiceChannel: true,

    async execute({ inter }) {
        const player = useMainPlayer()

const queue = useQueue(inter.guild);

        if (!queue || !queue.node.isPlaying()) return inter.editReply({ content: `Nenhuma música está tocando atualmente, ${inter.member}... ❌`, ephemeral: true });

        if (!queue.history.previousTrack) return inter.editReply({ content: `Nenhuma música tocou antes dessa, ${inter.member}... ❌`, ephemeral: true });

        await queue.history.back();

        const BackEmbed = new EmbedBuilder()
        .setAuthor({name: `Tocando a música anterior ✅`})
        .setColor('#2f3136')

        inter.editReply({ embeds: [BackEmbed] });
    },
};