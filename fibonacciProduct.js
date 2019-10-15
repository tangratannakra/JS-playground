function productFib(prod) {
    let fibArr = [0, 1];
    let i = 0;

    while (fibArr[i] * fibArr[i + 1] < prod) {
        fibArr.push(fibArr[i] + fibArr[i + 1]);
        i++;
    }

    fibArr[i] * fibArr[i + 1] == prod ? statement = true : statement = false;

    return [fibArr[i], fibArr[i + 1], statement];
}


console.log(productFib(714));

//CodeWar
// function productFib(prod){
//     var findProd = function(a, b){
//       if (a * b == prod) return [a, b, true];
//       if (a*b > prod) return [a, b, false];
//       return findProd(b, a+b);
//     }
//     return findProd(0, 1); 
//   }