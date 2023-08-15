for (let i=0; i<10; i++) {
    // console.log(i);
}


// Program to sum up to number:

let sum = 0;

let n = prompt("Enter the value of n: ");
n = Number.parseInt(n);

for(let i=0; i<n; i++) {
    sum += (i+1);
}

console.log("The sum is = "+sum);


// prompt is not working in vs code but, I used to for practing: