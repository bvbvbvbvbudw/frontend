console.log('hello')


// $(document).ready(function(){
// 

// let test = function(){} // anonim

// ()=>{} // streloczna

// function add(){
//     return;
// }

// test(); для удобности лучше () чтобы не путаться
// test;

// a => alert(a)

// })

// $(document).ready(function () {


//     $('.button').on('click', function () {
//         $('#test').removeClass('test')
//         $('#test').addClass('test')
//         $('#test').toggleClass('test')
//     });


// })

$(document).ready(function () {


    $('.menu li a').on('click', function () {
        $('.menu li').find('.active').removeClass('active')
        $(this).addClass('active')
    })

    // let text = ['sub', 'to', 'me'];
    // let i = 0;
    // let intervalId;

    // $('#start-stop').on('click', function () {
    //     $('#text-change').toggleClass('fromTopToDown');

    //     if ($('#text-change').hasClass('fromTopToDown')) {
    //         $('#start-stop').html('x');
    //         if (!intervalId) {
    //             // if (i === 0) {
    //             //   $('#text-change').html(text[i])
    //             //   i++
    //             // }
    //             intervalId = setInterval(function () {
    //                 $('#text-change').html(text[i]);
    //                 i++;
    //                 if (i >= text.length) {
    //                     i = 0;
    //                 }
    //             }, 2000);
    //         }
    //     } else {
    //         $('#start-stop').html('!');
    //         clearInterval(intervalId);
    //         intervalId = null;
    //         $('#text-change').html(' ');
    //     }
    // });

    let arrText = [
        "dwaddadwa",
        "wdawdadwada",
        "dwadasddddddddd"
    ]
    textId = null,
        textIndex = 0;

    $('#start-stop').click(showAnimateText)

    function showAnimateText() {
        $(this).next().addClass('fromTopToDown');
        textId = setInterval(function () {
            $('#text-change').text(arrText[textIndex])
            textIndex == arrText.length - 1 ? textIndex = 0 : textIndex++;
        }, 2000)

        $('#start-stop').html('x').off('click', showAnimateText).on('click', stopAnimateText);
    }

    function stopAnimateText() {
        $('#text-change').text('')
        $(this).next().removeClass('fromTopToDown');
        clearInterval(textId)
        $('#start-stop').html('!').off('click', stopAnimateText).on('click', showAnimateText);

    }



    $('#humburger').on('click', function () {
        $('.menu').toggleClass('menu_active')
    })
    // $('#hamburger').click(function(){

    //})


    $('.owl-carousel').owlCarousel({
        autoPlay: 1000,
        items: 2,
    })



    $('body').on('click', '[data-popup]', popupShow);

    function popupShow(evt) {
        evt.preventDefault();

        let s = $($(this).data('popup')) // newsletter.getElementById data писать когда вызываешь то без нее 
        s.fadeIn(600)

        $('.popup-close').click(function () {
            $(this).closest('.popup-wrapper').fadeOut(400)
        })


    }

    let userPhone = $('#user-phone');

    userPhone.mask('(999)999-99-99')

    $('#contact-form').submit(function (e) {
        e.preventDefault()

        let userName = $('#user-name');
        let userEmail = $('#user-email');
        let userPhone = $('#user-phone');
        let userMessage = $('#user-message');

        console.log(userMessage.val().length)

        if (userName.val().length < 2) {
            userName.addClass('invalid')
            return false;
        } else userName.removeClass('invalid')

        if (userEmail.val().length < 7) {
            userEmail.addClass('invalid')
            return false;
        } else userEmail.removeClass('invalid')

        if (userPhone.val().length < 10) {
            userPhone.addClass('invalid')
            return false;
        } else userPhone.removeClass('invalid')

        $('#thanks-contact h3').text(`dzienkuje ${userName.val()}`)
        $('#thanks-contact .content').text(`dzienkuje za uwed ${userMessage.val()}`)
        $('#contact-btn').attr('data-popup', '#thanks-contact');

        $('#contact-btn').click()

    })


    // <a href="https://openlibrary.org/subjects/mystery_and_detective_stories"
    // class="cat-link active">Mistery, Detective</a>
    // <a href="https://openlibrary.org/subjects/romance" class="cat-link">Romance</a>
    // <a href="https://openlibrary.org/subjects/poetry" class="cat-link">Poetry</a>
    // <a href="https://openlibrary.org/subjects/fantasy" class="cat-link">Fantasy</a>
    // var arr = ['fantasy', 'poetry', 'romance', 'mystery_and_detective_stories']
    // var category_url = "https://openlibrary.org/subjects/" + arr[0] + ".json";

    let bookDiv = '';




    $('document').on('load', ajax('mystery_and_detective_stories'))


    function ajax(key) {

        $.ajax({
            url: "https://openlibrary.org/subjects/" + key + ".json",
            dataType: "json",
            beforeSend: function () {
                $('.loader').show();
            }
        }).done(function (data) {
            console.log(data);
            $('.loader').hide();
            if (data.work_count == 0) {
                $('.row.books').addClass('justify-content-center my-40')
                    .html('<h3>No books found</h3>');
                return false;
            }

            $.each(data.works, function (index, bookInfo) {
                console.log(bookInfo);
                if (bookInfo.authors.length == 1)
                    var authorsInfo = `Author: <a href="https://openlibrary.org/${bookInfo.authors[0].key}/">${bookInfo.authors[0].name}</a>`;
                else {
                    var authorsInfo = 'Authors: ';
                    $.each(bookInfo.authors, function (i, author) {
                        authorsInfo += `<a href="https://openlibrary.org/${author.key}/">${author.name}</a>, `;
                    });
                    authorsInfo = authorsInfo.slice(0, -2);
                }
                bookDiv += `<div class="book">
                    <div class="book-title">${bookInfo.title.length < 50 ? bookInfo.title : bookInfo.title.slice(0, 60) + '...'}</div>
                    <div class="book-author">${authorsInfo}</div>
                    <div class="book-cover"><img src="https://covers.openlibrary.org/b/id/${bookInfo.cover_id}-M.jpg"></div>
                    <div class="book-hidden">
                    <a href="https://openlibrary.org${bookInfo.key}" class="btn btn-info" target="_blank">More Info</a>
                    ${bookInfo.availability ? `<a href="https://openlibrary.org/borrow/ia/${bookInfo.ia}?ref=ol" class="btn btn-read" target="_blank">Read Book</a>` : ''}
                </div>
                </div>`;
            });
            $('.row.books').html(bookDiv);
        }).fail(function () {
            $('.loader').hide();
            $('.row.books').addClass('justify-content-center error my-3').html('<h3 class="text-center">Loading of books failed...<br>An error has occurred.</h3>')
        });
    }

    $('.cat-link').on('click', function () {
        console.log($(this).attr('id'))
        ajax($(this).attr('id'))
    })

})


