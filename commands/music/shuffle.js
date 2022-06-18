module.exports = {
    name: 'shuffle',
    aliases: ['sf'],
    utilisation: '{prefix}shuffle',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No hay música reproduciéndose actualmente ${message.author}... intentar otra vez? ❌`);

        if (!queue.tracks[0]) return message.channel.send(`No hay música en la cola ${message.author}... ¿intentar de nuevo? ❌`);

        await queue.shuffle();

        return message.channel.send(`Cola aleatoria **${queue.tracks.length}** cancion(es) ! ✅`);
    },
};