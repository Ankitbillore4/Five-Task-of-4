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

    let secondBox3 = document.querySelector(".second-box3")
    let brownTshirtShadow = document.querySelector(".brown-tshirt-shadow")
    let brownTshirtSide = document.querySelector(".brown-tshirt-side")
    let brownTshirCircle = document.querySelector(".brown-tshirt-circle")

    secondBox3.addEventListener("mouseenter",()=>{
        brownTshirCircle.style.opacity=1
        brownTshirtShadow.style.opacity=0
        brownTshirtSide.style.opacity=1
    })

    secondBox3.addEventListener("mouseleave",()=>{
        brownTshirCircle.style.opacity=0
        brownTshirtShadow.style.opacity=1
        brownTshirtSide.style.opacity=0
    })

    // .......................................................


    let secondBox4 = document.querySelector(".second-box4")
    let shoksShadow = document.querySelector('.shoks-shadow')
    let shoksSideImg = document.querySelector(".shoks-side-img")
    let shoksCircle = document.querySelector(".shoks-circle")

    secondBox4.addEventListener("mouseenter",()=>{
        shoksCircle.style.opacity=1
        shoksShadow.style.opacity=0
        shoksSideImg.style.opacity=1
    })

    secondBox4.addEventListener("mouseleave",()=>{
        shoksCircle.style.opacity=0
        shoksShadow.style.opacity=1
        shoksSideImg.style.opacity=0
    })

    // .......................................................


    let pinkBoxButton = document.querySelector(".pink-box-button")
    let redBoxButton = document.querySelector(".red-box-button")

    pinkBoxButton.addEventListener("mouseenter",()=>{
        redBoxButton.style.opacity=0
    })

    pinkBoxButton.addEventListener("mouseleave",()=>{
        redBoxButton.style.opacity=1
    })


    // ..............................................

    let videoImage = document.querySelector(".video-image")
    let videoPlayButton = document.querySelector(".video-play-button")
    let videoSideImogi = document.querySelector(".video-side-imogi")


    