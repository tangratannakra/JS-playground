class Shape {
    constructor() {
        this.type;
    }

    getType() {

    };
}

class Triangle extends Shape {
    constructor(a, b, c) {
        super();
        this.a = a;
        this.b = b;
        this.c = c;
        this.type = 'triangle';
    }

    getPerimeter() {
        // let sum = (this.a + this.b + this.c) / 2;
        // console.log(sum)
        // this.area = Math.sqrt(sum * ((sum - this.a) * (sum - this.b) * (sum - this.c)));
        // console.log((sum - this.c))
        this.area = ((this.a * this.b) * Math.sin(this.c)) / 2
        return this.area;
    }

}

let t = new Triangle(1, 2, 3);
//Area = 1/2(a.b.sinC)

console.log(t.getPerimeter())

// Create an object called shape that has the type property and a getType() method.
// Define a Triangle() constructor function whose prototype is shape. Objects created with Triangle() should have three own properties—a, b, and c, 
// representing the lengths of the sides of a triangle.
// Add a new method to the prototype called getPerimeter().
// Test your implementation with the following code:


// > var t = new Triangle(1, 2, 3);
// > t.getPerimeter();
//        6
// > t.getType();

// "triangle"
// Loop over t showing only own properties and methods (none of the prototype's).
// Make the following code work:

// Copy
// > [1, 2, 3, 4, 5, 6, 7, 8, 9].shuffle();

// [2, 4, 1, 8, 9, 6, 5, 3, 7]