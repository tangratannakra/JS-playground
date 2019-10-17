function incrementString(strng) {
    let arr = strng.split('');
    let i = 1;

    if (isNaN(arr[arr.length - i])) {
        arr.push(i);
    } else {
        if (Number(arr[arr.length - i]) === 9) {
            while (Number(arr[arr.length - i]) === 9) {
                arr[arr.length - i] = 0;
                i++;
            }
            if (isNaN(arr[arr.length - i])) arr.splice((arr.length - i + 1), 0, 0);
        }
        arr[arr.length - i] = Number(arr[arr.length - i]) + 1;
    }
    return arr.join('');
}

console.log(incrementString('foobar200'));


// Test.assertEquals(incrementString("foobar000"), "foobar001");
// Test.assertEquals(incrementString("foo"), "foo1");
// Test.assertEquals(incrementString("foobar001"), "foobar002");
// Test.assertEquals(incrementString("foobar99"), "foobar100");
// Test.assertEquals(incrementString("foobar099"), "foobar100");
// Test.assertEquals(incrementString(""), "1");

// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.

//Examples:
// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.