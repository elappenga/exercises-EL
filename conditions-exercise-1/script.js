let actualTemp = 65;
let desiredTemp = 72;
if (actualTemp<desiredTemp) {
    console.log('Run Heat');
} else if (actualTemp>desiredTemp) {
    console.log('Run A/C');
} else {
    console.log("Stand by");
}

let targetUnit = "F";
let tempCelsius = 25;
switch (targetUnit) {
    case "F":
        console.log(tempCelsius * 9/5 + 32);
        break;
    case "K":
        console.log(tempCelsius + 273.15);
        break;
    default:
        console.log(tempCelsius);
        break;
}
