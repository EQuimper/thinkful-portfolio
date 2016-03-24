$('.fa').hover(function (){
  $(this).addClass('animated wobble ease-in-out');
});

$(".triangle").click(function () {
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
  $(this).velocity("scroll", {duration: 2500, section: ".about_me", easing: "spring", mobileHA: false})
  .velocity({ opacity: 1 });
});
