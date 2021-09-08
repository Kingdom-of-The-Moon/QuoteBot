const {Client, MessageEmbed} = require('discord.js');

const commands = require('./lib/commands');
const config = require('./lib/config');
const quotes = require('./lib/quotes');
const Quote = quotes.Quote;

const client = new Client({intents: ["GUILD_MESSAGES", "DIRECT_MESSAGES", "GUILDS"]});

client.login(config.login.token);

client.on('ready', () => {
    console.log("Bot online!");
    commands.reload();
})

client.on('interactionCreate', commands.onInteraction)
