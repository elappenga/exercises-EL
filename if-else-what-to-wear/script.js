function whatShouldIWear (temp) {
    if (temp <= 30) {
        return "Wear a coat."
    } else if (temp < 55) {
        return "Wear a jacket."
    } else {
        return "No coat needed."
    }
}

console.log(whatShouldIWear(25));
console.log(whatShouldIWear(45));
console.log(whatShouldIWear(65));
