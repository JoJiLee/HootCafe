const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
const config = require("./config.json");

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
  "order coffee": "https://cdn.glitch.com/f95f67f6-548e-4abc-9ebf-38b5a58f2885%2Fcoffee.gif?v=1624959795212", 
  "order latte": "https://cdn.glitch.com/f95f67f6-548e-4abc-9ebf-38b5a58f2885%2Flatte.gif?v=1624959817760",
  "order muffin": "https://cdn.glitch.com/f95f67f6-548e-4abc-9ebf-38b5a58f2885%2Fmuffin.gif?v=1624959828091",
  "order strawberry cake roll": "https://cdn.glitch.com/f95f67f6-548e-4abc-9ebf-38b5a58f2885%2Fstrawberry%20cake%20roll.gif?v=1624959855685",
  "order strawberry mousse slice": "https://cdn.glitch.com/f95f67f6-548e-4abc-9ebf-38b5a58f2885%2Fstrawberry%20mousse%20slice.gif?v=1624959858382",
  "order shio ramen": "https://cdn.glitch.com/f95f67f6-548e-4abc-9ebf-38b5a58f2885%2Fshio%20ramen.gif?v=1624959852977",
  "order rilakkuma pancake": "https://cdn.glitch.com/f95f67f6-548e-4abc-9ebf-38b5a58f2885%2Frilakkuma%20pancakes.gif?v=1624959850431",
  "order raspberry pudding": "https://cdn.glitch.com/f95f67f6-548e-4abc-9ebf-38b5a58f2885%2Fraspberry%20pudding.gif?v=1624959847280",
  "order pancakes": "https://cdn.glitch.com/f95f67f6-548e-4abc-9ebf-38b5a58f2885%2Fpancakes.gif?v=1624959835311",
  "order hot cocoa": "https://cdn.glitch.com/f95f67f6-548e-4abc-9ebf-38b5a58f2885%2Fhot%20cocoa.gif?v=1624959813096",
  "order bento": "https://cdn.glitch.com/f95f67f6-548e-4abc-9ebf-38b5a58f2885%2Fbento.gif?v=1624959783793",
  "order calpico": "https://cdn.glitch.com/f95f67f6-548e-4abc-9ebf-38b5a58f2885%2Fcalpico%20white%20peach.gif?v=1624959791098",
  "order boba milk tea": "https://cdn.glitch.com/f95f67f6-548e-4abc-9ebf-38b5a58f2885%2Fpearl%20milk%20tea.gif?v=1624959838385",
  "order banana milk": "https://cdn.glitch.com/f95f67f6-548e-4abc-9ebf-38b5a58f2885%2Fbanana%20milk.png?v=1624959781059",
  "order bodily fluids": "https://cdn.glitch.com/f95f67f6-548e-4abc-9ebf-38b5a58f2885%2Fbodily%20fluids.gif?v=1624959788831",
  "order mochi donut":"https://cdn.glitch.com/f95f67f6-548e-4abc-9ebf-38b5a58f2885%2Fmochi%20donut.gif?v=1624959823869",
  "order sushi set":"https://cdn.glitch.com/f95f67f6-548e-4abc-9ebf-38b5a58f2885%2Fsushi%20set.gif?v=1624959860796",
  "order supreme pizza":"https://cdn.glitch.com/f95f67f6-548e-4abc-9ebf-38b5a58f2885%2Fwhole%20supreme%20pizza.gif?v=1624959866563",
  "order torchic egg on toast":"https://cdn.glitch.com/f95f67f6-548e-4abc-9ebf-38b5a58f2885%2Ftorchic%20egg%20on%20toast.gif?v=1624959863682",
  "order pink lemonade":"https://cdn.glitch.com/f95f67f6-548e-4abc-9ebf-38b5a58f2885%2Fpink%20lemonade.gif?v=1624959844232",
  "order pepperoni pizza slice":"https://cdn.glitch.com/f95f67f6-548e-4abc-9ebf-38b5a58f2885%2Fpepperoni%20pizza%20slice.gif?v=1624959841430",
  "order matcha latte":"https://cdn.glitch.com/f95f67f6-548e-4abc-9ebf-38b5a58f2885%2Fmatcha%20latte%20with%20whipped%20cream.gif?v=1624959821279",
  "order iced lemon tea for two":"https://cdn.glitch.com/f95f67f6-548e-4abc-9ebf-38b5a58f2885%2Ficed%20lemon%20tea%20for%20two.png?v=1624959815399",
  "order iced lemon tea for 2":"https://cdn.glitch.com/f95f67f6-548e-4abc-9ebf-38b5a58f2885%2Ficed%20lemon%20tea%20for%20two.png?v=1624959815399",
  "order donut":"https://cdn.glitch.com/f95f67f6-548e-4abc-9ebf-38b5a58f2885%2Fdonut.gif?v=1624959799180",
  "order custard pudding":"https://cdn.glitch.com/f95f67f6-548e-4abc-9ebf-38b5a58f2885%2Fcustard%20pudding.gif?v=1624959797130",
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