let shortPinkCircle =document.querySelector(".short-pink-circle")
let secondBox1 = document.querySelector(".second-box1")
let shortPinkShadow = document.querySelector(".short-pink-shadow")
let shortSideImg = document.querySelector(".short-side-img")


secondBox1.addEventListener("mouseenter",()=>{
    shortPinkCircle.style.opacity=1
    shortPinkShadow.style.opacity=0
    shortSideImg.style.opacity=1
})
secondBox1.addEventListener("mouseleave",()=>{
    shortPinkCircle.style.opacity=0
    shortPinkShadow.style.opacity=1
    shortSideImg.style.opacity=0
})


// .............................................

let secondBox2 = document.querySelector(".second-box2")
let shoesShadow = document.querySelector(".shoes-shadow")
let shoesSideImg = document.querySelector(".shoes-side-img")
let shoesCircle = document.querySelector(".shoes-circle")


secondBox2.addEventListener("mouseenter",()=>{
    shoesCircle.style.opacity=1
    shoesSideImg.style.opacity=1
    shoesShadow.style.opacity=0
})

secondBox2.addEventListener("mouseleave",()=>{
    shoesCircle.style.opacity=0
    shoesSideImg.style.opacity=0
    shoesShadow.style.opacity=1
})


// .....................................................

