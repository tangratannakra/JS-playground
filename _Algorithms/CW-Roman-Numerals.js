// Create a RomanNumerals class that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below. 
// Multiple roman numeral values will be tested for each helper method.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. 
// In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 
// 2008 is written as 2000=MM, 8=VIII; or MMVIII. 
// 1666 uses each Roman symbol in descending order: MDCLXVI.

// | Symbol | Value | |----------------| | I | 1 | | V | 5 | | X | 10 | | L | 50 | | C | 100 | | D | 500 | | M | 1000 |

class RomanNumerals {

    static toRoman(num) {
        let abc = {
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
        let roman = '',
            i;
        for (i in abc) {
            while (num >= abc[i]) {
                roman += i;
                num -= abc[i];
            }
        }
        return roman;
    }

    static fromRoman(str) {
        str = str.toUpperCase();
        const abc = ["CM", "M", "CD", "D", "XC", "C", "XL", "L", "IX", "X", "IV", "V", "I"];
        const abcNum = [900, 1000, 400, 500, 90, 100, 40, 50, 9, 10, 4, 5, 1];
        let index = 0,
            num = 0;
        for (let rn in abc) {
            index = str.indexOf(abc[rn]);
            while (index != -1) {
                num += parseInt(abcNum[rn]);
                str = str.replace(abc[rn], "-");
                index = str.indexOf(abc[rn]);
            }
        }
        return num;
    }

}






console.log(RomanNumerals.toRoman(1000)); // should return 'M'
console.log(RomanNumerals.fromRoman('CMX')); // should return 1000

// Test.assertEquals(RomanNumerals.toRoman(1000), 'M')
// Test.assertEquals(RomanNumerals.toRoman(999), "CMXCIX")
// Test.assertEquals(RomanNumerals.toRoman(4), 'IV')
// Test.assertEquals(RomanNumerals.toRoman(1), 'I')
// Test.assertEquals(RomanNumerals.toRoman(1991), 'MCMXCI')
// Test.assertEquals(RomanNumerals.toRoman(2006), 'MMVI')
// Test.assertEquals(RomanNumerals.toRoman(2020), 'MMXX')