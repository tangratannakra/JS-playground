class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}

let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
console.log(person.toString())

// Write a class that represents a personal record. It has the following properties, all set from the constructor:
// ⦁	firstName
// ⦁	lastName
// ⦁	age
// ⦁	email
// And a method toString(), which prints a summary of the information. See the example for formatting details.

// Sample Input

// console.log(person.toString());
// Output
// Anna Simpson (age: 22, email: anna@yahoo.com)