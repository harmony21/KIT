$(document).ready(function () {
    $('#form-home-mk-link').click(function () {
        $('#form-home-dom').hide();
        $('#form-home-mk').show();
        $('#form-home-dom-link').removeClass('active');
        $('#form-home-mk-link').addClass('active');
    });

    $('#form-home-dom-link').click(function () {
        $('#form-home-mk').hide();
        $('#form-home-dom').show();
        $('#form-home-mk-link').removeClass('active');
        $('#form-home-dom-link').addClass('active');
    });


    $('input[name="category"]').click(function () {

        $('.steny-stone').hide();
        $('.steny-stone input').prop('checked', false).removeAttr('required');

        if ($('#formorder-category1').is(':checked')) {
            $('.steny-stone').css('display', 'flex');
            $('.steny-stone input').attr('required', 'required');
        }
    });
});
    