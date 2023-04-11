const letters = require('./letters.json');

module.exports = function encrypt(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let charIndex = letters.findIndex(l => l[0] === char);
        if (charIndex >= 0) {
            result += letters[charIndex][1].toString(16) + '-';
        }
    }
    return result.slice(0, -1);
}
