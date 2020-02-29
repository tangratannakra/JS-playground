//=========== Returs Sorted in-place array BUT ONLY FOR POSITIVE NUMBERS ========

function merge(nums1, n, nums2, m) {
    let long = 0;
    let short = 0;

    if (nums1.length < nums2.length) {
        long = nums2;
        short = nums1;
    } else {
        long = nums1;
        short = nums2;
    }

    for (let i = 0; i < long.length; i++) {
        let buffer = 0;
        let swap = 0;

        if (long[i] < short[i]) {
            buffer = long[i + 1];
            long[i + 1] = short[i]
        }

        if (buffer < long[i + 2]) {
            swap = long[i + 2];
            long[i + 2] = buffer;
        }

        for (let j = 0; j < short.length; j++) {
            swap = long[i + j];
            console.log(swap);
        }
        console.log(buffer)

    }
    console.log(nums1)

    // for (let j = 0; j < short.length; j++) {
    //     let i = 0;

    //     while (long[i] < short[j] && long[i] > 0) {
    //         i++;

    //     }

    //     long.splice(i, 0, short[j])
    //     long.pop()
    // }

    return nums1;
}

console.log(merge([-30, -16, 5, 7, 0, 0, 0], 4, [-15, 5, 6], 3)); //1,2,3,5,6,7,8,15,19


// var merge = function (nums1, m, nums2, n) {


// }
// console.log(merge([1], 1, [2, 0], 1))

// Driver program 
// int main(void) 
// { 

//     int m = sizeof(ar1)/sizeof(ar1[0]); 
//     int n = sizeof(ar2)/sizeof(ar2[0]); 
//     merge(ar1, ar2, m, n); 

//     cout << "After Merging nFirst Array: "; 
//     for (int i=0; i<m; i++) 
//         cout << ar1[i] << " "; 
//     cout << "nSecond Array: "; 
//     for (int i=0; i<n; i++) 
//         cout << ar2[i] << " "; 
//    return 0; 
// } 


// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
// Example:

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]

// ================ Explanation ============
// The idea is to begin from last element of ar2[] and search it in ar1[].
//  If there is a greater element in ar1[], then we move last element of ar1[] to ar2[]. 
//  To keep ar1[] and ar2[] sorted, we need to place last element of ar2[] at correct place in ar1[]. 
//  We can use Insertion Sort type of insertion for this. Below is algorithm:

// 1) Iterate through every element of ar2[] starting from last 
//    element. Do following for every element ar2[i]
//     a) Store last element of ar1[i]: last = ar1[i]
//     b) Loop from last element of ar1[] while element ar1[j] is 
//        smaller than ar2[i].
//           ar1[j+1] = ar1[j] // Move element one position ahead
//           j--
//     c) If any element of ar1[] was moved or (j != m-1)
//           ar1[j+1] = ar2[i] 
//           ar2[i] = last  
// In above loop, elements in ar1[] and ar2[] are always kept sorted.

// Below is the implementation of above algorithm.
// filter_none
// edit
// play_arrow

// brightness_4
// // C++ program to merge two sorted arrays with O(1) extra space. 
// #include <bits/stdc++.h> 
// using namespace std; 


// ============================ Mine ======================= 
// work to some extends. Wothout the last element.extends

// var merge = function (nums1, m, nums2, n) {
//     return m >= n ? swap(nums1, nums2) : swap(nums1, nums2);

//     function swap(a, b) {
//         console.log(a)
//         for (let el of b) {
//             let i = 0;
//             while (i < a.length) {
//                 console.log(el)
//                 if ((el === a[i]) || (el > 0 && el > a[i] && a[i] === 0) || (el < a[i])) {
//                     a.splice(i, 0, el);
//                     a.pop();
//                     break;
//                 }
//                 i++;
//             }
//         }
//         return a;
//     }

//     console.log(nums1)
// }

// ============= Also ============
// Concat() and sort()