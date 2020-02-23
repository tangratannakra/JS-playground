// Write an algorithm to determine if a number is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Example: 

// Input: 19
// Output: true
// Explanation: 
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 02 = 1

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    try {
        let digits = n.toString().split('');
        if (checker(digits) === 1) {
            return true;
        } else {
            n = checker(digits);
        }
        return isHappy(n);
    } catch {
        return false;
    }
};

function checker(arr) {
    const numbers = arr.map(str => parseInt(str) * parseInt(str));
    return numbers.reduce((a, b) => a + b, 0);
}


console.log(isHappy(0));