$(document).ready(function() {
    $('.nav_burger').click(function(event){
        $('.nav_burger, .nav_menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
})