var crsr = document.querySelector("#cursor");
var crsr_b = document.querySelector("#cursor-b");

document.addEventListener("mousemove",function(dets) {
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    crsr_b.style.left = dets.x - 150 +"px"
    crsr_b.style.top = dets.y - 150 +"px"
})



gsap.to("#nav",{
    backgroundColor: "#000",
    height: "100px",
    duration: 0.2,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})