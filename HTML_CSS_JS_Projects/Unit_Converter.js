var feet = document.querySelector("#feet")

var inche = document.querySelector('#inch')

feet.addEventListener("input",function(){
    var f = this.value;
    var i = f*12;
    inche.value = i;
})

inch.addEventListener("input",function(){
    var i = this.value;
    var f = i/12;

    // I used this function to give only two number after the . decimal:
    if(!Number.isInteger(f)) {
        f = f.toFixed(2);
    }; 

    feet.value = f;
})