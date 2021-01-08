$(document).ready(function() {
    $('.burger_menu').click(function() {
        $('.burger_menu, .header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
})