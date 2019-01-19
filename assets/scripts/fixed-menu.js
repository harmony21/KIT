//действия при скроллинге
$(window).on("scroll", function () {
    var scrolled = $(this).scrollTop();
    if ($(window).width() >= 761) {
        if (scrolled > 107) {
        $('.main-menu').addClass('scrolled');
    }   
    if (scrolled <= 107) {     
        $('.main-menu').removeClass('scrolled');
    }
    }
});