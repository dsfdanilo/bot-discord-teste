const { EmbedBuilder } = require('discord.js');
const { useMainPlayer, useQueue  } = require('discord-player');

module.exports = {
    name: 'resume',
    description: 'Retomar a música',
    voiceChannel: true,

    execute({ inter }) {
        const player = useMainPlayer()

const queue = useQueue(inter.guild);

        if (!queue) return inter.editReply({ content: `Não há nenhuma música tocando, ${inter.member}... ? ❌`, ephemeral: true });
        

        if(queue.node.isPlaying()) return inter.editReply({content: `A música já está tocando, ${inter.member}... ❌`, ephemeral: true})

        const success = queue.node.resume();
        
        const ResumeEmbed = new EmbedBuilder()
        .setAuthor({name: success ? `A música ${queue.currentTrack.title} começou a tocar novamente ✅` : `Algo deu errado, ${inter.member}... ❌` })
        .setColor('#2f3136')
        
        return inter.editReply({ embeds: [ResumeEmbed] });

    },
};
