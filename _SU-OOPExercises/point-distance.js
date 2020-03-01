// ⦁	Point Distance
// Write a JS class that represents a Point. It has x and y coordinates as properties, that are set through the constructor, 
//and a static method for finding the distance between two points, called distance().

// The distance() method should return a number, the distance between the two point parameters.
// Submit the class definition as is, without wrapping it in any function.

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(p1, p2) {
        return Math.sqrt(Math.pow((p2.x - p1.x), 2) + (Math.pow((p2.y - p1.y), 2)));
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);

console.log(Point.distance(p1, p2));

// let p1 = new Point(5, 5);
// let p2 = new Point(9, 8);
// console.log(Point.distance(p1, p2));