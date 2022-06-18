const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h'],
    showHelp: false,
    utilisation: '{prefix}help',

    execute(client, message, args) {

        const commands = client.commands.filter(x => x.showHelp !== false);
        const helpEmbed = new MessageEmbed()

        .setColor('RANDOM')
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true })})
        .addFields(
            { name: `Comandos activados: ${commands.size}`, value: commands.map(x => `\`${x.name}${x.aliases[0] ? ` (${x.aliases.map(y => y).join(', ')})\`` : '\`'}`).join(' | ')}
        )
        .setTimestamp()
        .setFooter({ text: 'Music comes first - Made with ❤️ for SrElotero'});

    message.channel.send({ embeds: [helpEmbed] });

    },
};

    
