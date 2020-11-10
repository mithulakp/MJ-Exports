$(window).on('scroll', function() {
    if ($(window).scrollTop()) {
        $('header').addClass('white');
    } else {
        $('header').removeClass('white');
    }
})



header.white {
    background - color: white;
    height: auto;
}
const header = document.querySelector('.header');
window.onscroll = function() {
    var top = window.scrollY;
    if (top > 100) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}