const fs = require('fs')
const quotes = require('../data/quotes.json')

class Quote { 
    text;
    user;
    time;
    constructor(text, user, time) {
        this.text = text;
        this.user = user;
        this.time = time;
    }
}

function add(quote) {
    quotes.push(quote)
}

function get(index) {
    return quotes[index]
}

function set(index, quote) {
    quotes[index] = quote
}

function save() {
    fs.writeFileSync('./data/quotes.json', JSON.stringify(quotes))
}

module.exports = {set:set,get:get,add:add,save:save,Quote:Quote}