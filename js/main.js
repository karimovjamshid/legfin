

// Sticky navbar
let header = $('#header');
let scrollPos = $(window).scrollTop();
let miniNav = $('#mini-nav');

$(window).on('scroll load resize', function(){
    scrollPos = $(this).scrollTop();

    if(scrollPos > 5){
        header.addClass('fixed');
        miniNav.addClass('fixed');
    }else{
        header.removeClass('fixed');
        miniNav.removeClass('fixed');
    }
});

  // Smooth scroll
$("[data-scroll]").on('click', function(event){
  event.preventDefault();

  let elemID = $(this).data('scroll');
  let elemOffSet = $(elemID).offset().top;

  $('html, body').animate({
      scrollTop: elemOffSet - 50
  });

});