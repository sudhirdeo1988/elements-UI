$(function() {

  if($(".owl-carousel").length){
    $(".owl-carousel").owlCarousel({
      items:1,
      nav: true,
      dots: true,
      dotsEach: true
    });
  }


  $('body').delegate('.hambMobile > button','click', function(){
    var parentHead = $(this).parents('.c-header');
    if(parentHead.hasClass('st-openNav')){
      parentHead.removeClass('st-openNav');
    }else{
      parentHead.addClass('st-openNav');
    }
  });

  $('body').delegate('.c-subNav .link','click', function(){
    var parentHead = $(this).parents('.c-subNav');
    if(parentHead.hasClass('st-openSubnav')){
      parentHead.removeClass('st-openSubnav');
    }else{
      parentHead.addClass('st-openSubnav');
    }
  });

  $('[data-toggle="tooltip"]').tooltip();
  $('.type-datepicker').datepicker({
    autoclose: true,
    templates:{
      leftArrow: '<i class="icon el-angle-left"></i>',
    rightArrow: '<i class="icon el-angle-right"></i>'
    }
  });

  
});
