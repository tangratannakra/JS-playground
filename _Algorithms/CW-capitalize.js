const inputString = "ala bala nitza, turska panitza";

function capitalize(input) {
    let splitArray = input.split(' ');
    let resultArray = splitArray.map(word => {
        let firstLetter = word.slice(0, 1).toUpperCase();
        let restOfWord = word.slice(1);

        return `${firstLetter}${restOfWord}`;
    });

    return resultArray.join(' '); //outputs a string
}

let result = capitalize(inputString);
console.log(result);


// -------------------------------------------------------- //
//Method 2
function capitalizeChar(inputParameter) {
    let words = inputParameter.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    return words.join(' ')
}

console.log(capitalizeChar('tintiri mintiri'));