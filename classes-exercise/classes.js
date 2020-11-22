class menuItem {
    constructor(name, calories, price, vegan) {
    this.name = name;
    this.calories = calories;
    this.price = price;
    this.vegan = vegan;
    }
    discount(amount) {
        this.price = this.price - amount;
        console.log(this.price);
    }
}

const winterVeg = new menuItem('winter vegetable', 90, 2.50, true);
const brocQuiche = new menuItem('Brocoli Quiche', 540, 6.95, false);
const cafeAmericano = new menuItem ('Cafe Americano', 320, 3.50, false);

console.log(brocQuiche);
brocQuiche.discount(1.45);
console.log(brocQuiche);
