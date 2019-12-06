//Constructor function 
function Person(first, last, age, gender, interests) {
    this.name = {
        first: first,
        last: last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;


    this.bio = function () {
        return (`${this.name.first} ${ this.name.last } is  ${this.age} years old. ${ this.gender = 'female'?'She':'He' } likes ${ this.interests[0] } and ${this.interests[1]}. `);
    }

    this.greeting = function () {
        return ('Hi! I\'m ' + this.name.first + '.');
    };
}

let person1 = new Person('Stela', 'Tasheva', 35, 'female', ['astronomy', 'photogrpahy']);
let person2 = Object.create(person1);
person2.name;
person2.greeting();
console.log(person2.name);



//Inheriting from prototype and creating new class based on inheritance
function OtherPorsen(first, last, interests, title, years) {
    Person.call(this, first, last, interests);

    this.title = title;
    this.years = years;
}

OtherPorsen.prototype = Object.create(Person.prototype);
Object.defineProperty(OtherPorsen.prototype, 'constructor', {
    value: OtherPorsen,
    enumerable: false, // so that it does not appear in 'for in' loop
    writable: true
});

let person3 = new OtherPorsen();
console.log(person3);