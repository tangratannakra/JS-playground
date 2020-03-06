function transportation(n, state) {

    let taxiDay = (70 + 79 * n);
    let taxiNight = (70 + 90 * n);
    if (n > 100) {
        //train
        return 6 * n / 100;
    } else if (n > 20) {
        //bus
        return (9 * n) / 100;
    } else {
        //taxi
        if (state === 'day') {
            return taxiDay / 100;
        } else {
            return taxiNight / 100;
        }
    }
}

console.log(transportation(180, 'night'))