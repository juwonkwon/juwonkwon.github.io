gsap.registerPlugin(ScrollTrigger);
gsap.to(".intro", {
   x: 630,
   duration:1.5,
    ScrollTrigger: {
        trigger: ".intro",
        start: "top 30%",
        end:"center 20%",
        markers:false,
        toggleActions: "restart none none none",
    }
})
gsap.to(".intro-paragraph", {
    x: 1300,
    duration:1.5,
     ScrollTrigger: {
         trigger: ".intro-paragraph",
         start: "top 30%",
         end:"center 20%",
         markers:false,
         toggleActions: "restart none none none",
     }
 })
 
