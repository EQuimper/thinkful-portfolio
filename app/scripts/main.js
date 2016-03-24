particlesJS.load('particles-js', '../bower_components/particles.js/demo/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

$(".triangle").click(function () {
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
  $(this).velocity("scroll", {duration: 2500, section: ".about_me", easing: "spring", mobileHA: false})
  .velocity({ opacity: 1 });
});

$('.fa').hover(function (){
  $(this).addClass('animated wobble ease-in-out');
});
