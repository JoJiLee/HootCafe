const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "secret",
    description: "Secret Menu",

    async run (bot, message, args){

          if(args[0] === 'menu'){

            const secret = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setThumbnail('https://cdn.glitch.com/1f3ad41e-6c0c-4160-902b-a50330e419bd%2Fblush.png?v=1613695358221')
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