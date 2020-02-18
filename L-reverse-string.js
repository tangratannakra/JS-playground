var reverseString = function (s) {
    let buffer = 0;
    let i = 0;

    while (s[i] !== s[s.length - (i + 1)]) {
        buffer = s[i];
        s[i] = s[s.length - (i + 1)];
        s[s.length - (i + 1)] = buffer;
        i++;
    }
    //weeee!!
    return s;
};

console.log(reverseString(["H", "a", "n", "n", "a", "h"]))

// var reverseString = function (s) {
//     return s.reverse();
// };