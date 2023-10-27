const { QueueRepeatMode } = require('discord-player');
module.exports = async ({  inter, queue }) => { 

    const methods = ['desabilitada', 'ativada para a música', 'ativada para a playlist'];

    if (!queue || !queue.isPlaying()) return inter.editReply({ content: `Nenhuma música está tocando... tentar novamente ? ❌`, ephemeral: true });

    const repeatMode = queue.repeatMode

    if (repeatMode === 0) queue.setRepeatMode( QueueRepeatMode.TRACK)

    if (repeatMode === 1 ) queue.setRepeatMode( QueueRepeatMode.QUEUE)

    if (repeatMode === 2) queue.setRepeatMode( QueueRepeatMode.OFF)
    
    return inter.editReply({ content: `A repetição foi ${methods[queue.repeatMode]}. ✅`})



}