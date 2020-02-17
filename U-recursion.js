/**
 * @param {number} num
 * @return {number}
 * 
 */


var numberOfSteps = function (num) {
    let i = 0;

    function recurs(num) {
        if (num < 0) return;
        if (num === 0) return i;
        num % 2 == 0 ? num = num / 2 : num = num - 1;
        i++;
        return recurs(num);
    }

    recurs(num);
    return i;
};

console.log(numberOfSteps(14));