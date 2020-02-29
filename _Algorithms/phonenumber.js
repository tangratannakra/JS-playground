function createPhoneNumber(numbers){
numbers.unshift('(');
numbers.splice( 4, 0, ") ");
numbers.splice(8,0,"-");

let phoneNumber;
phoneNumber = numbers.join("");
return phoneNumber;
    }

//createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

let phoneNumber = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

console.log(phoneNumber);