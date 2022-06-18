module.exports = {
    name: 'save',
    aliases: ['sv'],
    utilisation: '{prefix}save',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No hay música en este momento ${message.author}... ¿Intentar de nuevo? ❌`);

        message.author.send(`Guardaste la cancion: **${queue.current.title} | ${queue.current.author}** del servidor ${message.guild.name} ✅`).then(() => {
            message.channel.send(`Te he enviado el título de la música por mensaje privado ✅`);
        }).catch(error => {
            message.channel.send(`No puedo enviarte un mensaje privado ${message.author}... ¿Intentar de nuevo? ❌`);
        });
    },
};