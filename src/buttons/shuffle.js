const { EmbedBuilder } = require('discord.js');
module.exports = async ({ client, inter, queue }) => { 
    if (!queue || !queue.isPlaying()) return inter.editReply({ content: `Não há nenhuma música tocando! ❌`, ephemeral: true });

    if (!queue.tracks.toArray()[0]) return inter.editReply({ content: `Nenhuma música tocou antes dessa!  ${inter.member}... tentar novamente ? ❌`, ephemeral: true });

        await queue.tracks.shuffle();

        const ShuffleEmbed = new EmbedBuilder()
        .setColor('#2f3136')
        .setAuthor({name: `Modo aleatório com ${queue.tracks.size} música(s)w! ✅` })


       return inter.editReply({ embeds: [ShuffleEmbed], ephemeral: true});
}