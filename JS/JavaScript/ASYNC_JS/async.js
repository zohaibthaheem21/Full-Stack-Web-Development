// sync and async:

console.log("Hello World!");

setTimeout(function() {
    console.log("It's me Zohaib Ali Thaheem");
},2000);

console.log("Hey");


// promise

var ans = new Promise((res,rej)=> {
    if (true) {
        return res();
    }
    else {
        return rej();
    }
})

ans
.then(function() {
    console.log("It is resolved.");
})
.catch(function(){
    console.log("It is rejected.");
})


// another example of promise we are doing here:

var r = new Promise((ress,rejj)=> {
    var a = Math.floor(Math.random()*10);
    // console.log(a);
    if (a < 5) {
        return ress();
    }
    else {
        return rejj();
    }
})

r.then(function() {
    console.log("Below")
})
.catch(function(){
    console.log("After")
})


// another example:

var p = new Promise(function(re,rj) {
    return re("hostel aaaooo");
})

var p2 = p.then(function(data){
    console.log(data); 
    return new Promise(function(re,rj){
        return re("door open karo");
    })
})

var p3 = p2.then(function(data){
    console.log(data);
    return new Promise(function(re,rj){
        return re("Mobile chalaoo");
    })
})


var p4 = p3.then(function(data){
    console.log(data);
    return new Promise(function(re,rj){
        return re("Khana khaooo");
    })
})

var p5 = p4.then(function(data){
    console.log(data);
    return new Promise(function(re,rj){
        return re("sooo jaaooo ab beta");
    })
})

p5.then(function(data){
    console.log(data);
})


// async await:

// function abcd() {
//     fetch("https://randomuser.me/")
//     .then(function(raw){
//         return raw.json();
//     })
//     .then(function(data){
//         console.log(data);
//     })
// }

// abcd();

// async function abcd() {
//     let raw = await fetch("https://randomuser.me/");
//     let answer = await raw.json();
//     console.log(answer);  
// }

// abcd();