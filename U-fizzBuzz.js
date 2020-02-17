function fizzBuzz(num) {
    for (let i = 0; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
            console.log(i)
        } else if (i % 5 === 0) {
            console.log('buzz')
            console.log(i);
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(15);