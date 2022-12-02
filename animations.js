//CARROUSEL SPLIDE
// document.addEventListener("DOMContentLoaded", () => {
//   const splide = new Splide( '.gallery', {
//     type   : 'loop',
//     drag   : 'free',
//     focus  : 'center',
//     perPage: 4,
//     gap: 50,
//     width: '80%',
//     arrows: false, 
//     pagination: false,
//     autoScroll: {
//       speed: 1,
//       pauseOnHover: true,
//     },
//   } );
  
//   splide.mount(window.splide.Extensions);
// })

//GSAP 
//BANNER
gsap.from(".banner_subheading", {
  y: -50,
  duration: 1
})

//TEAM
gsap.from("#jane", {
  scrollTrigger: "#jane",
  x: 50,
  duration: 1.5,
  opacity: 0
});
gsap.from("#pierre", {
  scrollTrigger: "#pierre",
  x: -50,
  duration: 1.5,
  opacity: 0
});

gsap.from("#paul", {
  scrollTrigger: "#paul",
  x: 50,
  duration: 1.5,
  opacity: 0
});

//ARROW 
gsap.from(".arrow", {
  scrollTrigger: ".arrow",
  y: 1500,
  opacity: 0
})