$(document).ready(function() {
  $('.header__content_slider').slick({
    dots: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          arrows: false
        }
      }
    ]
  });
});

$(document).ready(function() {
  $('.portfolio__slider').slick({
    arrows: false,
    dots: true
  });
});

$(document).ready(function() {
  $('.clients__reviews_slider').slick({
    arrows: false,
    dots: true,
  });
});

$(document).ready(function() {
  $('.contact__top_slider').slick({
    arrows: false,
    dots: true
  });
});



$(document).ready(function() {
  $('.burger-menu__button').click(function(event) {
    $('.burger-menu__button, .header__home_nav').toggleClass('active');
  });
});
