function printingStrin(num) {
    let outputStr = '';

    for (let r = 0; r < num; r++) {
        let string = '';
        for (let c = 0; c <= (num * 2); c++) {

            if (c < (Math.floor((num * 2 - 1) / 2) - r) || (c > Math.floor((num * 2 - 1) / 2) + r) && (c !== num * 2)) {
                string += ' ';
            } else if (c === (num * 2)) {
                string += '\n'
            } else {
                string += '*'
            }
        }
        outputStr += string;
    }
    return outputStr;
}


console.log(printingStrin(5))

//============= Half Tree ================
// function printingStrin(num) {
//     let outputStr = '';

//     for (let r = 0; r < num; r++) {
//         let string = '';
//         for (let c = 0; c <= num; c++) {
//             if (c <= r) {
//                 string += '*';
//             } else if(c === num ){
//                 string += '\n'
//             }
//             else {
//                 string += ' '
//             }
//         }
//       console.log(string)
//       outputStr +=string;
//     }
//     return outputStr;
// }