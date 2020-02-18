// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.
//zero must be deletet and pushed to the back of array; in-place
function removeZero(nums) {
    let countZ = 1;

    if (nums.indexOf(0) >= 0) {
        while (nums.indexOf(0) < (nums.length - countZ)) {
            for (i = nums.indexOf(0); i < nums.length - countZ; i++) {
                nums[i] = nums[i + 1];
            }
            nums[nums.length - countZ] = 0
            countZ++;

        }
    }

    return nums
}




console.log(removeZero([1]));

// function removeZero(nums) {
//     for (let i = 0; i < 3; i++) {
//         if ((nums[i] === 0)) {
//             nums.push(0); //0
//             nums.splice(i, 1)
//         }
//     }
//     return nums
// }