var missingNumber = function (nums) {
    console.log(nums.length)

    let i = 0;
    while (nums.includes(i)) { //indexOf 
        i++;
    }
    console.log(i)
};

console.log(missingNumber([3, 0, 1])) //8