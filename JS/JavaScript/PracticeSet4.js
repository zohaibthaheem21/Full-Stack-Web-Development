// Q 1:

console.log("Using for loop:")
const marks = {
    zohaib: 90,
    aslam: 97,
    salman: 89,
    shahrukh: 78
}

for (let i=0; i<Object.keys(marks).length; i++) {
    console.log("The marks of "+ Object.keys(marks)[i]+" are "+marks[ Object.keys(marks)[i]]);
}

// Q 2:

console.log("Using for in loop:")
for (let key in marks) {
    console.log("The marks of "+ key +" are "+marks[key]);
}

// Q 3:

// let cn = 21;
// let i;
// while(i != cn) {
//     // i = prompt("Enter a number : ");
// }

// console.log("Yes! you have enterd a correct number.");

// alert("Yes! you have enterd a correct number.");

// Q 4:

const mean = (a,b,c,d,e) => {
    return (a+b+c+d+e) / 5;
}

console.log("The mean is = "+mean(2,3,4,1,5));