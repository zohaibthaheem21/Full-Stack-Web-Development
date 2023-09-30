// Q 1:

// let arr = [1,2,3,4,5,6];
// let a = prom;t("Enter a number : ");
// a = Number.parseInt(a);
// arr.push(a);
// console.log(arr);


// Q 2:

// let arr = [1,2,3,4,5,6];
// let a;
//  do {
//     a = prompt("Enter a number : ");
//     a = Number.parseInt(a);
//     arr.push(a);
//     console.log(arr);
// } while(a!=0);


// Q 3:

let arr2 = [10,20,30,40,50,60,,70,80,90,110,220,45,66,77,88,99,1,2,4,5,8];
let newArray = arr2.filter((a) => {
    return a%10 == 0;
});
console.log(newArray);


// Q 4:

let arr = [1,3,4,5,6,7,8];
let a = arr.map((a) => {
    console.log(a);
    return a * a;
})
console.log(a);


// Q 5:

let arr3 = [1,2,3,4,5];
let nA = arr3.reduce((h1,h2) => {
    return h1 * h2;
})
console.log(nA);