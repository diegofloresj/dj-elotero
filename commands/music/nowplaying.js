const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    utilisation: '{prefix}nowplaying',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No hay música reproduciéndose actualmente ${message.author}... intentas otra vez? ❌`);

        const track = queue.current;
        const methods = ['disabled', 'track', 'queue'];
        const timestamp = queue.getPlayerTimestamp();
        const trackDuration = timestamp.progress == 'Infinity' ? 'infinity (live)' : track.duration;

        const nowPlaying = new MessageEmbed()

        .setColor('RANDOM')
        .setThumbnail(track.thumbnail)
        .setAuthor({ name: track.title + ' - ' + track.author })
        .setDescription(`Volumen **${queue.volume}**%\nDuracion **${trackDuration}**\nLoop **${methods[queue.repeatMode]}**\nPedida por: ${track.requestedBy}`)
        .setTimestamp()
        .setFooter({ text: 'Music comes first - Made with ❤️ for SrElotero'});
        
        const saveButton = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId('saveTrack')
                .setLabel('Guarda la canción ✅')
                .setStyle('SUCCESS'),
        );
        
        message.channel.send({embeds: [nowPlaying], components: [saveButton] });
    },
};
