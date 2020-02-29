function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - (1 - j); j++) {
            if (arr[j] > arr[j + 1]) {
                const buffer = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = buffer;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([3, 1, 5, 6, 8, 2]))