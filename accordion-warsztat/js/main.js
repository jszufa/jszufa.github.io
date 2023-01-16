$(document).ready(function () {

    $('.accordion-item').click(function () {
        //console.log('klik');
        $(this).find('.accordion-title').toggleClass('minus');
        $(this).find('.accordion-content').slideToggle();
    });
});









/* $(document).ready(function () {

    //kliknięcie w diva
    $('.accordion-item').click(function (e) {
        //console.log($(e.target).find('p'));
        $(e.target).find('span').toggleClass('minus');
        $(e.target).find('p').slideToggle(500);
    });


    //kliknięcie w tytuł
    $('.accordion-title').click(function (e) {
        $(e.target).toggleClass('minus');
        $(e.target).next().slideToggle(500);
    })
}); */