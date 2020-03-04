// Implement a class, which keeps a list of numbers, sorted in ascending order. It must support the following functionality:
// ⦁	add(elemenent) - adds a new element to the collection
// ⦁	remove(index) - removes the element at position index
// ⦁	get(index) - returns the value of the element at position index
// ⦁	size - number of elements stored in the collection
// The correct order of the elements must be kept at all times, regardless of which operation is called. 
// Removing and retrieving elements shouldn’t work if the provided index points outside the length of the collection 
// (either throw an error or do nothing). Note the size of the collection is not a function.

class List {
    constructor() {
        this.listData = [];
    }

    add(element) {
        this.listData.push(element);
        this.listData = this.listData.sort((a, b) => a - b);
    }

    remove(index) {
        if (index >= this.listData.length - 1) {
            throw new Error('no such index in the List');
        }

        this.listData.splice(index, 1);
        this.listData = this.listData.sort((a, b) => a - b);
    }

    get(index) {
        if (this.listData.length === 0) {
            throw new Error('Empty list');
        }
        if (index > this.listData.length - 1) {
            throw new Error(`Index out of range. The size of the list is ${this.listData.length}`)
        }
        return this.listData[index];
    }

    get size() {
        return this.listData.length;
    }
}


let list = new List(); //6
console.log(list.listData)


list.add(5); //7
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size)

// Input / Output
// All function that expect input will receive data as parameters. Functions that have validation will be tested with both valid and invalid data. 
// Any result expected from a function should be returned as it’s result.
// Your add and remove functions should return an class instance with the required functionality as it’s result. 
// Submit the class definition as is, without wrapping it in any function.