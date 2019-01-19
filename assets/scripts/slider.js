$(document).ready(function() {
    //слайдер на главной
    var slider = $('.slider__wrapper').bxSlider({
        auto: true,
        pause: 6000,
        mode: 'horizontal'
    });

    $('.arrow-right').click(function(){
        slider.goToNextSlide();
    });

    $('.arrow-left').click(function(){
        slider.goToPrevSlide();
    });

    //мобильный слайдер (преимущества)
    if ($(window).width() < 760) {
        var slider2 = $('.advantages__wrap').bxSlider({
            mode: 'horizontal'
        });
    }

    //мобильный слайдер (оплата)
    if ($(window).width() < 760) {
        var slider3 = $('.payment__wrap').bxSlider({
            mode: 'horizontal'
        });
    }
})




$(window).resize(function() {
    if ($(window).width() < 760) {
        var slider2 = $('.advantages__wrap').bxSlider({
            mode: 'horizontal'
        });

        var slider3 = $('.payment__wrap').bxSlider({
            mode: 'horizontal'
        });
    }
});