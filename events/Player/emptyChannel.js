const { EmbedBuilder } = require('discord.js');
module.exports = (queue) => {

    const emptyChannel = new EmbedBuilder()
    .setAuthor({name: `Ninguém está no canal de voz, estou saindo!  ❌`})
    .setColor('#2f3136')

queue.metadata.send({ embeds: [emptyChannel] })
}
