// Count the number of prime numbers less than a non-negative number, n.
// Input: 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

var countPrimes = function (n) {
    let resultArr = [];
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            resultArr.push(i)
        }
    }
    return resultArr.length;
};

function isPrime(x) {
    let sqrtnm = Math.floor(Math.sqrt(x));
    let prime = (x != 1);

    for (let i = 2; i < sqrtnm + 1; i++) {
        if (x % i === 0) {
            return false;
        }
    }

    return prime;
}

console.log(countPrimes(10))