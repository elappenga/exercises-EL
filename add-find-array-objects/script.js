function addCar (array, make, model, year, cost, hasWarranty) {
    array.push({Make:make, Model:model, Year:year, Cost:cost, hasWarranty:hasWarranty});
}

function findFordCar(array) {
    return array.find(car => car.Make === "Ford");
    }

const cars = [
    { Make: "Ford", Model: "Fusion", Year: 2018, Cost: 20000, hasWarranty: true },
    { Make: "Ford", Model: "Focus", Year: 1990, Cost: 3000, hasWarranty: false },
    { Make: "Jeep", Model: "Cherokee", Year: 2019, Cost: 45000, hasWarranty: true }
]

// console.log(cars);

// addCar(cars, "Ford", "Edge", 2002, 10000, false);

// console.log(cars[3]);

const fordCar = findFordCar(cars);
console.log(fordCar);