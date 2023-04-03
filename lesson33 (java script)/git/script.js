$(document).ready(function () {
    bookDiv = '';
    $.ajax({
        url: 'https://api.github.com/users/userLogin',
        dataType: 'json',
        beforeSend: function () {
            $('.loader').show()
        }
    }).done(function (data) {
        console.log(data)


        bookDiv += `<div class="book">

                        <div>${data.name}</div>

                    </div>`;
        $('body').html(bookDiv);
    })
})