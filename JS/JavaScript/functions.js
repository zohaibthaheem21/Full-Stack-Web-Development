// functions:

const hello = () => {
    console.log("Hello World!");
    return "hi";
}


let v = hello();
console.log(v);


const sum = (p,q) => {
    return p + q;
}

console.log(sum(6,7));


function myFun(x,y) {
    return 1 + (x+y) / 2;
}

let a = 2;
let b = 3;
let c = 4;

console.log("one plus average is = "+(a,b));
console.log("one plus average is = "+(c,b));
console.log("one plus average is = "+(a,c));