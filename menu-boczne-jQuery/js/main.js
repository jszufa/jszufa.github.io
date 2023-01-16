$(document).ready(function () {

    //efekt wysuwania się menu
    
    $('.hamburger').click(function () {
        //console.log($('.main-menu'))

        $('.main-menu').toggleClass('animate');
        
        // if ($('.main-menu').hasClass('animate')){
        //     $('.main-menu').removeClass('animate');
        // }
        // else {
        //     $('.main-menu').addClass('animate');
        // }
        
    })



    // Efekt zanikanie przez 2s po kliknięciu w link
    $('.main-menu-item a').click(function (e) {

        e.preventDefault();
        $('body').fadeOut(2000, function () {

            let link = $(e.target).attr('href');
            //console.log(link);
            window.location.href = link;

        });
    })
})
