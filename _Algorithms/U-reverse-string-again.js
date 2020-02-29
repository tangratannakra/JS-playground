function reverseString(str) {
    let reversedStr = str.split('').reduce((reversed, letter) => {
        return letter + reversed;
    }, '');
    console.log(reversedStr)
    return reversedStr;
}

reverseString('apple');


//------------------------------
// function reverseString(str) {
//     str = str.split('').reverse().join('');
//     return str;
// }
// reverseString('apple');

//------------------------------
// function reverseString(str) {

//     let newArr = str.split('');
//     let i = newArr.length - 1;
//     let newStr = newArr.map(el => {
//         el = newArr[i];
//         i--;
//         return el
//     });
//     return newStr.join('');
// }

// reverseString('apple');

//-----------------------------
// function reverseString(str) {
//     let reversedStr = '';
//     for (let letter of str) {
//         reversedStr = letter + reversedStr;
//     }
//     console.log(reversedStr)
//     return reversedStr;
// }

// reverseString('apple');