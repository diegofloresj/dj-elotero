player.on('error', (queue, error) => {
    console.log(`Error emitido desde la cola ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Error emitido desde la conexión ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    queue.metadata.send(`Sonando ahora ${track.title} en **${queue.connection.channel.name}** 🎧`);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`Cancion ${track.title} agregada a la cola ✅`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('Fui desconectado manualmente del canal de voz, borrando cola... ❌');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('Nadie está en el canal de voz, saliendo del canal de voz... ❌');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('Ya no hay canciones en la cola ✅');
});