module.exports = {
    app: {
        token: 'MTA5NDk4NzA1NDk5NzMxNTY1NA.Gpe6nY.By3fACrHN8y1JKqvfS2pUIrBvl12OGLtZz2cY0',
        playing: 'LinkedIn 🔥',
        global: true,
        guild: 'xxx',
        ExtraMessages: false,
        loopMessage: false,

    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        spotifyBridge: true,
        volume: 75,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 30000,
        leaveOnEnd: true,
        leaveOnEndCooldown: 30000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
