var divisorGame = function (N) {
    let options = [];
    recursN(N);


    function recursN(n) {
        if (n === 1) return n;

        for (let x = 0; x < n; x++) {
            if (n % x === 0) {
                options.push(x);
            }
        };
        console.log(options)
        if (options.length == 0) {
            return false;
        }
        return recursN(n - 1);
    }
};


// NOT FINISHED


console.log(divisorGame(3));