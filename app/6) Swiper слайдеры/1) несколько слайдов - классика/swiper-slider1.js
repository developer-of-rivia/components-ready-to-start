document.addEventListener("DOMContentLoaded", function(event) { 

    // swiper
	const swiper = new Swiper('.swiper', {
		// Optional parameters
		loop: true,
		slidesPerView: 1,
	  
		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	});
	
});