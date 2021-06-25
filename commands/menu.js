const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "menu",
    description: "Menu",

    async run (bot, message, args){
        
        const front = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setImage("https://cdn.glitch.com/1f3ad41e-6c0c-4160-902b-a50330e419bd%2Ffront.png?v=1613459542967")
      
        const drinks = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setThumbnail('https://cdn.glitch.com/1f3ad41e-6c0c-4160-902b-a50330e419bd%2Fcoffee%20can.png?v=1613452167786')
        .setTitle('Drinks')
        .addField('`Banana Milk`', 'Banana Flavored Milk')
        .addField('`Coffee`', ' Roasted Coffee Beans')
        .addField('`Hot Cocoa`', 'Drinking Chocolate')
        .addField('`Latte`', 'Coffee drink made with Espresso and Steamed Milk')
        .addField('`Calpico`', 'Uncarbonated soft drink that has a light, somewhat milky, and slightly acidic flavor')
        .addField('`Boba Milk Tea`', 'Tea with milk that includes chewy balls')
        .addField('`Pink Lemonade`', 'Made from pink lemons')
        .addField('`Matcha Latte`', 'Latte with green stuff and white stuff')
        .addField('`Iced Lemon Tea for 2`', 'Cold lemon tea for you and another person 😉. Or you can drink both by yourself.')
        .setTimestamp()

        const food = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setThumbnail("https://cdn.glitch.com/1f3ad41e-6c0c-4160-902b-a50330e419bd%2Fklipartz.com.png?v=1613460061919")
        .setTitle('Food')
        .addField('`Bento Box`', 'Single-portion take-out or home-packed meal of Japanese origin')
        .addField('`Pancakes`', ' Flat Cake')
        .addField('`Shio Ramen`', '(Salt-based) It consists of an amber-tinted soup base made from salt, chicken, fish, vegetables and sea weed')
        .addField('`Rilakkuma Pancakes`', 'Flat Cake with Rilakkuma Face')
        .addField('`Supreme Pizza`', 'Whole pizza topped with pepperoni, sausage, bell peppers, onions, and olives')
        .addField('`Pepperoni Pizza Slice`', 'One slice of pepperoni pizza')
        .addField('`Sushi Set`', 'Plate of sushi with onigiri, tamago, and ikura nigiri served with soy sauce')
        .setTimestamp()

        const dessert = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setThumbnail('https://cdn.glitch.com/1f3ad41e-6c0c-4160-902b-a50330e419bd%2Fe.png?v=1613452030343')
        .setTitle('Dessert')
        .addField('`Muffin`', 'Quick bread made of batter containing egg and baked in a pan having cuplike molds')
        .addField('`Raspberry Pudding`', 'A raspberry flavored, custard-like dessert made of milk, sugar, and a thickening agent such as egg yolks or corn starch')
        .addField('`Strawberry Cake Roll`', 'Strawberry rolled sponge cake')
        .addField('`Strawberry Mousse Slice`', "Strawberry flavored dessert that's made of cream and eggs that have been whipped until they're light and creamy")
        .addField('`Custard Pudding`', 'Custard is a variety of culinary preparations based on sweetened milk, cheese, or cream cooked with egg or egg yolk to thicken it, and sometimes also flour, corn starch, or gelatin.')
        .addField('`Donut`', 'A small fried cake of sweetened dough, typically in the shape of a ball or ring')
        .addField('`Mochi Donut`', ' Springy donuts that are naturally gluten-free and made with tapioca or glutinous rice flour')
        .setTimestamp()
        
        const back = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setImage("https://cdn.glitch.com/1f3ad41e-6c0c-4160-902b-a50330e419bd%2Fback.png?v=1613459542327")

        const pages = [
                front,
                drinks,
                food,
                dessert,
                back
        ]

        const emojiList = ["⏪", "⏩"];
      
        const timeout = '2147483647';

        pagination(message, pages, emojiList, timeout)
    }
}