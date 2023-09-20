// Here we are learning about the this keyword:

// this in global scope:
// console.log(this);


// this in fucntion scope:
function abcd() {
    console.log(this);
}

// abcd();


// this in method scope:
var obj = {
    name: "Zohaib",
    baatKaro: function() {
        console.log(this);
    }
}

// obj.baatKaro();


// this in event listeners:
var button = document.querySelector("button");
button.addEventListener("click", function(){
//  console.log(this);
    this.style.color="red";
});


// call, apply and bind keywords:
function ab() {
    // console.log(this);
    console.log(this.age);
}

function abc(val1,val2) {
    // console.log(this);
    console.log(this,val1,val2);
}

var ob = {
    age: 21
}

// ab();
// ab.call(ob);
// abc.call(ob, 1,2);
// abc.apply(ob,[1,2]);
var bindedFuns = ab.bind(ob);
bindedFuns();