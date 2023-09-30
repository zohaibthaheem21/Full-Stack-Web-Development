// If else statements:

let a = prompt("Hey what's your age : ");
// console.log(typeof(a));
a = Number.parseInt(a);
// console.log(typeof(a));

if (a==0) {
    alert("you are not born yet!")
}
else if (a>9 && a<18) {
    alert("you are kid yet!");
}
else if (a>=18 && a<30) {
    alert("you are young now!");
}

else {
    alert("you are becoming old now!")
}



// Conditional Operators:

let z = 17;
console.log("you can", (a>18? "drive":"not drive"));
