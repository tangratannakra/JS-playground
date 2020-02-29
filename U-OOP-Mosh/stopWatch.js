function StopWatch() {
    let duration, startTime, stopTime = 0;
    this.getDuration = () => duration;

    this.start = () => {
        if (!startTime) {
            startTime = new Date();
            return 'Stopwatch started at:' + startTime;
        } else {
            throw new Error('Stopwatch still running')
        }
    }

    this.stop = () => {
        if (!stopTime && startTime) {
            stopTime = new Date();

            const seconds = (stopTime.getTime() - startTime.getTime()) / 1000;
            duration += seconds;
            return 'duration is: ' + duration;
        } else {
            throw new Error('Stopwatch is stopped. You need to reset')
        }
    }

    this.reset = () => {
        if (!stopTime) {
            startTime = null;
            stopTime = null;
            duration = null;
        }
    }
}

const sw = new StopWatch();

console.log(sw.start());
console.log(sw.stop());
console.log(sw.getDuration())