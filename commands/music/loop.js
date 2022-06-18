const { QueueRepeatMode } = require('discord-player');

module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    utilisation: '{prefix}loop <queue>',
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No hay música reproduciéndose actualmente ${message.author}... intentas otra vez? ❌`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(`Primero debe deshabilitar la música actual en el modo loop (${client.config.app.px}loop) ${message.author}... intentas otra vez? ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Loop **${queue.repeatMode === 0 ? 'disabled' : 'enabled'}** toda la cola se repetirá sin cesar 🔁` : `Algo salió mal ${message.author}... ¿intentar de nuevo? ❌`);
        } else {
            if (queue.repeatMode === 2) return message.channel.send(`Primero debe desactivar la cola actual en el modo loop (${client.config.app.px}loop queue) ${message.author}... ¿intentar de nuevo? ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Loop **${queue.repeatMode === 0 ? 'disabled' : 'enabled'}** la música actual se repetirá indefinidamente (puedes repetir la cola con la opción <queue>) 🔂` : `Algo salió mal ${message.author}... ¿intentar de nuevo? ❌`);
        };
    },
};