// Scroll-Nav
$(function() {
  $(window).scroll(function () {
     if ($(this).scrollTop() > 50) {  
        $('nav').addClass('changeColor')
     }
     if ($(this).scrollTop() < 50) {
        $('nav').removeClass('changeColor')
     }
  });
});
// Carousel
$(document).ready(function(){
  $('.carousel.carousel-slider').carousel({fullWidth: true});
  setInterval(function() {
    $('.carousel').carousel('next');
  }, 6500);
});
// Next Slide
function nextSlide() {
  $('.carousel').carousel('next');
}
// Scrollspy
$(document).ready(function(){
  $('.scrollspy').scrollSpy();
});

//Tooltip
$(document).ready(function(){
  $('.tooltipped').tooltip({delay: 50});
});