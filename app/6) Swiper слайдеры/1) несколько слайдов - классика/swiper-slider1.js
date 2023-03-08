document.addEventListener("DOMContentLoaded", function(event) { 

    // swiper
	const swiper = new Swiper('.swiper', {
		// Optional parameters
		loop: true,
		slidesPerView: 1,
	  
		// Navigation arrows
		navigation: {
		  nextEl: '.example-slider__next',
		  prevEl: '.example-slider__prev',
		},
	});
	
});