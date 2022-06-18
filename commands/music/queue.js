const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'queue',
    aliases: ['q'],
    utilisation: '{prefix}queue',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`No hay música reproduciéndose actualmente ${message.author}... ¿Intentas otra vez? ❌`);

        if (!queue.tracks[0]) return message.channel.send(`No hay música en la cola después de la actual ${message.author}... ¿Intentas de nuevo? ❌`);

        const methods = ['', '🔁', '🔂'];
        const tracks = queue.tracks.map((track, i) => `**${i + 1}** - ${track.title} | ${track.author} (Pedida por: ${track.requestedBy.username})`);
        const songs = queue.tracks.length;
        const nextSongs = songs > 5 ? `Y **${songs - 5}** canciones más...` : `En la  playlist hay **${songs}** cancion(es)...`;

        const queueServer = new MessageEmbed()

        .setColor('RANDOM')
        .setThumbnail(message.guild.iconURL({ size: 2048, dynamic: true }))
        .setAuthor({ name: `Cola del Servidor - ${message.guild.name} ${methods[queue.repeatMode]}`, icon_url: client.user.displayAvatarURL({ size: 1024, dynamic: true }) })
        .setDescription(`Sonando ahora: _${queue.current.title}\n\n${tracks.slice(0, 5).join('\n')}\n\n${nextSongs}_`)
        .setFooter({ text: 'Music comes first - Made with ❤️ for SrElotero'})
        .setTimestamp()
        
        message.channel.send({embeds: [queueServer] });
    },
};
