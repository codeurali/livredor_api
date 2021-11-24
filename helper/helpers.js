const fs = require('fs');
const posts = require('../data/data.json');

class Helpers {
    

    static getNewId = dataObject => Object.keys(dataObject).length > 0 ? Object.keys(dataObject).length + 1 : 1

    static writeJSONFile = (filename, content) => {
        fs.writeFileSync(filename, JSON.stringify(content), 'utf-8', err => {
            err && console.log(err)
        })
    }
}

module.exports = Helpers;