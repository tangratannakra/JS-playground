var isPalindrome = function (s) {
    let strA = s.replace(/[^\w]/g, '').toLowerCase();
    let strB = strA.split('').reverse().join('');

    return strA === strB;
};

console.log(isPalindrome("race a car"));
// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Input: "A man, a plan, a canal: Panama"
// Output: true

// Input: "race a car"
// Output: false