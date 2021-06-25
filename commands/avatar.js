const Discord = require('discord.js');

module.exports = {
  name: 'avatar',
  description: "Grabs User's Avatar",
  
  async run(bot, message, args){
       let member = message.mentions.users.first() || message.author

        let avatar = member.displayAvatarURL({size: 1024,dynamic : true})


        const avatarEmbed = new Discord.MessageEmbed()
        .setTitle(`${member.username}'s avatar`)
        .setImage(avatar)
        .setColor("RANDOM")

        message.channel.send(avatarEmbed);
    }
    
}