// let and const:

// we can give value to let after declaration, but we can not give value to const after declaration:

let a;
a = 8;
console.log(a);


// const b; // -> will show error missing initialization:


// fat arrow function: (3 types)

// 1: basic fat arrow function:
let f = () => {
    console.log("Hey Zohaib");
}

f();

// 2: fat arrow function with one parameter: -> in this if you want, you can remove fat "()":
let fo = (param) => {
    console.log(param)
}

fo(21);

// 3: fat arrow function with implicit return:
let fi = () => "Zohaib Ali Thaheem"

console.log(fi());


// template literals (backtick ``):
console.log(`hey ${2+2} is 4 and ${2-2} is 0`);


// default parameter:
function abcd(param=0, a=0) {
    console.log(param,a);
}

abcd(21,11);
abcd(10);
abcd();

// ... spread/rest:

let arr = [1,2,3,4,5]

let ba = [...arr];

// the above is spread:

function re(a,b,c,...d) {
    console.log(a,b,c,d);
}

re(1,2,3,4,5,6,7,8);