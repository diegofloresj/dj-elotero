module.exports = {
    app: {
        px: '>',
        token: 'OTg3NDAxMTU2NzU2MTE5NjUy.G0cb4_.2vk4qD7kZNCmE_Mrz8zes3aInc_U1_Wkefvz70',
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
