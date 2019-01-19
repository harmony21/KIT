$(document).ready(function() {
    var lightSlider = $("#lightSlider").lightSlider({
        item: 1
    }); 
    $('.arrow-left').click(function(){
        lightSlider.goToPrevSlide(); 
    });
    $('.arrow-right').click(function(){
        lightSlider.goToNextSlide(); 
    });

    if (($(window).width()) < 471) {
        $('.map.changable-mobile').appendTo($('.contacts-information__left'));
    }
});