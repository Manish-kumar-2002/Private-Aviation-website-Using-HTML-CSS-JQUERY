$(window).on('load', function () {

  $('.hamburger').on('click', function () {
    $(this).toggleClass('open');
    $('.nav-slide').toggleClass('open');
    $('.slide-navbar').toggleClass('open');
    $('.navbar-wrap').toggleClass('open');
    $('.nav-slide').removeClass('open-menu');
    $('.slide-navbar').removeClass('open-menu');
    $('.jet-slider').removeClass('jet-show');
  })
  $('.sub-menu').on('click', function () {
    $('.nav-slide').toggleClass('open-menu');
    $('.slide-navbar').toggleClass('open-menu');
    $('.navbar-wrap').toggleClass('open-menu');
    $('.slides1').css("opacity",1); 
  })
  $('.back-content').on('click', function () {
    $('.nav-slide').removeClass('open-menu');
    $('.slide-navbar').removeClass('open-menu');
  })
  $('.slide-slider').on('click', function () {
    $('.jet-slider').toggleClass('jet-show');
  })

  $(document).ready(function(){
    $(".slide-nav a").click(function(){
     let ab =  $(this).data('slides');
       $('.slides').css("opacity",0); 
   $('.'+ab).css({"opacity":"1","z-index":"9999"});
    });
   });
   $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll > 50) {
      $(".header").addClass("scrolled");
    } else {
      $(".header").removeClass("scrolled");
    }
  });
});
$(function () {
  $('.first-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    asNavFor: '.first-slider-content',
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
  });
  $('.first-slider-content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.first-slider',
    dots: true,
    fade: true,
    arrows: false,
    focusOnSelect: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
  });
});


