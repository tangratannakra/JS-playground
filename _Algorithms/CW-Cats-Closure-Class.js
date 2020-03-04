// Summary of requirements:
// Cat constructor, requiring arguments for name and weight
// Throw an error if name or weight not specified when invoking the constructor.
// Cat.averageWeight() method should give the average weight of all cat instances created with Cat, even after if the instance's properties have changed.
// Must use Object.defineProperty - getter/setter
let Cat = (function () {
    const cats = {
        count: 0,
        totalWeight: 0,
        averageWeight: 0
    };

    class Cat {
        constructor(name, weight) {
            this.name = name;
            this.weight = weight;
            cats.count++;
            //cats.totalWeight += this.weight;
            console.log(this.weight)
        }

        static averageWeight() {
            console.log(this)
            //console.log(cats.totalWeight)
            //return cats.totalWeight / cats.count;
        }

        set weight(val) {
            console.log(this.weight);
            console.log(this.name)
            cats.totalWeight = cats.totalWeight - this.weight;
            //console.log(cats.totalWeight)
            //cats.averageWeight = cats.totalWeight / cats.count;
            return this._weight = val;
        }

        get weight() {
            console.log(this._weight)
            return this._weight;
        }


    }

    return Cat;

})();

let cat1 = new Cat('name', 20);
//let cat2 = new Cat('pussy', 10);
//console.log(cat1.name)
//console.log(cat1.weight)
//cat1.weight = 30;
//console.log(cat1.weight)
//console.log(cat1.weight)
console.log(Cat.averageWeight())