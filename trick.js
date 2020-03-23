const intro = document.querySelector(".intro")
const video = intro.querySelector("video")
const text = intro.querySelector("h1")

// scroll magic
const controller = new ScrollMagic.Controller()
// scenes
let scene = new ScrollMagic.Scene({
    duration : 9000,
    triggerElement : intro,
    triggerHook : 0
})
.addIndicators()
.addTo(controller)
.setPin(intro);

const textanim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 })
let scene2 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 0
})
    .setTween(textanim)
    .addTo(controller);


// video animation 
let accelamount =0.1
let scrollpos = 0
let delay =0 

scene.on('update', e =>{
    scrollpos = e.scrollPos /1000;
})
setInterval(() =>{
    delay += (scrollpos - delay) * accelamount
    video.currentTime = delay
},33.3)


