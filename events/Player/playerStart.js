const { ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require('discord.js');
module.exports = (queue, track) => {

    if (!client.config.app.loopMessage && queue.repeatMode !== 0) return;
    const embed = new EmbedBuilder()
    .setAuthor({name: `Começando a tocar ${track.title} em ${queue.channel.name} 🎧 solicitada por ${track.requestedBy.username}`, iconURL: track.thumbnail})
    .setColor('#2f3136')

    const back = new ButtonBuilder()
    .setLabel('Voltar')
    .setCustomId(JSON.stringify({ffb: 'back'}))
    .setStyle('Primary')

    const skip = new ButtonBuilder()
    .setLabel('Pular')
    .setCustomId(JSON.stringify({ffb: 'skip'}))
    .setStyle('Primary')

    const resumepause = new ButtonBuilder()
    .setLabel('Resumir ou Pausar')
    .setCustomId(JSON.stringify({ffb: 'resume&pause'}))
    .setStyle('Danger')

    const loop = new ButtonBuilder()
    .setLabel('Repetir')
    .setCustomId(JSON.stringify({ffb: 'loop'}))
    .setStyle('Secondary')
    
    const lyrics = new ButtonBuilder()
    .setLabel('Letra')
    .setCustomId(JSON.stringify({ffb: 'lyrics'}))
    .setStyle('Secondary')

    const row1 = new ActionRowBuilder().addComponents(back, loop, resumepause, lyrics, skip)
    queue.metadata.send({ embeds: [embed], components: [row1] })

}
