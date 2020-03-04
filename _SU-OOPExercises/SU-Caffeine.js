// Every day - 3 cups of coffee(150 ml per cup) + 2 bottles of coca cola(250 ml per bottle) +3 cups of tea(350 ml per tea)

// Every 5 th day he drinks 3 energy drinks(500 ml per can)

// Every 9 th day he drinks 4 bottles of coca cola and 2 energy drinks


function study(days) {
    let caffeine = 0;
    const bcola = 250 * (8 / 100);
    const ecan = 500 * (30 / 100);
    const tcup = 350 * (20 / 100);
    const ccup = (150 / 100) * 40;

    for (i = 1; i <= days; i++) {
        if (i % 9 === 0) {
            caffeine += 4 * bcola + 2 * ecan;
        } else if (i % 5 === 0) {
            caffeine += 3 * ecan;
        } else {
            caffeine += 3 * ccup + 2 * bcola + 3 * tcup;
        }
    }

    return `${caffeine} milligrams of caffeine were consumed`
}

console.log(study(8))

// Coffee - 40 mg caffeine per 100 ml
// Coca Cola - 8 mg caffeine per 100 ml
// Tea - 20 mg caffeine per 100 ml
// Energy - 30 mg caffeine per 100 ml

// You will receive a single number.That number represents the duration of the study in days.
// You must calculate how many caffeine Scaroo consumes in this duration and print the result.
// Input
// You will receive a number(days), which is the duration of the study
// That number always will be greater or equal to 1 and lesser or equal to 30
// Output
// Print the result in format:
//     "{consumedCaffeine} milligrams of caffeine were consumed"