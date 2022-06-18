module.exports = {
    name: 'resume',
    aliases: ['rs'],
    utilisation: '{prefix}resume',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`No hay música reproduciéndose actualmente ${message.author}... intentas otra vez? ❌`);

        const success = queue.setPaused(false);

        return message.channel.send(success ? `La canción ${queue.current.title} continua sonando ahora ✅` : `Algo salio mal ${message.author}... Intenta nuevamente ❌`);
    },
};