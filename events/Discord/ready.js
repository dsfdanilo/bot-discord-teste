module.exports = async (client) => {
    console.log(`Entrou como ${client.user.username}!`);
    client.user.setActivity(client.config.app.playing);   
};