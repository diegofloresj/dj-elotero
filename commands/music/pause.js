module.exports = {
    name: 'pause',
    aliases: ['ps'],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`No hay música reproduciéndose actualmente ${message.author}... intentas otra vez? ❌`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `La musica actual ${queue.current.title} fue pausada ✅` : `Algo salió mal ${message.author}... ¿intentar de nuevo? ❌`);
    },
};