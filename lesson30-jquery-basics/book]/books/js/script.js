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


})