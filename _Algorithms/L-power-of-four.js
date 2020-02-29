var isPowerOfFour = function (num) {
    if (num !== 1 && num < 4) return false;
    if (num === 2) return true;

    while (num % 4 === 0) {
        num /= 4;
    }

    return num === 1 ? true : false;
};

console.log(isPowerOfFour(64));


// 2. Another solution is to keep dividing the number by 4, i.e, do n = n/4 iteratively. In any iteration, 
// if n%4 becomes non-zero and n is not 1 then n is not a power of 4, otherwise n is a power of 4.