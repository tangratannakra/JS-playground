var firstUniqChar = function (s) {
    if (s == '') return -1;
    let i = 0;

    while (i < s.length) {
        let letter = s[i];
        if (s.indexOf(letter) == s.lastIndexOf(letter)) return s.indexOf(letter);
        if (s.length == 2 && s.indexOf(letter) !== s.lastIndexOf(letter)) return -1;

        i++;
    }
    return -1;
}
console.log(firstUniqChar("aaaddd"));

// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
// Examples:
// s = "leetcode"
// return 0.
// s = "loveleetcode",
// return 2.
// Note: You may assume the string contain only lowercase letters.