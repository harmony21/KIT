$(document).ready(function () {
    $('.ways__item').mouseenter(function (ev) {
        var linkID = $(this).attr('id');
        var image = $('.'+linkID+'').css('display', 'block');
        var images = image.siblings().css('display', 'none');
    });
});
    