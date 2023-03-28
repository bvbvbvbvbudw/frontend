$(document).ready(function () {
  $('#scr').on('click', function () {
    if ($(this).attr('src') === '../icons/hamburger-menu-462145.webp') {
      $(this).attr('src', 'https://www.svgrepo.com/show/12848/x-symbol.svg');
      $('#container-check-box').toggleClass('active');
    } else {
      $(this).attr('src', '../icons/hamburger-menu-462145.webp');
      $('#container-check-box').toggleClass('active');
    }
  });

  $('.owl-carousel').owlCarousel({
    items: 1,
    lazyLoad: true,
    lazyLoadEager: 1,
    loop: true,
    margin: 10,
    autoHeight: true
  });
});
