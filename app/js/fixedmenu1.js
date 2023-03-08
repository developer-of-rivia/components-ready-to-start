$(document).ready(function () {

    let burgerIcon = document.querySelector('.burger-icon');
    let closeIcon = document.querySelector('.menu__close');
    let menu = document.querySelector('.menu');
    let scrollObject = document.querySelector('.menu');

    burgerIcon.addEventListener('click', function(){
        menu.classList.add('menu--open');
        scrollLock.disablePageScroll(scrollObject);
    })
    closeIcon.addEventListener('click', function(){
        menu.classList.remove('menu--open');
        scrollLock.enablePageScroll(scrollObject);
    })


    window.onscroll = function showHeader() {
        var header = document.querySelector('.header');
        if(window.pageYOffset > 100){
            header.classList.add('header_fixed');
        } else{
            header.classList.remove('header_fixed');
        }
    }
	
});