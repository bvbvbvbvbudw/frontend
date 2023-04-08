$(document).ready(function () {
    bookDiv = '';

    $('#submit').on('click', function () {
        var key = $('#search').val();
        ajax(key);
    });

    function ajax(key) {
        $.ajax({
            url: 'https://api.github.com/users/' + key,
            dataType: 'json',
            beforeSend: function () {
                $('.loader').show()
            }
        }).done(function (data) {
            console.log(data)

            bookDiv = `<div class="container-left"">
        
                    <img src="${data.avatar_url}">
                    <div>${data.name !== null ? `Имя: ${data.name}` : 'Имя: Информация отсутствует'}</div>
                    <div>${data.login !== null ? `Логин: ${data.login}` : 'Логин: Информация отсутствует'}</div>
                    </div>

                    <div class="container-right">

                    <div>${data.html_url !== null ? `Ссылка на профиль: ${data.html_url}` : 'Ссылка на профиль: Информация отсутствует'}</div>
                    <div>${data.blog !== "" ? `Ссылка на блог: ${data.blog}` : 'Ссылка на блог: Информация отсутствует'}</div>
                    <div>${data.location !== null ? `Город: ${data.location}` : 'Город: Информация отсутствует'}</div>
                    <div>${data.email !== null ? `Почта: ${data.email}` : 'Почта: Информация отсутствует'}</div>

                    <div class="follow">
                    <div>${data.followers !== null ? `К-сть подписчиков: ${data.followers}` : 'К-сть подписчиков: Информация отсутствует'}</div>
                    <div>${data.following !== null ? `К-сть подписок: ${data.following}` : 'К-сть подписок: Информация отсутствует'}</div>
                    </div>
                    </div>`;
            $('.container').empty().append(bookDiv);
        })
    }



})
