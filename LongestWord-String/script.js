let testString = "Hello, this is my test text";

function findLongestWord(testString){
    //removing special char from text
    testString = testString.replace(/[^a-zA-Z ]/g, "");

    let splitString = testString.split(' ');
    let longestString = 0;
    let longestWord = null;

    splitString.forEach( singleWord => {
        if (longestString < splitString.length) {
            longestString = splitString.length;
            longestWord = singleWord;
        }
    });
        console.log(longestWord);
        return longestWord;  
}

findLongestWord(testString); 