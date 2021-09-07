const Discord = require('discord.js');
const config = require('./lib/config');
const quotes = require('./lib/quotes')
const Quote = quotes.Quote;

const client = new Discord.Client({intents: ["GUILD_MESSAGES", "DIRECT_MESSAGES", "GUILDS"]});

client.login(config.login.token);

client.on('ready', () => {
    console.log("Bot online!");
})

client.on('message', (msg) => {
    msg.reply("how")
    quotes.add(new Quote("hi", msg.author.id, "now"));
    quotes.save();
});
