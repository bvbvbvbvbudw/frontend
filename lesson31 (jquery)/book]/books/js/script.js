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
        textId = setInterval(function(){
            $('#text-change').text(arrText[textIndex])
            textIndex == arrText.length - 1 ? textIndex = 0 : textIndex++;
        },2000)

        $('#start-stop').html('x').off('click', showAnimateText).on('click', stopAnimateText);
    }

    function stopAnimateText(){
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




})