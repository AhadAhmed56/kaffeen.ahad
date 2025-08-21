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


        
var swiper = new Swiper(".client-container", {
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

// BG VIDEO //
      var player;

      
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '315', 
          width: '560',  
          videoId: 'Gu6z6kIukgg', 
          playerVars: {
            'autoplay': 0, 
            'controls': 1,
            'rel': 0, 
            'showinfo': 0 
          }
        });
      }
    
      
      function playVideo() {
        if (player) {
          player.playVideo();
        }
      }


jQuery('.play-button').click(function(){
jQuery(this).addClass('active');
jQuery('.video-container').addClass('active');
jQuery('.bg-video').addClass('active');
}); 