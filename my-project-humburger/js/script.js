$(document).ready(function () {
  $('#scr').on('click', function () {
    if ($(this).attr('src') === '../icons/hamburger-menu-462145.webp') {
      $(this).attr('src', 'https://www.svgrepo.com/show/12848/x-symbol.svg');
      $('#container-check-box').addClass('openAnimateDiv').removeClass('closeAnimateDiv').css('display', 'block').off('animationend').on('animationend', function () {
        $('#container-check-box').removeClass('openAnimateDiv');
      });
    } else {
      $(this).attr('src', '../icons/hamburger-menu-462145.webp');
      $('#container-check-box').addClass('closeAnimateDiv').removeClass('openAnimateDiv').off('animationend').on('animationend', function () {
        $('#container-check-box').removeClass('closeAnimateDiv').css('display', 'none');
      });
    }
  });

$('.custom1').owlCarousel({
  animateOut: 'slideOutDown',
  animateIn: 'flipInX',
  loop: true,
  autoplay: true,
  autoplayTimeout: 13000,
  autoplayHoverPause: true,
  items: 1,
  margin: 30,
  stagePadding: 30,
  smartSpeed: 450
});
});
