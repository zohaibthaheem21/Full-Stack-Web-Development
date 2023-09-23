// 4 Pillars of DOM:

// 1: Selection of an element
var a = document.querySelector("h1");

// 2: Changing HTML
a.innerHTML= "Software Engineer";

// 3: Changing CSS
a.style.color = "yellow";
a.style.backgroundColor = "black";

// 4: Event Listener
a.addEventListener("click",function(){
    // console.log("Zohaib");
    a.innerHTML = "Zohaib";
    a.style.color = "black";
    a.style.backgroundColor = "yellow";
});


// Example:
var bulb = document.querySelector("#bulb");
var btn = document.querySelector("button");

var flag = 0;

btn.addEventListener("click",function(){
    if (flag == 0) {
        bulb.style.backgroundColor = "yellow";
        btn.innerHTML = "OF";
        flag = 1;
    }
    else {
        bulb.style.backgroundColor = "transparent";
        btn.innerHTML = "ON";
        flag = 0;
    }
})


// Multiple Events:
var h = document.querySelectorAll("h2")
// console.log(h);

h.forEach(function(e){
    console.log(e)
})



// textContent

var t = document.querySelector("#box")
t.innerHTML = "<h1>Hello</h1>"
t.textContent = "<h1>Hello</h1>"