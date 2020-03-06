//Given an array of distinct elements and a number x, find if there is a pair with product equal to x.

function findSum(arr, x) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] !== arr[j]) {
                if (arr[i] + arr[j] === x) {
                    console.log(arr[i], arr[j])
                    return true;
                } else {
                    return false;
                }
            }
        }
    }
}

console.log(findSum([5, 3, 5, 8, 4], 10))

// Given an array consisting many inner arrays, flatten the array into one: 
// example: input: [[6,4,7,[9,5,4,[2,4,8]]],[2,2,7],[9,0,7,[9,3,1,8,5]]] 
// output: [6,4,7,9,5,4,2,4,8,2,2,7,9,0,7,9,3,1,8,5]

function deArr(arr) {
    const resultArr = [];
    let string = arr.toString().replace(/[\,]/g, ' ');
    for (let el of string) {
        if (el != 0) {
            resultArr.push(Number(el))
        }
    }
    return resultArr
}

console.log(deArr([
    [6, 4, 7, [9, 5, 4, [2, 4, 8]]],
    [2, 2, 7],
    [9, 0, 7, [9, 3, 1, 8, 5]]
]))

// You are given an array of integers. Return an array of the same size where the element at each index is the product of all the elements 
// in the original array except for the element at that index. For example, an input 
// of [1, 2, 3, 4, 5] should return [120, 60, 40, 30, 24]. 
// You cannot use division in this problem.


function mutiplyArr(arr) {
    if (arr.length == 0 || arr.length === 1 && arr[i] == 0) return 0;

    return arr.map(element => {
        let temp = 1;
        for (let j = 0; j < arr.length; j++) {
            if (element != arr[j])
                temp *= arr[j];
        }
        return element = temp;
    });;
}

console.log(mutiplyArr([1, 2, 3, 4, 5]))