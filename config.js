module.exports = {
    app: {
        px: '>',
        token: 'OTg3NDAxMTU2NzU2MTE5NjUy.GSv-qR.4t-UJ0AH3tYz7x-XVXChP6j0elbXS7HrToGS4U',
        playing: 'DJ Elotero'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
