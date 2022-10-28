 // NAVIGATION LOGO SCROLL TOP
//  $('.logo').on('click', function (e) {
//     e.preventDefault();
//     $('.nav-toggle').removeClass('open');
//     $('.menu-left').removeClass('collapse');
//     $('html, body').animate({
//       scrollTop: 0 },
//     750, 'easeInOutQuad');
//   });
  // LINKS TO ANCHORS
  $('a[href^="#"]').on('click', function (event) {
  
    var $target = $(this.getAttribute('href'));
  
    if ($target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: $target.offset().top },
      750, 'easeInOutQuad');
    }
  });
  
  // TOGGLE HAMBURGER & COLLAPSE NAV
  $('.nav-toggle').on('click', function () {
    $(this).toggleClass('open');
    $('.menu-left').toggleClass('collapse');
  });
  // REMOVE X & COLLAPSE NAV ON ON CLICK
  $('.menu-left a').on('click', function () {
    $('.nav-toggle').removeClass('open');
    $('.menu-left').removeClass('collapse');
  });
  
  // SHOW/HIDE NAV
  
  // Hide Header on on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('header').outerHeight();
  
  $(window).scroll(function (event) {
    didScroll = true;
  });
  
  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);
  
  function hasScrolled() {
    var st = $(this).scrollTop();
  
    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
    return;
  
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    // if (st >= 50) {
    //   // Scroll Down
    //   $('header').removeClass('show-nav').addClass('hide-nav');
    //   $('.nav-toggle').removeClass('open');
    //   $('.menu-left').removeClass('collapse');
    // } else {
    //   // Scroll Up
    //   if (10 >= st) {
    //     $('header').removeClass('hide-nav').addClass('show-nav');
    //   }
    // }
  
    lastScrollTop = st;
  }
  $(function(){
    $(window).scroll(function(){
      var st = $(window).scrollTop();
      if(st >= 1){
        $("header").addClass("hide-nav");
        $("#time1").addClass("none");
        $(".topcontainer").addClass("none");
        $(".framecontainer").addClass("offset");
      }else{
        if (100 >= st) {
        $("header").removeClass("hide-nav");
        $("#time1").removeClass("none");
        $(".topcontainer").removeClass("none");
        $(".framecontainer").removeClass("offset");
        }
      }//if-else
    });//win func.
  });//ready func.
