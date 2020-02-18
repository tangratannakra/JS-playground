var reverse = function (x) {
    let reversed = parseInt(x.toString().split('').reverse().join('')) * Math.sign(x);
    if (reversed > Math.pow(2, 31) - 1 || reversed < -1 * Math.pow(2, 31)) return 0;
    return reversed;

};

console.log(reverse(1534236469));