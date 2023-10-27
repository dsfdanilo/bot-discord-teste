module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.isPlaying()) return inter.editReply({ content: `Nenhuma música está tocando... tentar novamente ? ❌`, ephemeral: true });

    if (!queue.history.previousTrack) return inter.editReply({ content: `Nenhuma música tocou antes dessa, ${inter.member}... tentar novamente ? ❌`, ephemeral: true });

    await queue.history.back();

    inter.editReply({ content:`Tocando a música anterior! ✅`, ephemeral: true});
}
