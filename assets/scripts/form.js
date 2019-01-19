$(document).ready(function () {
    //появление/исчезание формы
    $('.btn').click(function (ev) {
        ev.preventDefault();
        $(".shadow").fadeIn(400);
        $(".form").fadeIn(400);   
    });
    $('.mobile-menu__link--form').click(function (ev) {
        ev.preventDefault();
        $(".shadow").fadeIn(400);
        $(".form").fadeIn(400);   
    });

    $('.form-close').click(function (ev) {
        ev.preventDefault();
        $(".shadow").fadeOut(400);
        $(".form").fadeOut(400);   
    });


    //появление/исчезание калькулятора
    $('.calculator-icon').click(function (ev) {
        ev.preventDefault();
        $(".shadow").fadeIn(400);
        $(".calculator").fadeIn(400);   
        $(".calculator-icon").addClass('active');
    });
    $('.menu__link--calculator').click(function (ev) {
        ev.preventDefault();
        $(".shadow").fadeIn(400);
        $(".calculator").fadeIn(400);   
        $(".calculator-icon").addClass('active');
    });


    $('.form-close').click(function (ev) {
        ev.preventDefault();
        $(".shadow").fadeOut(400);
        $(".calculator").fadeOut(400);   
        $(".calculator-icon").removeClass('active');
    });


    $('.shadow').click(function (ev) {
        ev.preventDefault();
        $(".shadow").fadeOut(400);
        $(".form").fadeOut(400);   
    });
    $('.shadow').click(function (ev) {
        ev.preventDefault();
        $(".shadow").fadeOut(400);
        $(".calculator").fadeOut(400); 
        $(".calculator-icon").removeClass('active');  
    });
});
    