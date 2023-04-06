$(document).ready(function () {

  // hamburger
  if($(window).width() <= 1024){
    $('#hamburger-click').addClass('active-hamburger')
  } else{
    $('#hamburger-click').removeClass('active-hamburger')
  }

  $(window).resize(function () {
    if ($(window).width() <= 1024) {
      $('#hamburger-click').addClass('active-hamburger')
    }
    else {
      $('#hamburger-click').removeClass('active-hamburger')
    } 
  });

  $('#hamburger-icon').click(function () {
    $('#hamburger-click').toggleClass('active-hamburger')
  })


  // choise-language
  $('#choise-language').click(function(){
    $('#window-language').toggleClass('active')
    $('#window-language p').click(function(){
      $('#window-language').addClass('active')
    })
  })
})