module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.isPlaying()) return inter.editReply({ content: `Não há nenhuma música tocando! ❌`, ephemeral: true });
    
    const success = queue.node.skip();

    return inter.editReply({ content: success ? `A música ${queue.currentTrack.title} foi pulada! ✅` : `Algo deu errado ${inter.member}... ❌`, ephemeral: true});
}