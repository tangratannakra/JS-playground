// Pete likes to bake some cakes. He has some recipes and availableedients. Unfortunately he is not good in maths. 
//Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available availableedients (also an object) 
//and returns the maximum number of cakes Pete can bake (integer). 
// availableedients that are not present in the objects, can be considered as 0.

// Examples:
// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});

function cakes(recipe, available) {
    if (Object.keys(available).length === 0 || Object.keys(available).length < Object.keys(recipe).length) return 0;
    else {
        let amount = [];
        for (let i in recipe) {
            if (i in available) {
                if (available[i] >= recipe[i]) {
                    amount.push(Math.trunc(available[i] / recipe[i]));
                } else {
                    return 0;
                }
            }
        }

        amount.sort((a, b) => a - b);
        return amount[0]
    }
}

//2 obj
//compae length
//if equal, check key by key




console.log(cakes({
    "chocolate": 75,
    "nuts": 5,
    "flour": 19
}, {
    "milk": 1600,
    "cream": 8900,
    "crumbles": 1600,
    "apples": 7900,
    "sugar": 4300,
    "oil": 8400,
    "chocolate": 1900,
    "flour": 200,
    "pears": 8900,
    "eggs": 4800,
    "cocoa": 7100,
    "nuts": 3800,
    "butter": 9900
}))