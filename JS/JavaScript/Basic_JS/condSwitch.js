const expr = "Mangoes";

switch(expr) {
    case "Oranges":
        console.log("Oranges are of 80 rs.");
        break;
    case "Apple":
    case "Banana":
        console.log("Apple and Banana are of 180 rs.");
        break;
    case "Grapes":
        console.log("Grapes are of 160 rs.")
        break;
    default:
        console.log("Sorry! we have not that fruit.")
}