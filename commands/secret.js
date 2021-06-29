const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "secret",
    description: "Secret Menu",

    async run (bot, message, args){

          if(args[0] === 'menu'){

            const secret = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setThumbnail('https://cdn.glitch.com/f95f67f6-548e-4abc-9ebf-38b5a58f2885%2Fblush.png?v=1624959786796')
            .setTitle('Secret Menu')
            .addField('`Bodily Fluids`', 'But whose is it?')
            .addField('`Torchic Egg on Toast`', 'Is this even legal?')

            const pages = [
                secret
        ]

        const emojiList = ["⏪", "⏩"];
      
        const timeout = '2147483647';

        pagination(message, pages, emojiList, timeout)

        }else{
          message.channel.send("No secrets here!");
        }
    }
}