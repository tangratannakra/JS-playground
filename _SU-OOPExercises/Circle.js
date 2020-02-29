class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(diameter) {
        this.radius = diameter / 2;
    }

    area() {
        return 2 * Math.PI * this.radius;
    }
}

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area()}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area()}`);

const circle = 2 * Math.PI * 0.8
console.log(circle)

// Write a class that represents a Circle. It has only one data property - it’s radius, and it is set trough the constructor. 
// The class needs to have getter and setter methods for its diameter - the setter needs to calculate the radius and change it 
// and the getter needs to use the radius to calculate the diameter and return it.
// The circle also has a getter area(), which calculates and returns its area.

// Output
// The diameter() and area() getters should return numbers.
// Submit the class definition as is, without wrapping it in any function.