module.exports = (bot, member) => {
    const channel = member.guild.channels.cache.find(ch => ch.name === '☕hoot-cafe');
    if (!channel) return;
    channel.send(`${member} has left hoot cafe.`);
}