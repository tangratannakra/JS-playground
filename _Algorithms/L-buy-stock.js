// 121. Best Time to Buy and Sell Stock
// Say you have an array for which the ith element is the price of a given stock on day i.
// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), 
// design an algorithm to find the maximum profit.
// Note that you cannot sell a stock before you buy one.

var maxProfit = function (prices) {
    if (prices.length == 2 && prices[0] === prices[1]) return 0;

    [sP, sI, bP, bI] = minMax(prices);


    if (sI < bI) {
        console.log(sI)
        arr1 = minMax(prices.slice(0, sI))
        console.log(arr1)
    }

    function minMax(arr) {
        let sellPrice = Math.max(...prices.slice(1));
        let sellIndex = prices.lastIndexOf(sellPrice) // max nonindex velue;
        let buyPrice = Math.min(...prices) // min value
        let buyIndex = prices.indexOf(buyPrice)
        console.log(buyIndex, buyPrice)
        console.log(sellIndex, sellPrice)



        return [sellPrice, sellIndex, buyPrice, buyIndex];
    }
    // for (let i = 1; i < prices.length; i++) {
    //     if (prices[i] >= sellPrice && i !== 0) {
    //         sellPrice = prices[i];
    //         sellIndex = i;
    //     }
    // }

    // for (let i = 0; i < sellIndex; i++) {

    //     console.log(buyPrice)
    //     if ((buyPrice > prices[i])) {
    //         console.log(buyPrice)
    //         buyPrice = prices[i];
    //         buyIndex = i;
    //     }
    // }
    // console.log(sellPrice)
    // console.log(sellIndex)
    // console.log(buyPrice)
    // console.log(buyIndex)
    // if (buyIndex < sellIndex) {
    //     if (sellPrice - buyPrice < 0) return 0;
    //     return sellPrice - buyPrice;
    // } else {
    //     return 0;
    // }
};

console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]))

// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.