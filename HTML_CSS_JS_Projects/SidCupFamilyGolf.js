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

var h4All = document.querySelectorAll("#nav h4")

h4All.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid white"
        crsr.style.backgroundColor = "transparent"
    })

    e.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "1px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})

gsap.from("#about-us img, #aboutUs",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroll:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})

// gsap.from(".cards",{
//     scale:0.2,
//     opacity:0,
//     duration:1,
//     stagger:0.1,
//     scrollTrigger:{
//         trigger:".cards",
//         scroll:"body",
//         start:"top 70%",
//         end:"top 65%",
//         scrub:1
//     }
// })

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroll:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:5
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroll:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:5
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroll:"body",
        start:"top 85%",
        end:"top 85%",
        scrub:3
    }
})