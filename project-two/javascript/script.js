$(document).ready(function(){
    $(window).resize(function(){
        if($(window).width() <= 1024){
          $('#hamburger-click').addClass('hamburger');
        } else {
          $('#hamburger-click').removeClass('hamburger');
        }
      });
    $('#hamburger-icon').click(function(){
        // $('#hamburger-click').toggleClass('hamburger')
        $('#hamburger-click').toggleClass('active-hamburger')
    })
})