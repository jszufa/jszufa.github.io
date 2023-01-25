

$(document).ready(function () {

// let btn = document.getElementById ('get-data');
// btn.addEventListener('click', function(){
//     console.log ('ok');
// });

    $('#get-data').click(function () {

        $.get('https://akademia108.pl/api/ajax/get-post.php')

            .done(function (data) {

                console.log(data);
                let userId = data.userId;
                let id = data.id;
                let title = data.title;
                let body = data.body;

                $('#get-data').after('<\hr>').after(`<p>Body : ${body}</p>`).after(`<p>Title : ${title}</p>`).after(`<p>ID : ${id}</p>`).after(`<p>User ID : ${userId} </p>`);
            })

            .fail(function (error) {
                console.error(error);
            })

    })
})



