module.exports = {
    name: 'skip',
    aliases: ['nxt'],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No hay música reproduciéndose actualmente ${message.author}... intentas otra vez? ❌`);

        const success = queue.skip();

        return message.channel.send(success ? `La cancion actual ${queue.current.title} fue saltada ✅` : `Algo salio mal ${message.author}... ¿Intentar de nuevo? ❌`);
    },
};