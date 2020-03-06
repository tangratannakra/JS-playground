//=============== Works In IDE but Leet Complains with Loonatic test case ===============

var hammingDistance = function (x, y) {

    let d = 0;
    let h = x ^ y;
    while (h > 0) {
        d++;
        h &= h - 1;
    }
    return d;
};


var totalHammingDistance = function (nums) {
    console.log(nums.splice(0, 5))
    let result = [];
    for (let i = 0; i < nums.length - 1; i++) {
        console.log(nums[i])
        for (let j = 1; j < nums.length; j++) {
            if (i > j - 1) {
                // console.log(nums[i])
                // result.push(hammingDistance(nums[i+1], nums[j]));
            } else {
                console.log(nums[i])
                result.push(hammingDistance(nums[i], nums[j]));
            }
        }
    }
    return result.reduce((a, c) => a + c, 0);


};

console.log(totalHammingDistance([4, 14, 2, 5, 8, 7, 3, 6]))
console.log(hammingDistance(4, 14))