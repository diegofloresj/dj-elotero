const ms = require('ms');

module.exports = {
    name: 'seek',
    aliases: ['sk'],
    utilisation: '{prefix}seek [time]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No hay música reproduciéndose actualmente ${message.author}... intentas otra vez? ❌`);

        const timeToMS = ms(args.join(' '));

        if (timeToMS >= queue.current.durationMS) return message.channel.send(`El tiempo indicado es superior al tiempo total de la canción actual${message.author}... Intente nuevamente ❌\n*Pruebe, por ejemplo, un tiempo válido como **5s, 10s, 20 segundos, 1m**...*`);

        await queue.seek(timeToMS);

        message.channel.send(`Tiempo establecido en la canción actual **${ms(timeToMS, { long: true })}** ✅`);
    },
};