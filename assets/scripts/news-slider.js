$(document).ready(function() {
    var lightSlider = $("#lightSlider").lightSlider({
        item: 4,
        responsive : [
            {
                breakpoint: 1230,
                settings: {
                    item:3,
                    slideMove:1,
                  }
            },
            {
                breakpoint: 880,
                settings: {
                    item:2,
                    slideMove:1
                  }
            },
            {
                breakpoint: 570,
                settings: {
                    item:1,
                    slideMove:1,
                  }
            }
        ]
    }); 
    $('.arrow-left.fill').click(function(){
        lightSlider.goToPrevSlide(); 
    });
    $('.arrow-right.fill').click(function(){
        lightSlider.goToNextSlide(); 
    });
});