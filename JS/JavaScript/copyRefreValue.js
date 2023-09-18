// I can use spread operator to copy reference values in js:
var arr = [1,2,3,4,5,6,7,8,9];
var ar = arr;

var a = [...arr];

arr.pop();

var ob = {
    brand: "AgriClic"
}

var o = ob;
var op = {...ob};

o.brand = "AgriClick";
