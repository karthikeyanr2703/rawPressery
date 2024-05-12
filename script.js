const tl = gsap.timeline({
   
})
tl.from("#orange",{
    y:"100%",
    ease:"none",
    duration:".8",
})
tl.from("#green",{
    y:"100%",
    x:"-10%",
    ease:"none",
    duration:".6",
})
tl.from("#red",{
    y:"100%",
    x:"10%",
    ease:"none",
    duration:".6",
})
tl.from(["#redJuice","#greenJuice"],{
    opacity:0,
    ease:"none",
    duration:".5",
    y:"100%",
   
})

tl.from(".circle",{
opacity:0,
y:"100%",
ease:"none",
duration:".8",

})
tl.from(["#cherry","#grapes","#orangeFruit","#strawberry","#kiwi","#slice"],{
    opacity:0,
    ease:"none",
    duration:".5",
   top:"50%",
   left:"50%",
   transform:"translate(-50%,-50%)",
})
tl.from("#leaf1",{
    x:"100%",
    ease:"none",
    duration:".5",
    opacity:0,

})
tl.to(["#cherry","#grapes","#strawberry","#kiwi"],{
    y:"30%",
    ease:"none",
    duration:2.5,
    yoyo:true,
    repeat:-1,
},"hi")
tl.to(["#orangeFruit","#slice"],{
    y:"-30%",
    ease:"none",
    duration:2.5,
    yoyo:true,
    repeat:-1,

},"hi")
tl.from("#leaf2",{
    x:"-100%",
    ease:"none",
    duration:".5",
    opacity:0,

})


let hamMenu = document.querySelector("#hamMenu");
let hamMenuLineCont = document.querySelector(".linesContainer");
let open = false;
hamMenu.addEventListener("click",()=>{
    hamMenuLineCont.classList.toggle("close");
    if(!open){
        hamMenu.style.clipPath = "circle(120.5% at 85% 15%)";
        hamMenu.style.backgroundColor = "white";
    }
    else{
        
        hamMenu.style.clipPath = "circle(5.7% at 88% 8%)"
        hamMenu.style.backgroundColor = "transparent";
    }
    open = !open    
    
})


