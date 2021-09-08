const { MessageEmbed, Message } = require('discord.js');
const fs = require('fs');

const quotes = require('../data/quotes.json');


module.exports = {
    Quote: class Quote { 
        text;
        user_id;
        time;
        constructor(text, user_id, time) {
            this.text = text;
            this.user_id = user_id;
            this.time = time;
        }
    
        /**
         * 
         * @param {Message} context 
         * @param {*} title 
         * @returns 
         */
        createEmbed(context, title) {
    
            let userCache = context.guild.members.cache;
            let user = userCache.get(this.user_id);
    
            return new MessageEmbed()
                .setFields([{
                    name: title,
                    value: this.text
                }])
                .setAuthor(user.nickname || user.user.username, user.user.avatarURL());
        }
    },
    
    add: function(quote) {
        quotes.push(quote);
    },
    
    get: function(index) {
        return quotes[index];
    },
    
    set: function(index, quote) {
        quotes[index] = quote;
    },
    
    save: function() {
        fs.writeFileSync('./data/quotes.json', JSON.stringify(quotes));
    },
    
    length: function() {
        return quotes.length;
    },
}