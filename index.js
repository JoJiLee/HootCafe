const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
const config = require("./config.json");
const cheerio = require("cheerio");
const request = require("request");

bot.commands = new Discord.Collection();
bot.events = new Discord.Collection();
var embed = new Discord.MessageEmbed();

const commandFiles = fs
  .readdirSync("./commands/")
  .filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  bot.commands.set(command.name, command);
}

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    bot.on(eventName, event.bind(null, bot));
  });
});

bot.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  if (message.content.startsWith(config.prefix)) {
    const args = message.content
      .slice(config.prefix.length)
      .trim()
      .split(/ +/);

    const command = args.shift().toLowerCase();

    if (!bot.commands.has(command)) return;

    try {
      bot.commands.get(command).run(bot, message, args);
    } catch (error) {
      console.error(error);
    }
  }
});

const gifs = { 
  "order coffee": "https://cdn.glitch.com/1f3ad41e-6c0c-4160-902b-a50330e419bd%2FCoffee%20cropped.gif?v=1613444146008", 
  "order latte": "https://cdn.glitch.com/1f3ad41e-6c0c-4160-902b-a50330e419bd%2FLatte.gif?v=1613444145762",
  "order muffin": "https://cdn.glitch.com/1f3ad41e-6c0c-4160-902b-a50330e419bd%2FMuffin.gif?v=1613444146225",
  "order strawberry cake roll": "https://cdn.glitch.com/1f3ad41e-6c0c-4160-902b-a50330e419bd%2FStrawberry%20cake%20roll.gif?v=1613444145762",
  "order strawberry mousse slice": "https://cdn.glitch.com/1f3ad41e-6c0c-4160-902b-a50330e419bd%2FStrawberry%20mousse%20slice.gif?v=1613444145801",
  "order shio ramen": "https://cdn.glitch.com/1f3ad41e-6c0c-4160-902b-a50330e419bd%2FShio%20ramen.gif?v=1613444145874",
  "order rilakkuma pancake": "https://cdn.glitch.com/1f3ad41e-6c0c-4160-902b-a50330e419bd%2FRilakkuma%20pancakes.gif?v=1613444145762",
  "order raspberry pudding": "https://cdn.glitch.com/1f3ad41e-6c0c-4160-902b-a50330e419bd%2FRaspberry%20pudding.gif?v=1613444145762",
  "order pancakes": "https://cdn.glitch.com/1f3ad41e-6c0c-4160-902b-a50330e419bd%2FPancakes.gif?v=1613444145762",
  "order hot cocoa": "https://cdn.glitch.com/1f3ad41e-6c0c-4160-902b-a50330e419bd%2FHot%20cocoa.gif?v=1613444146113",
  "order bento": "https://cdn.glitch.com/1f3ad41e-6c0c-4160-902b-a50330e419bd%2FBento.gif?v=1613444145961",
  "order calpico": "https://cdn.glitch.com/1f3ad41e-6c0c-4160-902b-a50330e419bd%2FCalpico%20White%20Peach.gif?v=1613502107432",
  "order boba milk tea": "https://cdn.glitch.com/1f3ad41e-6c0c-4160-902b-a50330e419bd%2FPearl%20Milk%20Tea.gif?v=1613502114564",
  "order banana milk": "https://cdn.glitch.com/1f3ad41e-6c0c-4160-902b-a50330e419bd%2FBanana%20milk.png?v=1613444145808",
  "order bodily fluids": "https://cdn.glitch.com/1f3ad41e-6c0c-4160-902b-a50330e419bd%2FBodily%20fluids.gif?v=1613695791308",
  "order mochi donut":"https://cdn.glitch.com/1f3ad41e-6c0c-4160-902b-a50330e419bd%2FMochi%20donut%20(Pon-de-Ring).gif?v=1614037926029",
  "order sushi set":"https://cdn.glitch.com/1f3ad41e-6c0c-4160-902b-a50330e419bd%2FSushi%20set.gif?v=1614037926229",
  "order supreme pizza":"https://cdn.glitch.com/1f3ad41e-6c0c-4160-902b-a50330e419bd%2FWhole%20supreme%20pizza.gif?v=1614037926427",
  "order torchic egg on toast":"https://cdn.glitch.com/1f3ad41e-6c0c-4160-902b-a50330e419bd%2FTorchic%20egg%20on%20toast.gif?v=1614037926029",
  "order pink lemonade":"https://cdn.glitch.com/1f3ad41e-6c0c-4160-902b-a50330e419bd%2FPink%20lemonade.gif?v=1614037926281",
  "order pepperoni pizza slice":"https://cdn.glitch.com/1f3ad41e-6c0c-4160-902b-a50330e419bd%2FPepperoni%20pizza%20slice.gif?v=1614037926253",
  "order matcha latte":"https://cdn.glitch.com/1f3ad41e-6c0c-4160-902b-a50330e419bd%2FMatcha%20latte%20with%20whipped%20cream.gif?v=1614037926064",
  "order iced lemon tea for two":"https://cdn.glitch.com/1f3ad41e-6c0c-4160-902b-a50330e419bd%2FIced%20lemon%20tea%20for%20two.png?v=1614037926056",
  "order iced lemon tea for 2":"https://cdn.glitch.com/1f3ad41e-6c0c-4160-902b-a50330e419bd%2FIced%20lemon%20tea%20for%20two.png?v=1614037926056",
  "order donut":"https://cdn.glitch.com/1f3ad41e-6c0c-4160-902b-a50330e419bd%2FDonut.gif?v=1614037926029",
  "order custard pudding":"https://cdn.glitch.com/1f3ad41e-6c0c-4160-902b-a50330e419bd%2FCustard%20pudding.gif?v=1614037926029",
};

const REPLIES_LIST = [
    "Here's your order!",
    "Enjoy!",
    "Here you go!",
    "Let me know if you need anything else!",
    "You've been served.",
    "bitch",
    "*shit worker says*",
    "That'll be $3.50.",
    "That'll be $5.50", 
];

const GREETING_LIST = [
    "Coming right up!",
    "I'll be right with you!",
    "Give me a moment",
    "Please wait while I create your order!"
];

bot.on("message", message => { 
  if (message.author.bot) return;
  
  const { channel, content, reply: messageReply} = message;
  const greeting = GREETING_LIST[Math.floor(Math.random() * GREETING_LIST.length)];

  Object.keys(gifs).forEach(key => { 
   if(content.toLowerCase().includes(key)) {
    channel.send(greeting).then(msg => {
      msg.delete({ timeout: 5000 })
    }).catch(console.error);

    const response = REPLIES_LIST[Math.floor(Math.random() * REPLIES_LIST.length)];

     setTimeout(function(){
      message.reply(response);
      message.channel.send(gifs[key]);
    }, 5000);
   }
  });
});

bot.login(process.env.token);