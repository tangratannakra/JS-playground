function chunk(arr, size) {
    let newArr = [];
    let start = 0;
    while (start < arr.length) {
        newArr.push(arr.slice(start, size + start));
        //console.log(newArr);
        start += size;
    }

    return newArr
}

console.log(chunk([1, 2, 3, 4, 5], 2))

// function chunk(arr, size) {
//     let newArr = [];

//     function recurs(arr) {
//         if (arr.lenght < 0) return;
//         if (arr.length == 0) return newArr;

//         let chunk = arr.splice(0, size);
//         newArr.push(chunk);

//         return recurs(arr);
//     }
//     return recurs(arr);
// }