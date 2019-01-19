$(document).ready(function () {
    $('.search__icon').click(function() {
        $('.search').addClass('active');
    })
    $('.search__close').click(function() {
        $('.search').removeClass('active');
    })
});