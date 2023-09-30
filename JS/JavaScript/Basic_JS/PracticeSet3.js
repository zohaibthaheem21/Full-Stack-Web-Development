// Q 1:

let age = 23;

if (age>9 && age<20) {
    console.log("your age is between 9 and 20.");
}
else {
    console.log("your age is not between 9 and 20.")
}

// Q 2:

const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}


// Q 3:

let num = 8;

if (num%2==0 && num%3==0) {
    console.log("Yes it is divisible by 2 and 3.");
}
else {
    console.log("No it is not divisible by 2 and 3.");
}


// Q 4:

let nu = 8;

if (nu%2==0 || nu%3==0) {
    console.log("Yes it is divisible by 2 and 3.");
}
else {
    console.log("No it is not divisible by 2 and 3.");
}


// Q 5:

let ag = 25;
// let ag = 17;
let a = ag>18? "You can drive.":"You can not drive.";
console.log(a);