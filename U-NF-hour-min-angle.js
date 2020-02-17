var angleClock = function (hour, minutes) {
    let angle = Math.abs((11 / 2) * minutes - 30 * hour);
    // angle  
    //1min = 360/60 => 6deg/min
    //1h = 360/12 => 30deg/h => for 1min, the hour arm moves by 30deg/1h = 30deg/60min = 0.5deg/min
    //--------
    //hour arm position = h*30deg + min*0.5deg
    //min arm position = min*360/60
    //angle should be the difference between both?
    //angle = [h*30deg + min*0.5] - min*6 ???
    return angle; //angle.toString(60);

};

console.log(angleClock(12, 30))