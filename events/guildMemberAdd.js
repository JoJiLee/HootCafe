module.exports = (bot, member) => {
  
  console.log('User ' + member.user.username + ' has joined the server!')
    const channel = member.guild.channels.cache.find(ch => ch.name === '☕hoot-cafe');
    if (!channel) return;
    channel.send(`${member} enters hoot cafe.`);
}