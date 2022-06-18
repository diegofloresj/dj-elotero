module.exports = {
    name: 'progress',
    aliases: ['pbar'],
    utilisation: '{prefix}progress',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No hay música reproduciéndose actualmente ${message.author}... intentas otra vez? ❌`);

        const progress = queue.createProgressBar();
        const timestamp = queue.getPlayerTimestamp();

        if (timestamp.progress == 'Infinity') return message.channel.send(`Reproduciendo en vivo, no hay datos para mostrar 🎧`);

        message.channel.send(`${progress} (**${timestamp.progress}**%)`);
    },
};