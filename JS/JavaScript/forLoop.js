// Doing sum from p to 

// for loop:
let sum = 0;
for (let i=0; i<5; i++) {
    sum += i;
    console.log(i+" +");
}
console.log("The sum is = "+sum);


const obj = {
    Zohaib:90,
    Saeed:95,
    Sandeep:97,
    Qurban:98
}

// for in loop:
for (let a in obj) {
    console.log("The marks of "+ a + " are "+ obj[a]);
}

// for of loop:
for (let b in "Zohaib") {
    console.log(b);
}