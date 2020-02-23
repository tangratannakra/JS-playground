// Given an integer, write a function to determine if it is a power of three.

// Input: 27
// Output: true

// Input: 0
// Output: false

var isPowerOfThree = function (n) {
    if (n < 1) return false;
    let maxPower3 = 1162261467 //  The maximum power of 3 value that integer can hold is 1162261467 ( 3^19 ) 
    if (maxPower3 % n === 0) return true;
    else return false;
};

console.log(isPowerOfThree(9));

// var isPowerOfThree = function (n) {
//     if (n < 1) return false;

//     while (n % 3 === 0) {
//         n /= 3;
//     }
//     return n === 1 ? true : false;
// };