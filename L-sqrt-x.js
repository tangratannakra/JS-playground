var mySqrt = function (x) {
    let sqrt = null;
    x = Math.abs(parseInt(x));

    return parseInt(Math.sqrt(x));
};

console.log(mySqrt(0));

// Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

// Example 1:

// Input: 4
// Output: 2
// Example 2:

// Input: 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since 
//              the decimal part is truncated, 2 is returned.