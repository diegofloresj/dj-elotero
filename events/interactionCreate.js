module.exports = (client, int) => {
    if (!int.isButton()) return;

    const queue = player.getQueue(int.guildId);

    switch (int.customId) {
        case 'saveTrack': {
            if (!queue || !queue.playing) return int.reply({ content: `No hay música en este momento... ¿Intentar de nuevo? ❌`, ephemeral: true, components: [] });

            int.member.send(`Guardaste la cancion: **${queue.current.title} | ${queue.current.author}** del servidor ${int.member.guild.name} ✅`).then(() => {
                return int.reply({ content: `Te he enviado el título de la música por mensaje privado ✅`, ephemeral: true, components: [] });
            }).catch(error => {
                return int.reply({ content: `No puedo enviarte un mensaje privado... ¿Intentar de nuevo? ❌`, ephemeral: true, components: [] });
            });
        }
    }
};