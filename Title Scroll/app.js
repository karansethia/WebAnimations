let timeLine  = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '100%',
        scrub: 1,
    },
});
let timeeLine2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '100%',
        scrub: 1,
    },
})
let timeeLine3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '300%',
        scrub: 1,
        pin: true,
        pinSpacing: false,
    },
})
timeLine.fromTo('.sliding-text', {y: 0},{y: -400});
timeeLine2.fromTo('.logo',{scale: 6},{scale: 0.7, top: '1.2rem', left: '3rem', x: '50%', y: '50%'});
 
