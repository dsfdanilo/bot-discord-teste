const { EmbedBuilder } = require('discord.js');
const { useMainPlayer, useQueue  } = require('discord-player');

module.exports = {
    name: 'lyrics',
    description: 'Veja a letra da música atual!',
    voiceChannel: true,

    async execute({ inter }) {
        const player = useMainPlayer()

const queue = useQueue(inter.guild);

        if (!queue || !queue.isPlaying()) return inter.editReply({ content: `Não há nenhuma música tocando, ${inter.member}... ❌`, ephemeral: true });
        
        try {
        
        const search = await genius.songs.search(queue.currentTrack.title); 

        const song = search.find(song => song.artist.name.toLowerCase() === queue.currentTrack.author.toLowerCase());
        if (!song) return inter.editReply({ content: `Não há letra para a ${queue.currentTrack.title}... ❌`, ephemeral: true });
        const lyrics = await song.lyrics();
        const embeds = [];
        for (let i = 0; i < lyrics.length; i += 4096) {
            const toSend = lyrics.substring(i, Math.min(lyrics.length, i + 4096));
            embeds.push(new EmbedBuilder()
                .setTitle(`Lyrics for ${queue.currentTrack.title}`)
                .setDescription(toSend)
                .setColor('#2f3136')
                .setTimestamp()
                .setFooter({ text: 'Aqui está a letra da música!', iconURL: inter.member.avatarURL({ dynamic: true })})
                );
        }
        return inter.editReply({ embeds: embeds });

    } catch (error) {
            inter.editReply({ content: `Error! Please contact Developers! | ❌`, ephemeral: true });
    } 
    },
};

