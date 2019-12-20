const diplay = document.querySelector("#display");
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');

let started;
let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

const watch = () => {
    const incrementer = () => {

        seconds++;


        if (seconds == 10) {
            seconds = 0;

        }

        // if (seconds < 10) {

        // } else if (initial = 10) {

        //     initial = 0;
        //     minutes++;

        //     if (minutes < 10) {

        //     } else if (minutes = 10) {
        //         hours++;
        //         minutes = 0;
        //     }
        // }
        // seconds = `0${initial}`

        display.innerHTML = `${hours}:${minutes}:${seconds}`;
    }

    if (!started) {
        timer = setInterval(incrementer, 1000);
        started = true;
    };
}

const stopWatch = () => {
    clearInterval(timer);
    started = false;
}

const reset = () => {
    if (started == true) {
        //watch is running;
    } else if (!started) {
        initial = 1;
        display.innerHTML = "00:00:00";
    }
}

display.innerHTML = "00:00:00";

startBtn.addEventListener('click', watch);
stopBtn.addEventListener('click', stopWatch);
resetBtn.addEventListener('click', reset);