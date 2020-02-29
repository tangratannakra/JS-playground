class Kitchen {
    constructor(budget) {
        this.budget = budget;
        this.menu, this.productsInStock, this.actionsHistory = null;
    }

    loadProducts(productArr) {
        for (let item of productArr) {
            let productProps = item.split(' ');
            let [productName, prodyctProps, productPrice] = productProps;
            //console.log(productName + productPrice)
            if (this.budget > productPrice) {
                // ⦁	 If the current product already exists into productsInStock just add the new quantity
                //add to this.productsInStock
                //keeping the name and quantity
                //and we deduct the price of the product from our budget. 
                return "Successfully loaded {productQuantity} {productName}"
            } else {
                // "There was not enough money to load {productQuantity} {productName}"
                // ⦁	This method must return all actions joined by a new line! ???????

            }
        }
    }
}

let kitchen = new Kitchen(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));


//
// Methods:
//=========================
// loadProducts() 
// ⦁	Accept 1 property products (array from strings).
// ⦁	Every element into this array is information about product in format:
// "{productName} {productQuantity} {productPrice}"
// ⦁	They are separated by a single space
// Example: ["Banana 10 5", "Strawberries 50 30", "Honey 5 50"…]
// ⦁	This method appends products into our products in stock (productsInStock) under the following circumstances:
// ⦁	If the budget allows us to buy the current product, we add it to productsInStock keeping the name and quantity of the meal and we deduct the price of the product from our budget. If the current product already exists into productsInStock just add the new quantity
// ⦁	And finally, whether or not we have added a product to stock or not, we record our action in the actionsHistory:
// ⦁	If we were able to add the current product:
// "Successfully loaded {productQuantity} {productName}"
// ⦁	If we not:
// "There was not enough money to load {productQuantity} {productName}"
// ⦁	This method must return all actions joined by a new line!
//=========================
// addToMenu()
// ⦁	Accept 3 properties meal (string), needed products (array from strings) and price (number).
// ⦁	Every element into needed products is in format:
// "{productName} {productQuantity}"
// ⦁	They are separated by a single space!
// ⦁	This method appends a new meal into our menu and returns the following message: 
// "Great idea! Now with the {meal} we have {the number of all means in the menu} meals in the menu, other ideas?"
// ⦁	If we do not have the given meal into our menu, we added it keeping all that we are given as information. Otherwise if we already have this meal print the message:
// " The {meal} is already in our menu, try something different."
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