//find duplicate in array and remove it;
//could be implemented in different ways. 
// 1) 2-for-loops is the most commont where you take an item - i and itterate ove the other elements to compare the items.
//If === one can splice or replace with a flag as 'remove' for example and than .filter().
// 2) helper array, require more space complexity - u push only single values; Require for loop, too.
//3) { } - count what's inside the array, and push back in in array what is inside the keys but only one time - No...
//=================================================================
// Nice but slow in terms of time complaxity 4) new Set/ Array.from
//     function duplicateInt(arr) {
//              return [...new Set(arr)];
//       }
//=================================================================
// 6) filter again but with filter function...
//     function duplicateInt(arr){
//             return arr.filter((num, i, arri) => arri.indexOf(num) === i);
//       }


//other method is the new sintax new Substring 

function duplicateInt(arr) {
    return [...new Set(arr)];
}

console.log(duplicateInt([1, 5, 4, 3, 3, 1, 2, 3]))