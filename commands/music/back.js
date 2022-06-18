module.exports = {
    name: 'back',
    aliases: ['bk'],
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No hay música reproduciéndose actualmente ${message.author}... intentas otra vez ? ❌`);

        if (!queue.previousTracks[1]) return message.channel.send(`No se encuentra música antes. ${message.author}... intentas otra vez ? ❌`);

        await queue.back();

        message.channel.send(`Reproducción de la pista **anterior** ✅`);
    },
};