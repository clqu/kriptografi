const letters = require('./letters.json');

module.exports = function encrypt(str) {
    let result = '';
    let hexValues = str.split('-');
    for (let i = 0; i < hexValues.length; i++) {
        let value = parseInt(hexValues[i], 16);
        let letterIndex = letters.findIndex(l => l[1] === value);
        if (letterIndex >= 0) {
            result += letters[letterIndex][0];
        }
    }
    return result;
}
