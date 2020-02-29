// Reverse bits of a given 32 bits unsigned integer.
// /**
//  * @param {number} n - a positive integer
//  * @return {number} - a positive integer
//  */


var reverseBits = function (n) {

    n = n.toString(2).padStart(32, '0')
    return parseInt(n.split('').reverse().join(''), 2);

    //return parseInt(bitsN, 2)
};

console.log(reverseBits(43261596)) //964176192 (00111001011110000010100101000000)