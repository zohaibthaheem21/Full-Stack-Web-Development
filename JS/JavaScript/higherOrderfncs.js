// higher order functions:

function abcd(val) {
    val();
}

abcd(function() {
    console.log("hello dear...");
})

// we can say that forEach is higher Order function:

var arr = [1,2,3,4,54];

arr.forEach(function(ele) {
    console.log(ele);
})