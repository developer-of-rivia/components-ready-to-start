$(document).ready(function () {

    // слайдер
    $('.slider__object').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrow: true,
        centerMode: true,
        variableWidth: true,
        //appendArrows: $('.slider__nav'),
        prevArrow: '<div class="slick-prev example__slider-prev"><svg><use xlink:href="img/svg-ui-sprite.svg#left-ungle"></use></svg></div>',
        nextArrow: '<div class="slick-next example__slider-prev"><svg><use xlink:href="img/svg-ui-sprite.svg#right-ungle"></use></svg></div>',
        responsive: [
            {
                breakpoint: 1210,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    arrow: true,
                }
            },
        ]
    });
	
});


console.log('daa');