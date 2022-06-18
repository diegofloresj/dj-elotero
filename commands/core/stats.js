const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const bot = require("../../package.json");

module.exports = {
  name: "stats",
  aliases: [],
  showHelp: false,
  utilisation: "{prefix}stats",

  execute(client, message, args) {
    let perm = message.member.permissions.has("ADMINISTRATOR");
    if (!perm)
      return message.channel
        .send("No tienes permiso para usar este comando")
        .then((m) => {
          setTimeout(() => m.delete(), 5000);
        });

    const embed = new MessageEmbed()

      .setTitle("Informacion sobre Elotero Bot")
      .setThumbnail(client.user.displayAvatarURL())
      .setColor("RANDOM")
      .addField("> Dueño:", "Owner: ` " + `${bot.author}` + " ` **Actual**")
      .addField("> Version:", " ` " + `v${bot.version}` + " ` **Actual**", true)
      .addField(
        "> Libreria Base:",
        " ` " + `v${Discord.version}` + " ` **Actual**",
        true
      )
      .setTimestamp()
      .setFooter({ text: "Music comes first - Made with ❤️ for SrElotero" });

    message.reply({ embeds: [embed] });
  },
};
