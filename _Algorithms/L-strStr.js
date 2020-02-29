// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Input: haystack = "hello", needle = "ll"
// Output: 2

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

var strStr = function (haystack, needle) {
    if (haystack.includes(needle) === false) return -1;

    return haystack.indexOf(needle);
};

console.log(strStr('', ''))