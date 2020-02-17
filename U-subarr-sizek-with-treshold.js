//Given an array of integers arr and two integers k and threshold.
//Return the number of sub-arrays of size k and average greater than or equal to threshold.
//Input: arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
//Output: 3
//Explanation: Sub-arrays [2,5,5],[5,5,5] and [5,5,8] have averages 4, 5 and 6 respectively. All other sub-arrays of size 3 have averages less than 4 (the threshold).

var numOfSubarrays = function (arr, k, threshold) {
    let numberOfArr = 0;
    let y = k;
    for (let i = 0; i < arr.length; i++) {
        const newArr = arr.slice(i, y)
        const average = newArr.reduce((x, y) => x + y, 0) / k;
        console.log(newArr.length)
        if ((average > threshold || average == threshold) && newArr.length == k) {
            console.log(newArr.length)
            numberOfArr++;
        }
        y++;
        console.log(i);
        console.log(y);
        console.log(k)
    }
    return numberOfArr;
};

console.log(numOfSubarrays([4, 4, 4, 4], 4, 1))