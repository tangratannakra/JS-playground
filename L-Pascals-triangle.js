// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]


var generate = function (numRows) {
    if (numRows === 0) return [];
    let a = [
        [1]
    ];

    return pascalRec(numRows, a)
};


function pascalRec(n, a) {

    if (n < 2) return a;

    let prevRow = a[a.length - 1];
    let curRow = [1];

    for (let i = 1; i < prevRow.length; i++) {
        curRow[i] = prevRow[i] + prevRow[i - 1];
    }

    curRow.push(1);
    a.push(curRow);
    return pascalRec(n - 1, a);
}

console.log(generate(5));