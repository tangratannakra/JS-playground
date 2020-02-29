var hammingWeight = function (n) {
    n = n.toString(2);
    let bits32 = n.padStart(32, 0);
    let counter = 0;

    for (let char of bits32) {
        if (char !== '0') {
            counter++;
        }
    }

    return counter;
};

console.log(hammingWeight(51))