$(document).ready(function () {


    let btnGetUser = document.getElementById('get-user');
    //console.log(btnGetUser);


    function getProgramist() {

        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {
            console.log(data);
            const dane = JSON.stringify(data);
            $(btnGetUser).after($(`<div id='dane-programisty'>${dane}</div>`));

        })

    }

    btnGetUser.addEventListener('click', getProgramist)

})