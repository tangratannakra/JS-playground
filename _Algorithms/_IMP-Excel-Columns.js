// Given a column title as appear in an Excel sheet, return its corresponding column number.

// For example:
//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28 
//     ...

var titleToNumber = function (s) {
    let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let num = abc.length;

    let colNum = 0;
    let index = 0;
    let indexExponent = s.length - 1;

    while (index < s.length) {
        let digit = s[index];
        let digitValue = abc.indexOf(digit) + 1;
        colNum += Math.pow(num, indexExponent) * digitValue;

        index += 1
        indexExponent -= 1
    }

    return colNum;
};



console.log(titleToNumber('ZY'))


// Input: "A"
// Output: 1

// Input: "AB"
// Output: 28

// Input: "ZY"
// Output: 701