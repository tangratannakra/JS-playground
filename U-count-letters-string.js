function maxChar(str) {
    let map = {};
    let max = 0;
    let maxChar = '';

    for (let letter of str) {
        map[letter] ? map[letter]++ : map[letter] = 1;
    }

    for (let key in map) {
        if (map[key] > max) {
            max = map[key];
            maxChar = key;
        }
    }
    return `${maxChar}:${max}`;
}

console.log(maxChar('ppp aaaa'));