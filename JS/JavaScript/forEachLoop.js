let num = [1,2,4,5,6,7,8,9];

// Printing using only for loop simple:
console.log("This is using only simple for loop:");
for (let i=0; i<num.length; i++) {
    console.log(num[i]);
}


// forEach Loop:
console.log("This is multiple of above numbers using forEacah loop:");
num.forEach((element) => {
    console.log(element*element);
});


// Array.from
console.log("This is Array.from:")
let nam = "Zohaib";
let arr = Array.from(nam);
console.log(arr)

// for...of -> short form of simple array:
console.log("This is for...of loop:")
for (let i of num) {
    console.log(i);
}

// for...in
console.log("This is for...in loop:")
for (let a of num) {
    console.log(a);
}