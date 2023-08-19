let arr = [1,23,4,5,6,7];
console.log(arr);

// Array map method:
console.log("This is map method : ")
let a = arr.map((a, index, array) => {
    console.log(a, index, array);
    return a + 1;
})
console.log(arr, a);


// Array filter method:
console.log("This is filter method : ")
let arr2 = [45,66,77,88,99,1,2,4,5,8];
let newArray = arr2.filter((a) => {
    return a < 10;
    // return a > 10;
});

console.log(arr2, newArray);

// Array reduce method:
console.log("This is reduce method : ")
let arr3 = [1,2,3,4,6,7,8,9,10];
let nA = arr3.reduce((h1,h2) => {
    return h1 + h2;
})
console.log(nA);