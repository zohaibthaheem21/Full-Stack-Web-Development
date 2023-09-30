// here we are doing question of like pure functions related:

function abcd(val) {
    return Math.random()*val;
}

var ans1 = abcd(2);
var ans2 = abcd(2);

// So, this function will not return the same value for each answer eventhough we are inputing same value for each answer:
// Means the above example is not the pure function:

function abcdef(a,b) {
    return a*b;
}

var a1 = abcdef(1,2);
var a2 = abcdef(1,2);

// So, the above second example is the pure function example:


