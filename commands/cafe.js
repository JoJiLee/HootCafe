const Discord = require('discord.js');

module.exports = {
  name: 'cafe',
  description: "get cafe",
    
  async run(bot,message, args, Discord){
    const cheerio = require('cheerio');
    const request = require('request');
    
    var options = {
        url: "https://www.dogpile.com/serp?qc=images&q=anime+cafe+gif",
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
 
    request(options, function(error, response, responseBody) {
        if (error) {
            return;
        }
        $ = cheerio.load(responseBody);
 
        var links = $(".image a.link");
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
       
        console.log(urls);
 
        if (!urls.length) {     
            return;
        }
      
        message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
    });
      }
}
