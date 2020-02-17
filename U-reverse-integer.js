function reverseInt(num) {
    const str = num.toString().split('').reverse().join('')
    return parseInt(str) * Math.sign(num);

}
console.log(reverseInt(-500));

//--------- Stupid hahahah -----
// function reverseInt(num) {
//     let str = num.toString(10);
//     if (num > 0) {
//         return parseInt(revertStr(str));
//     } else if (num < 0) {
//    return parseInt(revertStr(str)) * -1;
//         return parseInt(str[0] + revertStr(str.substring(1, str.length)));
//     }

//     function revertStr(str) {
//         return str.split('').reverse().join('')
//     }



// }
// console.log(reverseInt(500));