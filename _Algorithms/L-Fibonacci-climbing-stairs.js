/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    return fib(n + 1);
};

function fib(s) {
    const result = [0, 1];

    for (let i = 2; i <= s; i++) {
        const a = result[i - 1];
        const b = result[i - 2];
        result.push(a + b);
    }
    return result[result.length - 1];
}

console.log(climbStairs(44))

// ============ Recursive / Leet hate it :-) ========
// var climbStairs = function (n) {
//     return fib(n + 1);
// };

// function fib(s) {
//     if (s < 2) return s;
//     return (fib(s - 1) + fib(s - 2));
// }


// You are climbing a stair case. It takes n steps to reach to the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
// Note: Given n will be a positive integer.

// Input: 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Input: 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step