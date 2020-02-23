var plusOne = function (digits) {
    let a = digits;
    let n = a.length;

    // Add 1 to last digit and find carry 
    a[n - 1] += 1;
    let carry = a[n - 1] / 10;
    a[n - 1] = a[n - 1] % 10;
    console.log(a[n - 1])
    console.log(carry)
    console.log(a)

    // Traverse from second last digit 
    for (let i = n - 2; i >= 0; i--) {
        if (carry == 1) {
            a[i] += 1;
            carry = a[i] / 10;
            console.log(carry)
            a[i] = a[i] % 10;
        }
    }

    console.log(a)

    // If carry is 1, we need to add 
    // a 1 at the beginning of vector 
    if (carry == 1) {

        a.unshift(1);

    }

    return a;

}


console.log(plusOne([9, 9, 9, 9, 9])) //6180