module.exports = async ({ inter, queue }) => {
    if (!queue || !queue.isPlaying()) return inter.editReply({ content: `Não há nenhuma música tocando! ❌`, ephemeral: true });

    const resumed = queue.node.resume();
    let message = `A música ${queue.currentTrack.title} foi resumida ✅`;
    
    if (!resumed) {
        queue.node.pause();
        message = `A música ${queue.currentTrack.title} foi pausada ✅`;
    }

    return inter.editReply({
        content: message, ephemeral: true
    });
}