var tl = gsap.timeline()

tl.from("nav",{
    y:-30,
    opacity:0,
    duration:0.8,
    ease:"power2",

})
tl.from(".section-1 .h1s h1",{
    y:-20,
    opacity:0,
    duration:1,
    stagger:0.2,
    ease:"power3",

})


tl.to(".section-1 #circle img",{
    rotate:"360deg",
    duration:1.2,
    x:1100,
    y:300,
    ease:"power3",
    scrollTrigger:{
        trigger:".section-1",
        scroller:"body",
        start:"top 0",
        scrub:1
    }
})

tl.from(".section-2 #podium>h1",{
    y:-40,
    opacity:0,
    duration0:1.2,
    scrollTrigger:{
        trigger:".section-1",
        scroller:"body",
        start:"top 0",
        scrub:1
    }
})

tl.to(".section-2 #podium ",{
    rotate:"30deg",
    duration:1.5,
    scrollTrigger:{
        trigger:".section-1",
        scroller:"body",
        start:"top 0",
        scrub:1
    }
})

tl.from("#podium-2 #text h1 ",{
    y:-40,
    opacity:0,
    duration:0.8,
    // stagger:0.2,
    scrollTrigger:{
        trigger:".section-2 #text",
        scroller:"body",
        start:"top 50%",
        end:"top -10%",
        scrub:1
    }
})
tl.from("#podium-2 #text .centxt h2",{
    x:-40,
    opacity:0,
    duration0:0.8,
    stagger:0.2,
    scrollTrigger:{
        trigger:".section-2 #text",
        scroller:"body",
        start:"top 52%",
        end:"top -10%",
        scrub:1
    }
})
tl.from("#podium-2 #text .centxt .ptags p",{
    x:40,
    opacity:0,
    duration0:0.8,
    stagger:0.2,
    scrollTrigger:{
        trigger:".section-2 #text",
        scroller:"body",
        start:"top 52%",
        end:"top -10%",
        scrub:1
    }
})
tl.to("#podium-2 #ball",{
    y:100,
    duration0:0.8,
    stagger:0.2,
    scrollTrigger:{
        trigger:".section-2 #podium-2",
        scroller:"body",
        start:"top 90%",
        // end:"top -10%",
        scrub:1
    }
})
tl.to(".section-3 .vidcontainer",{
    y:-100,
    duration0:0.8,
    scrollTrigger:{
        trigger:".section-2 #podium-2 ",
        scroller:"body",
        start:"top -110%",
        scrub:1
        
    }
})
tl.to(".section-3 .img1",{
    y:-100,
    duration0:0.8,
    scrollTrigger:{
        trigger:".section-2 #podium-2 ",
        scroller:"body",
        start:"top -110%",
        scrub:1
        
    }
})

tl.from(".section-4 .container .content .ball2",{
    rotate:"360deg",
    duration:0.2,
    y:-400,
    x:-450,
    opacity:0,
    scrollTrigger:{
        trigger:".section-4 .container .content",
        scroller:"body",
        start:"top 60%",
        scrub:1
    }
})

tl.from(".section-4 .container #text2 h1",{
    x:-40,
    duration:0.8,
    opacity:0,
    scrollTrigger:{
        trigger:".sectionthree",
        scroller:"body",
        start:"top -90%",
        scrub:1
    }
})
tl.from(".section-4 .centxt2 h2",{
    x:-40,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:".sectionthree",
        scroller:"body",
        start:"top -90%",
        scrub:1
    }
})


tl.from(".section-4 .centxt2 .ptags2 p",{
    x:40,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:".sectionthree",
        scroller:"body",
        start:"top -90%",
        scrub:1
    }
})
tl.from(".section-6 .maincontainer .text h1",{
    x:-40,
    opacity:0,
    durartion:0.8,
    ease:"power3",
    scrollTrigger:{
        trigger:".section-6 .maincontainer",
        scroller:"body",
        start:"top 110%",
        end:"top 0",
        scrub:1
    }
})
tl.from(".section-6 .mentorshipinner .mainhead .heading h1",{
    x:-40,
    opacity:0,
    durartion:0.8,
    ease:"power3",
    scrollTrigger:{
        trigger:".section-6 .mentorshipinner",
        scroller:"body",
        start:"top 110%",
        end:"top 0",
        scrub:1
    }
})
tl.from(".section-7 .curved-text-container .curved-text",{

    opacity:0,
    durartion:0.8,
    ease:"power3",
    scrollTrigger:{
        trigger:".section-7",
        scroller:"body",
        start:"top 110%",
        end:"top 0",
        scrub:1
    }
})

function guitar(){
    var intialPath = `M 0 100 Q 225 100 440 100`

var finalPath = `M 0 100 Q 225 100 440 100`

  var string1 = document.querySelector(".string1")

string1.addEventListener("mousemove",function(dets){
   intialPath = `M 0 100 Q 225 ${dets.y-100} 440 100`
   gsap.to("svg path",{
    attr:{d:intialPath},
    duration:0.5,
    ease:"power3.out"
    })
})

string1.addEventListener("mouseleave",function(dets){
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:2,
        ease:"elastic.out(1,0.2)"
    })
})
var string2 = document.querySelector(".string2")

string2.addEventListener("mousemove",function(dets){
   intialPath = `M 0 100 Q 225 ${dets.y-300} 440 100`
   gsap.to("svg path",{
    attr:{d:intialPath},
    duration:0.5,
    ease:"power3.out"
    })
})

string2.addEventListener("mouseleave",function(dets){
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:2,
        ease:"elastic.out(1,0.2)"
    })
})
var string3 = document.querySelector(".string3")

string3.addEventListener("mousemove",function(dets){
   intialPath = `M 0 100 Q 225 ${dets.y-400} 440 100`
   gsap.to("svg path",{
    attr:{d:intialPath},
    duration:0.5,
    ease:"power3.out"
    })
})

string3.addEventListener("mouseleave",function(dets){
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:2,
        ease:"elastic.out(1,0.2)"
    })
})
}
guitar()

document.addEventListener('DOMContentLoaded', () => {
    const text = document.querySelector('.curved-text');
    const radius = 450; 
    const startAngle = 165; 
    const textArray = text.textContent.split('');
    const angleStep = 220 / (textArray.length - 1); 

    text.textContent = '';

    textArray.forEach((char, index) => {
        const charSpan = document.createElement('span');
        charSpan.textContent = char;
        charSpan.style.position = 'absolute';
        const angle = startAngle + index * angleStep;
        const x = radius * Math.cos(angle * (Math.PI / 180));
        const y = radius * Math.sin(angle * (Math.PI / 180));
        charSpan.style.transform = `translate(${x}px, ${y}px) rotate(${angle + 90}deg)`; 
        text.appendChild(charSpan);
    });
});

var photobox = document.querySelector(".photobox");
var event1 = document.querySelector(".event1");
var event2 = document.querySelector(".event2");
var event3 = document.querySelector(".event3");
var event4 = document.querySelector(".event4");
var event5 = document.querySelector(".event5");
var event6 = document.querySelector(".event6");
const image = document.getElementById('image');



event1.addEventListener('mouseenter', function() {
    // Set the source of the image
    photobox.innerHTML = `<img src="https://olhauzhykova.com/assets/images/mentorship/1.png">` 
});
event1.addEventListener('mouseleave', function() {
    photobox.innerHTML = `<img src="">`

    
});

event2.addEventListener('mouseenter', function() {
    // Set the source of the image
    photobox.innerHTML = `<img src="https://olhauzhykova.com/assets/images/mentorship/2.png">` 
    photobox.style.objectFit = "cover";
});
event2.addEventListener('mouseleave', function() {
    photobox.innerHTML = `<img src="">`

    
});

event3.addEventListener('mouseenter', function() {
    // Set the source of the image
    photobox.innerHTML = `<img src="https://olhauzhykova.com/assets/images/mentorship/3.png">` 
});
event3.addEventListener('mouseleave', function() {
    photobox.innerHTML = `<img src="">`

    
});

event4.addEventListener('mouseenter', function() {
    // Set the source of the image
    photobox.innerHTML = `<img src ="https://olhauzhykova.com/assets/images/mentorship/4.png">` 
});
event4.addEventListener('mouseleave', function() {
    photobox.innerHTML = `<img src="">`

    
});

event5.addEventListener('mouseenter', function() {
    // Set the source of the image
    photobox.innerHTML = `<img src="https://olhauzhykova.com/assets/images/mentorship/5.png">` 
});
event5.addEventListener('mouseleave', function() {
    photobox.innerHTML = `<img src="">`

    
});
event6.addEventListener('mouseenter', function() {
    // Set the source of the image
    photobox.innerHTML = `<img src="https://olhauzhykova.com/assets/images/mentorship/6.png">` 
});
event6.addEventListener('mouseleave', function() {
    photobox.innerHTML = `<img src="">`

    
});


var cir1 = document.querySelector(".circle1")
var cir2 = document.querySelector(".circle2")
var cir3 = document.querySelector(".circle3")
var cir4 = document.querySelector(".circle4")
var cir6 = document.querySelector(".circle6")
var cir5 = document.querySelector(".circle5")

var box1 = document.querySelector(".p1")
var box2 = document.querySelector(".p2")
var box3 = document.querySelector(".p3")
var box4 = document.querySelector(".p4")
var box5 = document.querySelector(".p5")
var box6 = document.querySelector(".p6")




box1.addEventListener("mouseenter",function(){
    cir1.style.transform = "scale(1.2)";
    
   
})

box1.addEventListener("mouseleave" , function(){

    cir1.style.transform = "scale(0)";
    
    

})

box2.addEventListener("mouseenter",function(){
    cir2.style.transform = "scale(1.2)";
    

})

box2.addEventListener("mouseleave" , function(){
    cir2.style.transform = "scale(0)";

    
    
    

})

box3.addEventListener("mouseenter",function(){
    cir3.style.transform = "scale(1.2)";
    cir4.style.transform = "scale(0)";
    
    


})

box3.addEventListener("mouseleave" , function(){
    cir3.style.transform = "scale(0)";
    

})

box4.addEventListener("mouseenter",function(){
    cir4.style.transform = "scale(1.2)";
    
    

})
box4.addEventListener("mouseleave" , function(){
    
    
    

})

box5.addEventListener("mouseenter",function(){
    cir4.style.transform = "scale(0)";
    cir5.style.transform = "scale(1.2)";
    
    
    


})

box5.addEventListener("mouseleave" , function(){
    cir5.style.transform = "scale(0)";
    

})

box6.addEventListener("mouseenter",function(){
    cir5.style.transform = "scale(0)";
    cir6.style.transform = "scale(1.2)";
    
    


})

box6.addEventListener("mouseleave" , function(){
    cir6.style.transform = "scale(0)";
    

})

document.addEventListener('DOMContentLoaded', () => {
    const brandNames = ["Mentor", "Design Director", "Consultant", ];
    let currentIndex = 0;

    const brandNameElement = document.getElementById('brand-name');
    
    function updateBrandName() {
        brandNameElement.textContent = brandNames[currentIndex];
        currentIndex = (currentIndex + 1) % brandNames.length;
    }

        updateBrandName();
        setInterval(updateBrandName, 1500);
});