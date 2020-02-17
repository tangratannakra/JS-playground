function palindrom(str) {
    const reversedStr = str.split('').reverse().join('');
    return reversedStr == str ? true : false;

}

console.log(palindrom('blah'));