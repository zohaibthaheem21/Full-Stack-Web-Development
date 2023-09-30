alert("Enter the value of a : ");
let a = prompt("Enter the a : ");
a = Number.parseInt(a);
alert("The Number entered is type of "+typeof(a));
let write = confirm("Do you want to write it on the page : ");
    if (write) {
        document.write(a);
    }
    else {
        document.write("Please allow me to write...")
    }