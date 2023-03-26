$(document).ready(function () {

  $('.menu li a').on('click', function () {
    $('.menu li').find('.active').removeClass('active');
    $(this).addClass('active');
  })

  let text = ['sub', 'to', 'me'];
  let i = 0;
  let intervalId;

  $('#start-stop').on('click', function () {
    $('#text-change').toggleClass('fromTopToDown');

    if ($('#text-change').hasClass('fromTopToDown')) {
      $('#start-stop').html('x');
      if (!intervalId) {
        if (i === 0) {
          $('#text-change').html(text[i])
          i++
        }
        intervalId = setInterval(function () {
          $('#text-change').html(text[i]);
          i++;
          if (i >= text.length) {
            i = 0;
          }
        }, 2000);
      }
    } else {
      $('#start-stop').html('!');
      clearInterval(intervalId);
      intervalId = null;
      $('#text-change').html(' ');
    }
  });

});