// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


function steps(n) {

    if (n > 0) {
        for (let row = 0; row < n; row++) {
            let stair = '';


            for (let col = 0; col < n; col++) {
                if (col <= row) {
                    stair += '#';
                } else {
                    stair += '_'
                }
            }

            console.log(stair)
        }
    }
}

function recurs(n, row, stair = '') {

    if (n === row) return;
    // if (n === stair.length) {
    //     console.log(stair)
    //     return recurs(n, row + 1);
    // }

    if (stair.length <= row) {
        stair += '#';
    } else {
        stair += '_';
    }
    //recurs(n, row, stair)
}

recurs(5);

console.log(steps(4));

// function steps(n) {

//     if (n > 0) {
//         for (let row = 0; row < n; row++) {
//             let stair = '';


//             for (let col = 0; col < n; col++) {
//                 if (col <= row) {
//                     stair += '#';
//                 } else {
//                     stair += '_'
//                 }
//             }

//             console.log(stair)
//         }
//     }
// }

// console.log(steps(4));