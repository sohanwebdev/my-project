$(function () {
    'use strict'
    //slider section start
  $('.slider_item_container').slick({
      prevArrow:'<i class="slider_arrow slider_arrow_left fas fa-chevron-left"></i>',
      nextArrow:'<i class="slider_arrow slider_arrow_right fas fa-chevron-right"></i>',
      autoplay: true,
      autoplaySpeed: 5000,
  });
    //slider section end
    //counter_up section start
    $('.counter').counterUp({
      delay: 30,
      time: 80000
    })
    //counter_up section end
})