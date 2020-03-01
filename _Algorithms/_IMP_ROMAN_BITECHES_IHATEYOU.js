//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                ANOTHER SOLUTION - EVEN BETTER
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const map = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
};

class RomanNumerals {
    static toRoman(num) {
        let str = '';
        for (var i in map) {
            while (num >= map[i]) {
                str += i;
                s
                num -= map[i];
            }
        }
        return str;
    }

    static fromRoman(str) {
        return str.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((acc, el) => acc + map[el], 0);
    }
}