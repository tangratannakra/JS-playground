/**
 * @param {number} n
 * @return {number}
 */
var tribonnacci = function (n) {
    if (n === 0) return 0;

    const result = [0, 1, 1];

    for (let i = 3; i <= n; i++) {
        const a = result[i - 1];
        const b = result[i - 2];
        const c = result[i - 3];
        result.push(a + b + c);
    }


    return result[result.length - 1];
};


console.log(tribonnacci(25))