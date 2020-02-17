function anagrams(strA, strB) {
    //check if two strings contain the same nuмber of letters - anagrams
    if (clearString(strA) !== clearString(strB)) return false;
    return true;
}

function clearString(str) {
    let newStr = str.replace(/[^\w]/g, '').toLowerCase();
    return newStr.split('').sort().join('');
}

console.log(anagrams('rail safety', 'fairy tales'));

// function anagrams(strA, strB) {
//     //check if two strings contain the same nuмber of letters - anagrams
//     let map1 = clearString(strA);
//     let map2 = clearString(strB);

//     return compare(map1, map2);
// }

// function clearString(str) {
//     let newStr = str.replace(/[^\w]/g, '').toLowerCase();
//     let map = {};

//     for (let letter of newStr) {
//         if (!map[letter]) {
//             map[letter] = 1;
//         } else {
//             map[letter]++;
//         }
//     }
//     return map;
// }

// function compare(a, b) {
//     if (Object.keys(a).length !== Object.keys(b).length) return false;
//     for (let property in a) {
//         if (a[property] !== b[property]) return false;
//     }
//     return true;
// }