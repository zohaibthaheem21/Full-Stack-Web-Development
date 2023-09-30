console.log("Operators in JS:");
console.log("Arithematic Operators in JS:");

let a = 10;
let b = 4;

console.log("a + b = "+ (a+b));
console.log("a - b = "+ (a-b));
console.log("a * b = "+ (a*b));
console.log("a / b = "+ (a/b));
console.log("a % b = "+ (a%b));
console.log("a ** b = "+ (a**b));
console.log("a++ = "+ a++); //10
console.log("a = "+ a);     //11
console.log("a-- = "+ a--); //11
console.log("--a = "+ --a); //9
console.log("a = "+ a); //9



console.log("Comparison Operators in JS:");

let comp1 = 12;
let comp2 = "6";

console.log("a==b = "+ (a==b));
console.log("a!=b = "+ (a!=b));
console.log("a===b = "+ (a===b));
console.log("a!==b = "+ (a!==b));
console.log("a>b = "+ (a>b));
console.log("a>=b = "+ (a>=b));
console.log("a<b = "+ (a<b));
console.log("a<=b = "+ (a<=b));


console.log("Assigment Operators in JS:");

let ass = 6;

ass += 6;
console.log(ass);

ass -= 6;
console.log(ass);

ass *= 6;
console.log(ass);

ass /= 6;
console.log(ass);


console.log("Logical Operators in Js:");

let x = 5;
let y = 6;

console.log("x>y && y>x = "+ (x>y && y>x));
console.log("x>y || y>x = "+ (x>y || y>x));
console.log(!false);
console.log(!true);