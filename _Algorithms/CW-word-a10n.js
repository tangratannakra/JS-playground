const string = "You need, need not want, to complete this code-wars mission";


function abbreviate(string) {
    const abrv = (str) => str.slice(0, 1) + (str.length - 2) + str.slice(-1);
    let array = string.split(' ').map(el => {
        let specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        if (specialChars.exec(el)) {
            if (el.length > 4) {
                if (el[el.length - 1] !== ',') {
                    let char = el[specialChars.exec(el).index];
                    return strEl = el.split(char).map(string => abrv(string)).join(char);
                } else {
                    el = el.slice(0, -1);
                    return abrv(el) + ','
                }
            }
        } else if (el.length > 3) return abrv(el);

        return el
    });

    return array.join(' ');
}

console.log(abbreviate(string));


//Smart - /\b(\w{4,})\b/g
// function abbreviate2(string) {
//     return string.replace(/\w{4,}/g, function (word) {
//         return word.charAt(0) + (word.length - 2) + word.charAt(word.length - 1);
//     });
// }