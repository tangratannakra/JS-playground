// You will be given two parameters as input:
// a number representing the capacity of each wagon of the train
// an array representing how many passengers want to enter each wagon of the train.
// The train starts with empty wagons and has length equal to the length of the passengers array.
// At each element of the array (the passengers) you have to check whether there is enough space in the particular wagon. Here there are two possibilities:

// Enough space - you add the passengers to that wagon of the train.

// Not enough space - you transfer the passengers that will not fit to the next wagon and try to fit them there.

// At the end you have to print the state of the train (number of passengers in each wagon separated by comma and space: ", ")
// If there was room for all passengers print: "All passengers aboard"
// Otherwise print: "Could not fit {remainingPassengers} passengers"

function trainstation(capacity, passengersArr) {
    const train = [];
    train.length = passengersArr.length;

    for (let i = 0; i < train.length; i++) {
        train[i] = 0;
    }

    let unborded = 0;
    for (let i = 0; i < train.length; i++) {

        if (passengersArr[i] < capacity - train[i]) {
            train[i] += passengersArr[i];
            if (train[i] < capacity && unborded) {
                let fill = capacity - train[i];
                unborded -= fill;
                train[i] += fill;

            }
        } else {
            train[i] = capacity;
            unborded = passengersArr[i] - capacity;
        }
    }
    return `${train}` + '\n' + (unborded === 0 ? " All passengers aboard" : " Could not fit " + unborded + " passengers");
}




console.log(trainstation(6, [5, 15, 2]))

// Input
// Two parameters:
// A number - the capacity of each wagon
// An array - number of passengers that want to go in each wagon


// Output
// Two lines:
// State of the train: all the wagons (array) with all fit passengers
// If there was place for all passengers: "All passengers aboard"; otherwise: "Could not fit {remainingPassengers} passengers"