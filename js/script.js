/* ===================================
     Nav Scroll
====================================== */
$(".scroll").on("click", function(event) {
	event.preventDefault();
	$("html,body").animate({
		scrollTop: $(this.hash).offset().top - 80
	}, 1200);
});

/* ===================================
     Side Menu
 ====================================== */
if ($("#sidemenuToggle").length) {
	$("#sidemenuToggle").on("click", function() {
		$(".btbu-page-nav-wrap").addClass("btbu-page-nav-active")
	}), $(".btbu-page-nav-mask").on("click", function() {
		$(".btbu-page-nav-wrap").removeClass("btbu-page-nav-active")
	})
}

/*===================================
    Go Top Scroll
====================================== */
$(function() {
	// Scroll Event
	$(window).on('scroll', function() {
		var scrolled = $(window).scrollTop();
		if (scrolled > 600) $('.go-top').addClass('active');
		if (scrolled < 600) $('.go-top').removeClass('active');
	});
	// Click Event
	$('.go-top').on('click', function() {
		$("html, body").animate({
			scrollTop: "0"
		}, 500);
	});
});



// SIDEBAR ACTIVE
function onScroll(event) {
	var sections = document.querySelectorAll('.sidebar-menu');
	var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

	for (var i = 0; i < sections.length; i++) {
		var currLink = sections[i];
		var val = currLink.getAttribute('href');
		var refElement = document.querySelector(val);
		
		var scrollTopMinus = scrollPos + 230;
		if (refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight >
			scrollTopMinus)) {
			document.querySelector('.sidebar-menu').classList.remove('current');
			currLink.classList.add('current');
		} else {
			currLink.classList.remove('current');
		}
	}
};

window.document.addEventListener('scroll', onScroll);
