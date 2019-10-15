// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

function high(x) {

    let words = x.toLowerCase().split(' ');
    let object = [
        [],
        []
    ];
    let i = 0;
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    words.forEach(word => {
        let wordValue = 0;
        let letters = word.split('');
        letters.forEach(letter => {
            let x = alphabet.indexOf(letter) + 1;
            wordValue = wordValue + x;
        })

        object[0][i] = wordValue;
        object[1][i] = word;
        i++;
    });

    let highestValue = object[0].findIndex(number => number == Math.max.apply(Math, object[0]));

    return (object[1][highestValue]);
}

console.log(high('what time are we climbing up the volcano'));


// Test.describe("Example tests",_=>{
//     Test.assertEquals(high('man i need a taxi up to ubud'), 'taxi');
//     Test.assertEquals(high('what time are we climbing up the volcano'), 'volcano'); 
//     Test.assertEquals(high('take me to semynak'), 'semynak');  
//     });