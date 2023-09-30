// Constructors in js:

function fruit() {
    this.color = "green";
    this.name = "water melon";
    this.price = 100;
}

var f1 = new fruit();
var f2 = new fruit();


function car(name,model,color,price) {
    this.name = name;
    this.model = model;
    this.color = color;
    this.price = price;
}

var c1 = new car("alto",2023,"black",2000000);
var c2 = new car("mehran",2018,"black",1200000);
var c3 = new car("bmw",2024,"white",20000000);