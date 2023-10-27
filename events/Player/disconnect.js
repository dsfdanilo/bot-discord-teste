const { EmbedBuilder } = require('discord.js');

module.exports = (queue) => {

 const Disconnect = new EmbedBuilder()
    .setAuthor({name: `Desconectado do canal de voz por inatividade. ❌`})
    .setColor('#2f3136')

queue.metadata.send({ embeds: [Disconnect] })
}
