

// Sticky navbar
let header = $('#header');
let scrollPos = $(window).scrollTop();

$(window).on('scroll load resize', function(){
    scrollPos = $(this).scrollTop();

    if(scrollPos > 5){
        header.addClass('fixed');
    }else{
        header.removeClass('fixed');
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

// *************** Burger menu ***************  
const menuBtn = document.querySelector('.burger');
const miniHeader = document.querySelector('.mini-header');
const miniNavItem = document.querySelectorAll('.mini-nav__item');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('burger__open');
    miniHeader.classList.toggle('active');
})
miniNavItem.forEach(function (item) {
    item.addEventListener('click', function () {
    menuBtn.classList.remove('burger__open');
    miniHeader.classList.remove('active');
})
})

// Accordion
const accordionQuestion = document.querySelectorAll('.accordion__heading');
const accordionAnswer = document.querySelectorAll('.accordion__answer');

accordionQuestion.forEach(function (item) {
    item.addEventListener('click', function () {
        this.nextElementSibling.classList.toggle('active');
        this.querySelector(".accordion__plus").classList.toggle('active');
    })
})