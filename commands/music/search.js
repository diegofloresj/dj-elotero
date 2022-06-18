const { MessageEmbed } = require('discord.js');
const { QueryType } = require('discord-player');

module.exports = {
    name: 'search',
    aliases: ['srch'],
    utilisation: '{prefix}search [song name]',
    voiceChannel: true,

    async execute(client, message, args) {
        if (!args[0]) return message.channel.send(`Please enter a valid search ${message.author}... Intente nuevamente ❌`);

        const res = await player.search(args.join(' '), {
            requestedBy: message.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return message.channel.send(`No results found ${message.author}... Intente nuevamente ❌`);

        const queue = await player.createQueue(message.guild, {
            metadata: message.channel
        });
        const maxTracks = res.tracks.slice(0, 10);
        
        const embed = new MessageEmbed();

        embed.setColor('RED');
        embed.setAuthor(`Resultados para: ${args.join(' ')}`, client.user.displayAvatarURL({ size: 1024, dynamic: true }));
        embed.setDescription(`${maxTracks.map((track, i) => `**${i + 1}**. ${track.title} | ${track.author}`).join('\n')}\n\nSeleccione la opción entre **1** y **${maxTracks.length}** o **cancelar** ⬇️`);
        embed.setTimestamp();
        embed.setFooter('Music comes first - Made with ❤️ for SrElotero');

        message.channel.send({ embeds: [embed] });

        const collector = message.channel.createMessageCollector({
            time: 15000,
            errors: ['time'],
            filter: m => m.author.id === message.author.id
        });

        collector.on('collect', async (query) => {
            if (query.content.toLowerCase() === 'cancelar') return message.channel.send(`Busqueda cancelada ✅`) && collector.stop();

            const value = parseInt(query.content);

            if (!value || value <= 0 || value > maxTracks.length) return message.channel.send(`Respuesta invalida, intenta en un valor de **1** y **${maxTracks.length}** o **cancelar** Intente nuevamente ❌`);

            collector.stop();

            try {
                if (!queue.connection) await queue.connect(message.member.voice.channel);
            } catch {
                await player.deleteQueue(message.guild.id);
                return message.channel.send(`No puedo conectarme al canal de voz ${message.author}... Intente nuevamente ❌`);
            }

            await message.channel.send(`Cargando tu busqueda... 🎧`);

            queue.addTrack(res.tracks[query.content - 1]);

            if (!queue.playing) await queue.play();
        });

        collector.on('end', (msg, reason) => {
            if (reason === 'time') return message.channel.send(`Tiempo de busqueda expirado ${message.author}... Intente nuevamente ❌`);
        });
    },
};


/*
const searchRes = new MessageEmbed()

.setColor('RANDOM')
.setAuthor({ title: `Results for ${args.join(' ')}`, icon_url: client.user.displayAvatarURL({ size: 1024, dynamic: true }) })
.setDescription(`${maxTracks.map((track, i) => `**${i + 1}**. ${track.title} | ${track.author}`).join('\n')}\n\nSeleccione la opción entre **1** y **${maxTracks.length}** o **cancelar** ⬇️`)
.setFooter({ text: 'Music comes first - Made with ❤️ for SrElotero'})
.setTimestamp()
message.channel.send({ embeds: [searchRes] });
*/