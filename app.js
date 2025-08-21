gsap.registerPlugin(ScrollTrigger);

// YOUR CODE HERE

const lineOneTl = gsap.timeline({
  lineOneTrigger: {
    trigger: ".line-one",
    markers: true,
    start: "top top",
    end: "bottom center",
    ease: "bounce.out",
    scrub: true,
    paused: true,
  },
});

lineOneTl
  .from(".line-one span", { y: "100vh", stagger: 0.1, duration: 1 })
  .to(".line-one", { backgroundColor: "yellow" })
  .from(".line-one .sun", { x: "100vw", stagger: 0.1 })
  .to(".line-one .sun", { x: "-100vw", stagger: 0.1, duration: 1 })
  .to(".line-one span", { x: "100vw", stagger: 0.1, duration: 1 }, "<");

const lineTwoTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-two",
    markers: true,
    start: "top top",
    end: "bottom center",
    ease: "bounce.out",
    paused: true,
    scrub: true,
  },
});

lineTwoTl
  .from(".line-two span:first-child", { x: "-100vw", y: "-100vh", scale: 6 })
  .from(".line-two span:last-child", { x: "100vw", y: "100vh", scale: 6 }, "<")
  .to(".line-two span:first-child", { y: -50, ease: "bounce.out" })
  .to(".line-two span:first-child", { y: 0, ease: "bounce.out" })
  .to(".line-two span:last-child", { y: -50, ease: "bounce.out" })
  .to(".line-two span:last-child", { y: 0, ease: "bounce.out" })
  .to(".line-two span", { y: -500, ease: "bounce.out" });

const lineThreeTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-three",
    markers: true,
    start: "top",
    end: "bottom",
    pin: true,
  },
});

lineThreeTl
  .from(".line-three span", {
    opacity: 0,
    y: 150,
    duration: 1,
    stagger: 0.3,
    ease: "power2.out",
  })
  .to(".line-three", {
    backgroundPositionX: "0%",
    duration: 1,
    ease: "power2.out",
    color: "white",
  })
  .to(".line-three .moon", { x: 0, stagger: 0.1, duration: 1 });
