module.exports = (bot) => {
    console.log('I am alive');
    bot.user.setActivity('how to make coffee | !menu', {type:'WATCHING'}).catch(console.error);
}