const soupOfTheDay = {
    name: 'winter vegetable',
    calories: 90,
    price: 1.75,
    vegan: true,
    discount: function(amount) {
        this.price = this.price - amount;
        console.log(this.price);
    },
}

console.log(soupOfTheDay);
console.log(soupOfTheDay.calories);
console.log(soupOfTheDay['price']);

soupOfTheDay.discount(.50);

delete soupOfTheDay.vegan;
soupOfTheDay['gluten-free']=true;
console.log(soupOfTheDay);