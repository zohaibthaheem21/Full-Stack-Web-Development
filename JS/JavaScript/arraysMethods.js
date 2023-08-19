// Array Methods:

// toString()
let num = [1,2,3,4,5,6];
let b = num.toString() // b is now string
console.log(b);
console.log(typeof(b));

// join()
let c = num.join("_");
console.log(c, typeof(c));

// pop()
num.pop();
let r = num.pop();  // pop() returns the pop() -> means remove karna last wala element:
console.log(num);
console.log(r);

// push()   -> means will add the element at the last:
let p = num.push(8);
console.log(p);
console.log(num);

// shift() -> means will remove the first element:
let s = num.shift();
console.log(num);
console.log(s, typeof(s));

// unshift() -> means will add the element at first:
let u = num.unshift(21);
console.log(num);
console.log(u, typeof(u));

// delete() -> delete but length will be remain same:
delete num[0];
console.log(num);
console.log(num.length);

// concat() -> will add many arrays:
let num1 = [1,2,3,4,5,6];
let num2 = [7,8,9,0,1];
let num3 = [898,7,8,9,0,1,78,900];

let num4 = num1.concat(num2,num3);
console.log(num4);

// sort() -> will sort alphabetically:
console.log("This is sorted array "+num3.sort());

// sort() in ascending order:
const compare = (a,b) => {
    return a - b;
}

num3.sort(compare);
console.log("This is sorted array in ascending order : "+num3);

// sort() in descending order:
const compares = (a,b) => {
    return b - a;
}

num3.sort(compares);
console.log("This is sorted array in descending order : "+num3);

// reverse():
console.log("This is the reverse order of the above : "+num3.reverse());