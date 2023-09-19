// iife -> immediately invoked function expression:

var ans = (function() {
    var pVal = 20;

    return {
        getter: function() {
            console.log(pVal);
        },
        setter: function(val) {
            pVal = val;
        }
    }
})()