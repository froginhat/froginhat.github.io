$(document).ready(function()
{
    $(".slaider").slick(
        {
            variableWidth:true,
            dots:true,
            appendDots:$(".btn_sl"),
        }
    );

    $(".slaider2").slick(
        {
            variableWidth:false,
            adaptiveHeight:false,
            dots:true,
            slidesToShow:2   
        }
    );

});
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})