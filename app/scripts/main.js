var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

particlesJS.load('particles-js', 'particles.json', function () {});

$(".hamburger").hover(function () {
	$(this).addClass('animated rubberBand').one(animationEnd, function () {
		$(this).removeClass('animated rubberBand');
	});
});

$(".triangle").click(function () {
	$(this).addClass('animated slideOutUp').one(animationEnd, function () {
		$(this).addClass("animated flip").one(animationEnd, function () {
			$(this).velocity("scroll", { duration: 2500, section: ".about_me", mobileHA: false })
				.velocity({ opacity: 1 });
			$(this).removeClass("animated flip slideOutUp");
		});
	});
});

$('.fa').hover(function () {
	$(this).addClass('animated wobble ease-in-out').one(animationEnd, function () {
		$(this).removeClass('animated wobble');
	});
});

new WOW().init();

$('#e').animo({ animation: "fadeOutLeft", duration: 0.7, keep: true }, function () {
	$('#m').animo({ animation: "fadeOutUp", duration: 0.7, keep: true }, function () {
		$('#a').animo({ animation: "fadeOutDown", duration: 0.7, keep: true }, function () {
			$('#n').animo({ animation: "fadeOutRight", duration: 0.7, keep: true }, function () {
				$('#u').animo({ animation: "fadeOutLeft", duration: 0.7, keep: true }, function () {
					$('#e2').animo({ animation: "fadeOutUp", duration: 0.7, keep: true }, function () {
						$('#l').animo({ animation: "fadeOutDown", duration: 0.7, keep: true }, function () {
						}, doMagicIn());
					});
				});  // function to fade them back in
			});
		});
	});
});

// Fading in
$('#e').animo({ animation: "fadeInLeft", duration: 0.7 }, function () {
	$('#m').animo({ animation: "fadeInUp", duration: 0.7 }, function () {
		$('#a').animo({ animation: "fadeInDown", duration: 0.7 }, function () {
			$('#n').animo({ animation: "fadeInLeft", duration: 0.7 }, function () {
				$('#u').animo({ animation: "fadeInRight", duration: 0.7 }, function () {
					$('#e2').animo({ animation: "fadeInUp", duration: 0.7 }, function () {
						$('#l').animo({ animation: "fadeInDown", duration: 0.7 });
					});
				});
			});
		});
	});
});
