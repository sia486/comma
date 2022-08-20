$(function () {

    var el = $('.intro'),
    mac = $('#mac'),
    offset = mac.offset(),
    windowHeight = $(window).height();
  
    $(window).on('scroll', function () {
  
      $('h1').fadeOut(500);
  
      var windowTop = $(window).scrollTop(),
      scrollPercent = (offset.top - windowTop) / offset.top,
      scale = 'scale(' + scrollPercent + ')';
  
      el.css('transform', scale);
  
      if (windowTop >= 320) {
        el.hide();
      } else {
        el.show();
      }
  
      $('body').css('background-position-Y', -Math.round($(this).scrollTop() * 0.2) + 'px');
  
    //   $('.fasterContent').css('top', -Math($(this).scrollTop() + 2) + 'px');
    });
  
    /*  hide and show side nav*/
    // var nav = $('.nav'),
    // navBut = $('.navBut');
  
    // navBut.click(function () {
    //   if (nav.height() === 0) {
    //     nav.stop().animate({ height: '55px', opacity: '1.0' }, 300);
    //   } else {
    //     nav.stop().animate({ height: '0', opacity: '0.0' }, 300);
    //   }
    // });
  
  });