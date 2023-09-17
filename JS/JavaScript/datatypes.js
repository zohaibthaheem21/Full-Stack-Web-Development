// Primitive datatypes:
// nn bb ss u

let a = null;
let b = 21;
let c = true;   // can also be false
let d = BigInt("21");
let e = "Zohaib";
let f = Symbol("I am a symbol");
let g = undefined;

console.log(a,b,c,d,e,f,g);

console.log(typeof(d));


// Objects in JS:

const item = {
    "Zohaib": true,
    "Saeed": undefined,
    "Shayan": 46,
    "Sandeep":false
}

console.log(item["Zohaib"]);

const bike = {
    brand: "honda",
    cc: 125,
    color: "silver",
    price: 150000,
    model: 2023,
    kahanSy: function () {
        // here kahanSy is method
    }
}

console.log(bike.model);

bike.brand = "cd";

console.log(bike.brand);