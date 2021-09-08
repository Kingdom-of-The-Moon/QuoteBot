const { SlashCommandBuilder, SlashCommandSubcommandGroupBuilder, SlashCommandSubcommandBuilder } = require('@discordjs/builders');
const { Interaction } = require('discord.js');
const { Command } = require('../lib/commands');

const data = new SlashCommandBuilder()
.setName('quote')
.setDescription('Everything to do with quotes!')
.addSubcommandGroup(new SlashCommandSubcommandGroupBuilder()
    .addSubcommand(new SlashCommandSubcommandBuilder()
        .addUserOption(option => option.setName('user').setDescription('The user who said the quote').setRequired(true))
        .addStringOption(option => option.setName('message').setDescription('The text to be quoted').setRequired(true))
    ).setName('add').setDescription('Adds a new quote')
).setName('a').setDescription('d')

    
/**
 * 
 * @param {Interaction} interaction 
 */
function execute(interaction) {
    console.log(interaction);
    let user    = interaction.options.getUser('user');
    let message = interaction.options.getString('message');
    interaction.reply(`hi ${user.username}, ${message}`);
}

module.exports = new Command(data, execute);

