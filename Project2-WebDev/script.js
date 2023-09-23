
var crsr = document.querySelector("#cursor")
var crsrblr = document.querySelector("#cursorblur")
document.addEventListener('mousemove',(dets)=>{
    crsr.style.left = dets.x-10+"px";
    crsr.style.top = dets.y-7+"px";
    crsrblr.style.left = dets.x-200+"px";
    crsrblr.style.top = dets.y-200+"px";
})

var h4 =  Array.from(document.getElementsByClassName("nav-heading"))
h4.forEach((elem)=>{
    elem.addEventListener("mouseenter",()=>{
        crsr.style.backgroundColor= "transparent"
        crsr.style.scale=3
        crsr.style.border="0.001px solid white"
        crsr.style.transition="all linear 0.1s"
    })

    elem.addEventListener("mouseleave",()=>{
        crsr.style.backgroundColor= "#95C11E"
        crsr.style.scale=1
        crsr.style.border="0px solid #95C11E"
    })
})

var car = Array.from(document.getElementsByClassName("card"))
car.forEach((elem)=>{
    elem.addEventListener("mouseenter",()=>{
        crsr.style.backgroundColor= "transparent"
        crsr.style.scale=3
        crsr.style.border="0.001px solid white"
        crsr.style.transition="all linear 0.1s"
        
    })

    elem.addEventListener("mouseleave",()=>{
        crsr.style.backgroundColor= "#95C11E"
        crsr.style.scale=1
        crsr.style.border="0px solid #95C11E"
    })
})

gsap.to("#navb",{
    backgroundColor: "#000",
    height: "100px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#navb",
        scroller:"body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})

gsap.from("#about-us img,#aboutustext",{
    y: 50,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start: "top 60%",
        end: "top 55%",
        scrub: 3
    }
})


gsap.from(".card",{
    scale: 0.9,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start: "top 90%",
        end: "top 91%",
        scrub: 1
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        start: "top 70%",
        end: "top 67%",
        scrub: 3
    }
})

gsap.from("#colon2",{
    y:60,
    x:60,
    scrollTrigger:{
        trigger: "#colon2",
        scroller: "body",
        start: "top 100%",
        end: "top 95%",
        scrub: 3
    }
})

