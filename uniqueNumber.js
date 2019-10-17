function findUniq(arr) {
    аrr = arr.sort();

    ((arr[0] != arr[1]) && (arr[0] != arr[2])) ? x = arr[0]: x = arr[arr.length - 1];

    return x;
}


console.log(findUniq([0, 1, 0]));
///this Works too
// for (i = 0; i < arr.length; i++) {
//     if ((arr[0] != arr[1]) && (arr[0] != arr[2])) {
//         return arr[0];
//     } else {
//         for (ii = 1; ii < arr.length; ii++) {
//             if (arr[i] != arr[ii]) {
//                 return arr[ii]
//             }
//         }
//     }
// }


// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// The tests contain some very huge arrays, so think about performance.

// Test.assertEquals(findUniq([ 0, 1, 0 ]), 1);
// Test.assertEquals(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
// Test.assertEquals(findUniq([ 3, 10, 3, 3, 3 ]), 10);