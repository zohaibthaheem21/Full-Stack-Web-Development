// Q 1:

let a = prompt("Enter you age : ");
a = Number.parseInt(a);
if(a>=18) {
    alert("Yes.. You can drive..")
}
else {
    alert("No.. You can not drive..")
}


// Q 2:

let runAgain = true;
while(runAgain) {
    let a = prompt("Enter you age : ");
a = Number.parseInt(a);
if(a>=18) {
    alert("Yes.. You can drive..")
}
else {
    alert("No.. You can not drive..")
}
    runAgain = confirm("Do you want to drive again");
}


// Q 3:

let runsAgain = true;
while(runsAgain) {
    let a = prompt("Enter you age : ");
    a = Number.parseInt(a);
    if (a<0) {
        console.error("Please enter the positive number : ")
    }
else if(a>=18) {
    alert("Yes.. You can drive..")
}
else {
    alert("No.. You can not drive..")
}
    runsAgain = confirm("Do you want to drive again");
}


// Q 4:

let aa = prompt("Enter the number : ");
aa = Number.parseInt(aa);
if (a>4) {
    location.href = "https://www.google.com";
}


// Q 5:

let color = prompt("Enter the background of the page : ");
document.body.style.backgroundColor = color;