//Small script counting how many repeating letters there are in a string
const stringDisplay = document.querySelector('#string');
const resultDisplay = document.querySelector('#result');
const submitBtn = document.querySelector('button');

let input = document.querySelector('input');

var inputString;
var result;

//Event on the button
submitBtn.onclick = (e) => {
    //preventing the reload of the form 
    e.preventDefault();

    //grabbing the input string from the input field of the form
    inputString = input.value;
    
    //the function counting the ltters
    countLetters();

    //placing the result into the html element
    resultDisplay.innerHTML = result;
}

function countLetters() { 
    //takes as an imput parametter the imputString
    //and should return the counted letters;
    let splitString = inputString.split('');
    let sortString = splitString.sort();
    let count = 1;
    let resultArray = []; 


     for (let i = 0; i < sortString.length; i++){
        //counting the repetition in the ordered array
        //comparing with the next element, if they are the same
        //count will be incremented 
        if (sortString[i] === sortString[i+1]){
            count = count + 1;
        }
        else {
            //when i+1 element is different, an array object is created
            //and pushed into the result
            //count is set back to 1
            let countedLetters = `${count}${sortString[i]}`;
            resultArray = [...resultArray, countedLetters];
            result = resultArray.join(', ');
            count = 1;
        }
     }

     return result;
}



