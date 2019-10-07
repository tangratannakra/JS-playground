//const rockBtn = document.querySelector("#rock");
//const paperBtn = document.querySelector("#paper");
//const scissorBtn = document.querySelector("#scissor");
const input = document.querySelectorAll("input");
const resultDisplay = document.querySelector("#result");
const body = document.querySelector('body');
const turnsDisplay = document.querySelector('.turns');
const coumputerResult = document.querySelector('.computer');
const userResult = document.querySelector('.user');
const startOverBtn = document.querySelector('.start-over');

let turn = 0;
let compWin = 0;
let userWin = 0;

let result = input.forEach(button => {
    button.onclick = userClick;
})

startOverBtn.addEventListener('click', restartGame);

function userClick() {
    let userChoice = this.id;
    let computerChoice = computerRandom(1, 4);


    countingTurns();

    if (userChoice === computerChoice) {
        resultDisplay.innerHTML = `You chose "${userChoice}", Computer chose "${computerChoice }", you both win!`;
        body.className = 'mangoPulp';
    } else {
        if ((computerChoice === 'rock' && userChoice === 'paper') ||
            (computerChoice === 'scissors' && userChoice === 'rock') ||
            (computerChoice === 'paper' && userChoice === 'scissors')) {
            resultDisplay.innerHTML = `You chose "${userChoice}", Computer chose "${computerChoice }", YOU win!`;
            userWin += 1;
            userResult.innerHTML = userWin;
            body.className = 'seaWeed';
        } else {
            resultDisplay.innerHTML = `You chose "${userChoice}", Computer chose "${computerChoice }", YOU lost :( !`
            compWin += 1;
            coumputerResult.innerHTML = compWin;
            body.className = 'cherry';
        }
    }
}


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

function countingTurns() {
    turn += 1;
    turnsDisplay.innerHTML = turn;
}

function restartGame() {
    turn = 0;
    compWin = 0;
    userWin = 0;
    turnsDisplay.innerHTML = turn;
    coumputerResult.innerHTML = compWin;
    userResult.innerHTML = userWin;
}