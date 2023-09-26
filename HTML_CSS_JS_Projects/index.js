// var elem1 = document.querySelector("#elem1")

// var  elem1Image = document.querySelector("#elem1 img")

// elem1.addEventListener("mousemove",function(dets){
//     elem1Image.style.left = dets.x+"px"
//     elem1Image.style.top = dets.y+"px"
// })

// elem1.addEventListener("mouseenter",function(dets){
//     elem1Image.style.opacity = 1
// })

// elem1.addEventListener("mouseleave",function(dets){
//     elem1Image.style.opacity = 0
// })


// If I want to select the all elements then:

var elem = document.querySelectorAll(".elem")

elem.forEach(function(val){
    val.addEventListener("mouseenter",function(){
        val.childNodes[3].style.opacity = 1
    });

    val.addEventListener("mouseleave",function(){
        val.childNodes[3].style.opacity = 0
    });

    val.addEventListener("mousemove",function(dets){
        val.childNodes[3].style.left = dets.x+"px"
        val.childNodes[3].style.top = dets.y+"px"
    });
})  