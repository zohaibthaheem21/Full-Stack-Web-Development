// forEach loop: -> It is used for array.
var arr = [1,2,3,4,5];

arr.forEach(function(val){
    console.log(val+2);
})

console.log(arr);

// forin loop: -> It is used for objects. 
var obj = {
    brand: "honda",
    model: 2023
}

for (var key in obj) {
    console.log(key, obj[key]);
}