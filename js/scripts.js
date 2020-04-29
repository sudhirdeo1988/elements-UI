$(function() {

  $(".owl-carousel").owlCarousel({
    items:1,
    nav: true,
    dots: true,
    dotsEach: true
  });

  $('.hambMobile button').on('click', function(){
    var parentHead = $(this).parents('.c-header');
    if(parentHead.hasClass('st-openNav')){
      parentHead.removeClass('st-openNav');
    }else{
      parentHead.addClass('st-openNav');
    }
  });

  
});
