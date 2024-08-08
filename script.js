function hover(){
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
    let pause = document.querySelector(".pause")
    let play = document.querySelector(".play")



let flag= 0;
    videoPlayButton.addEventListener("click",()=>{
        if(flag===0){
            videoImage.style.opacity="0"
            videoSideImogi.style.scale="0"
            videoSideImogi.style.opacity="0"
           play.classList.add("hidden")
           pause.classList.remove("hidden")
            flag = 1
        }else{
            videoImage.style.opacity="1"
            videoSideImogi.style.scale="1"
            videoSideImogi.style.opacity="1"
            play.classList.remove("hidden")
            pause.classList.add("hidden")
            flag = 0
        }
    })
}

hover()




function LocoMotive(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('.main-parent'),
        smooth: true
    });

    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main-parent"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".main-parent" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main-parent", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main-parent").style.transform ? "transform" : "fixed"
    });
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
}
LocoMotive()






let tl = gsap.timeline()


tl.to(".fake-cloud1box",{
    y:600,
    duration:1,
    opacity:1
},"a")

tl.from(".fake-cloud1box",{
     y:700,
     delay:0.6,
     duration:0.5
 },"b")
 

tl.to(".top-three-images",{
    y:250,
    duration:0.7,
    opacity:1
},"a")
tl.from(".top-three-images",{
    y:300,
    duration:1,
    delay:0.3
},"b")


tl.from(".clouds-box-first",{
    y:500,
    duration:0.3,
    opacity:0,
    display:"none"
},"-=0.2")


tl.from(".sun-image",{
    y:300,
    duration:0.3,
    opacity:0
},"-=0.1")

tl.from(".dancinglogo",{
    opacity:0,
    duration:0.3,
    y:100
},"-=0.2")





gsap.to(".two-people-img",{
    rotate:8,
    scrollTrigger:{
        trigger:".page5-inside",
        scroller:".main-parent",
        start:"top 70%",
        scrub:true 
    }
})
// .........................


gsap.to(".video-Image",{
    rotate:-6,
    scrollTrigger:{
        trigger:".page6",
        scroller:".main-parent",
        start:"top 70%",
        scrub:true 
    }
})
// ..............................

let tl2 = gsap.timeline({
    scrollTrigger:{
        scroller:".main-parent",
        trigger:".image1",
        start:"top 50%",
        scrub:true

    }
})

tl2.from(".image1",{
    scale:0.8,
    duration:0.3,
})
