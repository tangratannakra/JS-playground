// Given an input string, reverse the string word by word.

// For example,
// Givens = "the sky is blue",
// return "blue is sky the".

function reverseWords(string) {
    let arr = string.split(' ');
    let output = ' ';
    for (let word of arr) {
        output = `${word} ${output}`;

    }
    return output.toString()
}

console.log(reverseWords("the sky is blue"))

// the sum of the subsequence's elements s is evenly divisible by k(i.e. s % k == 0).
// Given an integer and input array, find out the number of k-subsequences. 
// Example: k=3 and array be [1 2 3 4 1] Output: 4 ({1 2},{1,2,3},{2,3,4},{3}).

function subSeq(arr, k) {
    let sub = [];

    for (let i = 0; i < arr.length; i++) {
        let sum = arr[i];
        if (sum % k === 0) {
            sub.push([arr[i]])
        }
        for (let j = i + 1; j < arr.length; j++) {
            sum += arr[j];

            if (sum % k === 0) {
                sub.push(arr.slice(i, j + 1));
            }
        }
    }
    return sub;
}

console.log(subSeq([1, 2, 3, 4, 1], 3))