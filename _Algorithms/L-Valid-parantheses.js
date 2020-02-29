var isValid = function (s) {
    let stack = [];
    if (s.length % 2 !== 0 || s.length === 0) {
        return false;
    }

    for (let char of s) {
        if (char === '{' ||
            char === '(' ||
            char === '[') {
            stack.push(char);
        } else if ((char === '}' && stack[stack.length - 1] === '{') ||
            (char === ')' && stack[stack.length - 1] === '(') ||
            (char === ']' && stack[stack.length - 1] === '[')) {
            stack.pop();
        } else {
            return false;
        }
    }

    return stack.length === 0 ? true : false;
}


console.log(isValid('{((()))}'));



//Kinda works but still ... way complicated! And LONG, erroprone
// var isValid = function (s) {
//     let arr = s.split('');
//     let resultmap = [];
//     let i = -1;
//     if ((s.length % 2 !== 0) || s.length == undefined) return false;

//     resultmap = arr.map(element => {
//         i++;
//         return test(arr, element, i);
//     })

//     console.log(resultmap)

//     return !resultmap.reduce((a, b) => a + b);

// }

// function opositedir(arr, element, i) {
//     let curr = element.charCodeAt(0);

//     let oposite = arr[arr.length - (i + 1)].charCodeAt(0);

//     if ((curr === 123 && oposite === 125) || (curr === 91 && oposite === 93) || (curr === 40 && oposite === 41)) {

//         return 0;
//     } else {

//         return 1;
//     }
// }


// function test(arr, element, i) {

//     let curr = element.charCodeAt(0);
//     let next = arr[i].charCodeAt(0);


//     if ((curr === 123 && next === 125) || (curr === 91 && next === 93) || (curr === 40 && next === 41)) {
//         return 0;
//     } else {
//         return 1;
//     }
// }


// console.log(isValid('{}()'));