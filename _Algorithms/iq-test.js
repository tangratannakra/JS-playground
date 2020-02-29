// function iqTest(numbers) {
//     const inputArray = numbers.split(' ');

//     const checkCommon = (a, b, c) => a % 2 == 0 && b % 2 == 0 || a % 2 == 0 && c % 2 == 0 || b % 2 == 0 && c % 2 == 0 ? 'even' : 'odd';
//     const common = checkCommon(inputArray[0], inputArray[1], inputArray[2]);
//     let searchFactor = (common == 'even' ? 1 : 0);
//     const newArray = inputArray.map((x) => x % 2 == 0 ? x = 0 : x = 1);

//     return newArray.indexOf(searchFactor) + 1;
// }

// console.log(iqTest("1 2 2"));

/// -----------------------------------------------
//another way

function iqTest(numbers) {
    const inputArray = numbers.split(' ');
    const even = [];
    const odd = []

    inputArray.map((elm) => elm % 2 == 0 ? even.push(elm) : odd.push(elm));

    return inputArray.indexOf(even.length > odd.length ? odd[0] : even[0]) + 1;
}

console.log(iqTest("1 2 2"));