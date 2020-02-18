var isAnagram = function (s, t) {
    let sObj = map(s);
    let tObj = map(t);

    if (Object.keys(sObj).length !== Object.keys(tObj).length) {
        return false;
    } else {
        for (let letter in sObj) {
            if (sObj[letter] !== tObj[letter]) return false;
        }
    }

    return true;
};


function map(string) {
    const map = {};
    for (let letter of string) {
        if (!map[letter]) {
            map[letter] = 1;
        } else {
            map[letter]++
        }
    }
    return map;
}

console.log(isAnagram("rat", "car"));