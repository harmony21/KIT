$(document).ready(function () {
    //появление/исчезание формы
    $('.mobile-menu-icon').click(function (ev) {
        ev.preventDefault;
        $(".mobile-menu").fadeIn(400);  
    });

    $('.mobile-menu__close').click(function (ev) {
        ev.preventDefault;
        $(".mobile-menu").fadeOut(400);  
    });
});