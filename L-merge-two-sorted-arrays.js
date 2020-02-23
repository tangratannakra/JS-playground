var merge = function (nums1, m, nums2, n) {
    return m >= n ? swap(nums1, nums2) : swap(nums1, nums2);

    function swap(a, b) {
        console.log(a)
        for (let el of b) {
            let i = 0;
            while (i < a.length) {
                console.log(el)
                if ((el === a[i]) || (el > 0 && el > a[i] && a[i] === 0) || (el < a[i])) {
                    a.splice(i, 0, el);
                    a.pop();
                    break;
                }
                i++;
            }
        }
        return a;
    }

    console.log(nums1)

}


console.log(merge([2, 0], 1, [1], 1))

// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
// Example:

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]