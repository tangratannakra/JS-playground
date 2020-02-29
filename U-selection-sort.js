function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexOfMin = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[indexOfMin] > arr[j]) {
                indexOfMin = j;
            }
        }

        if (indexOfMin !== i) {
            let buffer = arr[i];
            arr[i] = arr[indexOfMin];
            arr[indexOfMin] = buffer;
        }
    }

    return arr;
}
console.log(selectionSort([5, 3, 2, 7]));