class Meal {
    constructor(meal, proNeeded, price) {
        this.meal = meal;
        this.proNeeded = proNeeded;
        this.price = price;
    }
}


class Kitchen {
    constructor(budget) {
        this.budget = Number(budget);
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
    }

    loadProducts(productArr) {
        productArr.forEach(element => {
            let [productName, productQuantity, productPrice] = element.split(' ');
            if (this.budget > productPrice * productQuantity) {
                if (this.productsInStock.productName === productName) {
                    this.productsInStock.productName += Number(productQuantity);
                    this.budget -= productPrice * productQuantity;
                } else {
                    this.productsInStock[productName] = productQuantity;
                }

                this.budget -= productPrice * productQuantity;
                this.actionsHistory.push(`"Successfully loaded ${productQuantity} ${productName}"`);
            } else {
                this.actionsHistory.push(`"There was not enough money to load ${productQuantity} ${productName}"`)
            }
        });

        return this.actionsHistory;
    }


    addToMenu(meal, proNeeded) {
        if (this.menu.meal !== meal) {
            this.menu = new Meal(meal, proNeeded);
        } else {
            print(`The ${meal} is already in our menu, try something different."`)
        }
        return `"Great idea! Now with the ${meal} we have ${this.menu.length} more meals in the menu, other ideas?"`
    }

    showMenu() {
        if (!this.menu) {
            print(` ⦁	If our menu is empty, just print the message: \n
            "Our menu is not ready yet, please come later..."`);
        }
    }

}

let kitchen = new Kitchen(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

//
// Methods:

//=========================
// 
//=========================
// showTheMenu()
// ⦁	This method just prints all meals from our menu separated by a new line in format:
// {meal} - $ {meal price}
// {meal} - $ {meal price}
// {meal} - $ {meal price}
// …
//   At the end trim the result!
// ⦁	If our menu is empty, just print the message:
// "Our menu is not ready yet, please come later..."
//========================================
// makeTheOrder()
// ⦁	Accept 1 property meal (string).
// ⦁	This method searches the menu for a certain meal.
// ⦁	If we do not have the given meal, print the following message:
// "There is not {meal} yet in our menu, do you want to order something else?"
// ⦁	Otherwise if we have this meal in the menu, we need to check if we have the needed products to make it! If we do not have all needed products for this meal, print the following message:
// "For the time being, we cannot complete your order ({meal}), we are very sorry..."
// ⦁	If we have this meal in the menu and also, we have all needed products to make it, print the following message:
// "Your order ({meal}) will be completed in the next 30 minutes and will cost you {the current price of the meal}."
// ⦁	You also need to remove all used products from those in stock and add the price of the meal to the total budget.