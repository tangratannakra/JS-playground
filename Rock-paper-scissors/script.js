//const rockBtn = document.querySelector("#rock");
//const paperBtn = document.querySelector("#paper");
//const scissorBtn = document.querySelector("#scissor");
const input = document.querySelectorAll("input");
const resultDisplay = document.querySelector("#result");
const body = document.querySelector('body');

let result = input.forEach(button => {
    button.onclick = userClick;
})

function userClick() {
    let userChoice = this.id;
    let computerChoice = computerRandom(1, 4);
    console.log(computerChoice);

    if (userChoice == computerChoice) {
        resultDisplay.innerHTML = `Computer chose "${computerChoice }", you both win!`;
        body.className = 'mangoPulp';
    } else {
        if ((computerChoice == 'rock' && userChoice == 'paper') ||
            (computerChoice == 'scissors' && userChoice == 'rock') ||
            (computerChoice == 'paper' && userChoice == 'scissors')) {
            resultDisplay.innerHTML = `Computer chose "${computerChoice }", YOU win!`;
            body.className = 'seaWeed';
        } else {
            //bug is detected. when user select scissors, it always outputs you lost
            resultDisplay.innerHTML = `Computer chose "${computerChoice }", YOU lost :( !`
            body.className = 'cherry';
        }
    }

};


//generating the computer choice
function computerRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let random = Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    if (random == 1) {
        random = 'rock';
    } else if (random == 2) {
        random = 'paper';
    } else {
        random = 'scissors';
    }
    return random;
}