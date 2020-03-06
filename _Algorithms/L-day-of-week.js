var dayOfTheWeek = function (day, month, year) {
    const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let date = new Date(`${month} ${day},${year}`);
    return week[date.getDay()];
}

console.log(dayOfTheWeek(15, 8, 1993))

//Not Entarely correct 

// var dayOfTheWeek = function (day, month, year) {
//     const a = Math.floor((14 - month) / 12);
//     const y = year - a;
//     const m = month + 12 * a - 2;

//     const week = ['Sunday', "Moday", "Tuesday", "Wednesday", 'Thursday', 'Friday', 'Saturday', 'Sunday']

//     const dayOfWeek = (day + y + Math.floor(y / 4) - Math.floor(y / 100) +
//         Math.floor(year / 400) + Math.floor((31 * m) / 12)) % 7;
//     console.log(dayOfWeek)

//     return week[dayOfWeek];
// }