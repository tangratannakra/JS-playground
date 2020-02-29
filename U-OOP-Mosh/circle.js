function Circle(radius) {
    let defaultLocation = {
        x: 0,
        y: 0
    };

    this.getDefaultLocation = () => {
        return defaultLocation;
    }

    this.setDefaultLocation = (x, y) => {
        defaultLocation.x = x;
        defaultLocation.y = y;
    }

    this.radius = radius;

    this.draw = function () {
        console.log('draw')
    }
}

const circle1 = new Circle(10);
circle1.setDefaultLocation(5, 7);

console.log(circle1.getDefaultLocation())