const { EmbedBuilder } = require('discord.js');
module.exports = (queue) => {
    const emptyQueue = new EmbedBuilder()
    .setAuthor({name: `Não há mais músicas para tocar! ❌`})
    .setColor('#2f3136')

    queue.metadata.send({ embeds: [emptyQueue] })
}
