// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
// You may assume that the array is non-empty and the majority element always exist in the array.

var majorityElement = function (nums) {

    let map = {};
    let max = 0;
    let maxNum = 0;

    for (let el of nums) {
        if (!map[el]) {
            map[el] = 1;
        } else {
            map[el]++;
        }
    }
    for (let char in map) {
        if (map[char] > max) {
            max = map[char];
            maxNum = char;
        }
    }
    return Number(maxNum);
};

console.log(majorityElement([-1, 100, 2, 100, 100, 4, 100]))

// Input: [3,2,3]
// Output: 3

// Input: [2,2,1,1,1,2,2]
// Output: 2