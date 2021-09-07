const fs = require('fs')
const out = {}

fs.readdirSync('./config/', {}).forEach(filename => { 
    let trim = filename.replaceAll('.json', '')
    out[trim] = require(`../config/${filename}`)
});

module.exports = out