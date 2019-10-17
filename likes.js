function likes(names) {
    let first = '';
    let last = '';

    if (names.length == 0) names.push('no one');

    if (names.length <= 3) {
        first = names.slice(0, names.length - 1);
        last = names[names.length - 1];
    } else {
        first = names.slice(0, 2);
        last = `${names.length - 2} others`;
    }

    first = first.toString().split(',').join(', ');

    return `${first}${names.length > 1 ?' and ':''}${last} ${names.length == 1 ? 'likes':'like'} this`;
}


console.log(likes(["Jacob", "Alex"]));

//also
// function likes(names) {
//     switch (names.length){
//         case 1: return names[0] + ' likes this';
//         case 2: return names[0] + ' and ' + names[1] + ' like this';
//         case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
//         default: return names.length > 3 ? names[0] + ', ' + names[1] + ' and ' + (names.length - 2).toString() + ' others like this' : 'no one likes this';
//     }
// }

// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"