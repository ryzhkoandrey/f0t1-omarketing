$(function () {

   // mobile menu
   $('.menu__btn, .menu a').on('click', function () {
      $('.header__top-inner').toggleClass('header__top-inner--active');
   });

   // smooth scroll
   $('.menu a, .go-top').on('click', function (e) {
      e.preventDefault();
      var id = $(this).attr('href'),
         top = $(id).offset().top;
      $('body, html').animate({ scrollTop: top }, 1500);
   });
      
   // mixitup gallery
   var mixer = mixitup('.portfolio__content');

   // slick slider
   $('.slider-blog__inner').slick({
      dots: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="Previous"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="Next"></button>',
      responsive: [
         {
            breakpoint: 769,
            settings: {
               arrows: false
            }
         }
      ]
   });

});