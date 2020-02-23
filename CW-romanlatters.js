// Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.
// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. 
//In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:   solution(1000); // should return 'M'

function solution(integer) {
    //let i = 0;
    const inputString = integer.toString().split('').reverse();
    let romanResult = [];
    let romanMatrix = [
        ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], // Ones
        ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], // Tens
        ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"], // Hundreds
        ["", "M", "MM", "MMM", "4000", "5000", "6000", "7000", "8000", "9000"]
    ];

    console.log(inputString);

    inputString.forEach((number, i) => {

        romanResult = romanMatrix[i][parseInt(number)] + romanResult;
        //i++;
        console.log(romanResult);
    });
    console.log(romanResult);
    return romanResult;
}

console.log(solution(2008));