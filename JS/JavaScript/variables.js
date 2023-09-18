var a = 21;
console.log(a);

var a =21;


var a = "Zohaib";
console.log(a);

let b = 10;
console.log(b);

// let b = 12; // will show error
b = 11;
console.log(b);


// var can be update, and re-declared
// let can not be update, but can be re-declared
// const can not be update, nor re-declared



function abcd() {
    for (var i=1; i<12; i++) {
        console.log(i);
    }
    console.log(i);
}

abcd();


function abcde() {
    for (let h=1; h<12; h++) {
        console.log(h);
    }
    console.log(h);
}

abcde();

// so from here we understand that var is the function scoped and 
// let is the only braces scoped

// var itself adds to the window object:
// let const doesn't adds