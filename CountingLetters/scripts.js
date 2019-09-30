//Small script counting how many repeating letters there are in a string
const stringDisplay = document.querySelector('#string');
const resultDisplay = document.querySelector('#result');
const submitBtn = document.querySelector('button');
let input = document.querySelector('input');
console.log(input);
var inputString;
var result;


submitBtn.onclick = (e) => { 
    e.preventDefault();
    inputString = input.value;
    
    countLetters();
    resultDisplay.innerHTML = result;
}

function countLetters() { 
    //takes as an imput parametter the imputString
    //and should return the counted letters;
    let splitString = inputString.split('');
    console.log(splitString);
    let sortString = splitString.sort();
    let count = 1;
    let resultArray = []; 
    
    
     for (let i = 0; i < sortString.length; i++){
        
        if (sortString[i] == sortString[i+1]){
            count = count + 1;
        }
        else {
            let countedLetters = `${count}${sortString[i]}`;
            resultArray = [...resultArray, countedLetters];
            result = resultArray.join(', ');
            count = 1;
        }
     }

     return result;
     //console.log(resultArray.join(','));

}



