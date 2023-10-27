const { EmbedBuilder } = require('discord.js');
const { useMainPlayer, useQueue  } = require('discord-player');

module.exports = {
    name: 'pause',
    description: 'Pare de tocar a música!',
    voiceChannel: true,

    execute({ inter }) {
const queue = useQueue(inter.guild);
        const player = useMainPlayer()

        if (!queue) return inter.editReply({ content: `Não há nenhuma música tocando, ${inter.member}... ❌`, ephemeral: true });
        
        if(queue.node.isPaused()) return inter.editReply({content: `A música está parada, ${inter.member}... ❌`, ephemeral: true})

        const success = queue.node.setPaused(true);
        
        const PauseEmbed = new EmbedBuilder()
        .setAuthor({name: success ? `A música ${queue.currentTrack.title} foi pausada! ✅` : `Algo deu errado, ${inter.member}... ❌` })
        .setColor('#2f3136')
        
        return inter.editReply({ embeds: [PauseEmbed] });
    },
};
// embed update stoped here