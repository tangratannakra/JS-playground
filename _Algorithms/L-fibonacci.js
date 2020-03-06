var fib = function (n) {
    if (n === 0) return 0;
    let result = [0, 1];

    for (let i = 2; i <= n; i++) {
        const a = result[i - 1]; // the value of the arr[2-1 =1] 
        const b = result[i - 2]; // 0
        result.push(a + b); // push new element 1
    }
    return result[result.length - 1];

};

console.log(fib(25))

// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, 
// such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0,   F(1) = 1
// F(N) = F(N - 1) + F(N - 2), for N > 1.
// Given N, calculate F(N).


// Input: 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

// Input: 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

// Input: 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.


// Note:
// 0 ≤ N ≤ 30.