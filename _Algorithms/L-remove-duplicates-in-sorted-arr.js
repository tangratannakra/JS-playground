var removeDuplicates = function (nums) {
    let i = 0;

    while (i < nums.length) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
        } else {
            i++;
        }
    }

    console.log(nums)
    return nums.length;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])) //5

// 