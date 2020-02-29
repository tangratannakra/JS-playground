function wave(str) {
    let resultArry = [];
    let arr = str.split('');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ' ') continue;
        resultArry.push(str.substr(0, i) + str[i].toUpperCase() + str.substr(i + 1, str.length));
    }

    return resultArry;
}

console.log(wave(" blah blah "));