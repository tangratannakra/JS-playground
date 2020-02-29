// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1
// Example 2:

// Input: [4,1,2,1,2]
// Output: 4


var singleNumber = function (nums) {
    let counter = 0;

    while (nums.indexOf(nums[counter]) !== nums.lastIndexOf(nums[counter])) {
        counter++;
    }

    return nums[counter]
};

console.log(singleNumber([1, 2, 1, 2, 4, 4, 3, 5, 3]))