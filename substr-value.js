//evaluate the sum of each str in array; -/ 
//compare values - compare latters with another value string, finding its possition
// sum the numbers
//return greatest

function solve(inputString) {
    const inputArray = inputString.split(/[aeiou]/g);
    const alphbt = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
        "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ];

    const resultArray = inputArray.map(subStr => {
        let index = 0;
        if (subStr.length > 1) {
            const newSubstr = subStr.split('');
            for (let i = 0; i < newSubstr.length; i++) {
                let indexSub = alphbt.indexOf(newSubstr[i]) + 1;
                index += indexSub;
            }
        } else {
            index = alphbt.indexOf(subStr) + 1;
        };
        return index;
    })

    const sortedArray = resultArray.sort((a, b) => b - a);
    return sortedArray[0];
};

console.log(solve('twelfthstreet'));