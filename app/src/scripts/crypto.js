let letters = [
    ['A', 0],
    ['B', 1],
    ['C', 2],
    ['Ç', 3],
    ['D', 4],
    ['E', 5],
    ['F', 6],
    ['G', 7],
    ['Ğ', 8],
    ['H', 9],
    ['I', 10],
    ['İ', 11],
    ['J', 12],
    ['K', 13],
    ['L', 14],
    ['M', 15],
    ['N', 16],
    ['O', 17],
    ['Ö', 18],
    ['P', 19],
    ['Q', 20],
    ['R', 21],
    ['S', 22],
    ['Ş', 23],
    ['T', 24],
    ['U', 25],
    ['Ü', 26],
    ['V', 27],
    ['W', 28],
    ['X', 29],
    ['Y', 30],
    ['Z', 31],
    ['a', 32],
    ['b', 33],
    ['c', 34],
    ['ç', 35],
    ['d', 36],
    ['e', 37],
    ['f', 38],
    ['g', 39],
    ['ğ', 40],
    ['h', 41],
    ['ı', 42],
    ['i', 43],
    ['j', 44],
    ['k', 45],
    ['l', 46],
    ['m', 47],
    ['n', 48],
    ['o', 49],
    ['ö', 50],
    ['p', 51],
    ['q', 52],
    ['r', 53],
    ['s', 54],
    ['ş', 55],
    ['t', 56],
    ['u', 57],
    ['ü', 58],
    ['v', 59],
    ['w', 60],
    ['x', 61],
    ['y', 62],
    ['z', 63],
    ['0', 64],
    ['1', 65],
    ['2', 66],
    ['3', 67],
    ['4', 68],
    ['5', 69],
    ['6', 70],
    ['7', 71],
    ['8', 72],
    ['9', 73],
    [' ', 74],
    ['.', 75],
    [',', 76],
    [';', 77],
    [':', 78],
    ['-', 79],
    ['_', 80],
    ['@', 81],
    ['#', 82],
    ['$', 83],
    ['%', 84],
    ['&', 85],
    ['*', 86],
    ['+', 87],
    ['/', 88],
    ['=', 89],
    ['?', 90],
    ['!', 91],
    ['(', 92],
    [')', 93],
    ['[', 94],
    [']', 95],
    ['{', 96],
    ['}', 97],
    ['<', 98],
    ['>', 99],
    ['|', 100],
    ['^', 101],
    ['~', 102],
    ['`', 103],
    ['\'', 104],
    ['"', 105],
    ['\\', 106]
];

function encrypt(str) {
    if (!str || str.length <= 0) {
        jSuites.notification({
            error: 1,
            name: 'Hata',
            message: 'Lütfen geçerli bir metin giriniz.'
        });

        return false;
    } else {
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
}

function decrypt(str) {
    if (!str || str.length <= 0) {
        jSuites.notification({
            error: 1,
            name: 'Hata',
            message: 'Lütfen geçerli bir şifre giriniz.'
        });

        return false;
    } else {
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
}