const { EmbedBuilder } = require('discord.js');
module.exports = async ({ client, inter, queue }) => { 
    if (!queue || !queue.isPlaying()) return inter.editReply({ content: `Não há nenhuma música tocando! ❌`, ephemeral: true });

    queue.delete();

        const StopEmbed = new EmbedBuilder()
        .setColor('#2f3136')
        .setAuthor({name: `O piranho parou de tocar. Volto em breve! ✅` })


       return inter.editReply({ embeds: [StopEmbed], ephemeral: true });

}