module.exports = {
    name: 'stop',
    aliases: ['stp'],
    utilisation: '{prefix}stop',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No hay música reproduciéndose actualmente ${message.author}... intentas otra vez? ❌`);

        queue.destroy();

        message.channel.send(`La música se detuvo en este servidor, hasta la próxima ✅`);
    },
};