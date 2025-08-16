let menu = document.querySelector('#menu-bars');
let nav = document.querySelector('.responsive-header');
let close = document.querySelector('#close');

menu.onclick = () => {
    nav.classList.add('active');
};

close.onclick = () => {
    nav.classList.remove('active');
};


var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

gsap.from('.home .content-banner h1', {
  y: 100,
  opacity: 0,
  duration: 1,
  delay: 0.2,
});



  
window.addEventListener("DOMContentLoaded", () => {
            const btn = document.querySelector(".gsap-btn");
            const arrow = btn.querySelector(".arrow");

            btn.addEventListener("mouseenter", () => {
                gsap.to(arrow, { x: 13, opacity: 2, duration: 0.6, ease: "power2.out" });
            });

            btn.addEventListener("mouseleave", () => {
                gsap.to(arrow, { x: 0, opacity: 0, duration: 0.3, ease: "power2.in" });
            });
        });
