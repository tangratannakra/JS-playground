// Never forget another recipe!

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

class Recepie {
    constructor(title, serves, ingredients, directions) {
        this.title = title;
        this.serves = serves;
        this.ingredients = ingredients;
        this.directions = directions
    }

    showRecepie() {
        return `Today we coock ${this.title} serving ${this.serves} people. To cook it you would need ${this.ingredients}. And do the following: ${this.directions}`
    }
}