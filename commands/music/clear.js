module.exports = {
    name: 'clear',
    aliases: ['clr'],
    utilisation: '{prefix}clear',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No hay música reproduciéndose actualmente ${message.author}... intentas otra vez? ❌`);

        if (!queue.tracks[0]) return message.channel.send(`No hay música en la cola después de la actual ${message.author}... intentas otra vez? ❌`);

        await queue.clear();

        message.channel.send(`La cola fue borrada🗑️`);
    },
};