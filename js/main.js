const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const menuhh = document.querySelector('.menuhh');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    nav.classList.add('show');
    menuhh.classList.add('active');
      
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    nav.classList.remove('show');
    menuhh.classList.remove('active');
  }
});


$(document).ready(function() {
  var parallaxSliderOptions = {
    speed: 1000,
    effect: 'coverflow',
    autoplay: false,
    parallax: true,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 35,
      depth: 10,
      stretch: 0,
      modifier: 1,
      slideShadows: true
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    on: {
      init: function() {
        let swiper = this;
        for (let i = 0; i < swiper.slides.length; i++) {
          $(swiper.slides[i])
            .find('.img-container')
            .attr({
              'data-swiper-parallax': 0.75 * swiper.width,
              'data-swiper-paralalx-opacity': 0.5
            });
        }
        let index = swiper.activeIndex;
        $(swiper.slides).removeClass('active');
        $(swiper.slides[index]).addClass('active');
      },
      transitionEnd: function() {
        let swiper = this;
        let index = swiper.activeIndex;
        $(swiper.slides).removeClass('active');
        $(swiper.slides[index]).addClass('active');
      },
      resize: function() {
        this.update();
      }
    },
    navigation: {
      nextEl: '.image-slider .next-ctrl',
      prevEl: '.image-slider .prev-ctrl'
    }
  };
  var slider = new Swiper('.image-slider', parallaxSliderOptions);
});
