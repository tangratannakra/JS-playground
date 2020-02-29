class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName}, (age: ${this.age}, email: ${this.email})`
    }
}

function personTable(person) {
    let peopleArray = [];
    let personArr = [];
    for (let key in person) {
        if (person[key]) {
            personArr.push(person[key]);
        }
    }

    peopleArray.push(personArr);
    return peopleArray;
}

let attenders = personTable(new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'));
console.log(attenders)




// Get Persons
// Write a function that returns an array of Person objects. Use the class from the previous task, create the following instances, and return them in an array:
// First Name	Last Name	Age	Email
// Anna	Simpson	22	anna@yahoo.com
// SoftUni			
// Stephan	Johnson	25	
// Gabriel	Peterson	24	g.p@gmail.com

// For any empty cells, do not supply a parameter (call the constructor with less parameters).