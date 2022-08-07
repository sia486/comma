$(function() {
  var text = $(".text");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll > 250) {
      text.removeClass("hidden");
    } 
    else {
      text.addClass("hidden");
    }
  });
});

$(function() {
  var text = $(".text");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll > 550) {
      text.removeClass("hidden1");
    } 
    else {
      text.addClass("hidden1");
    }
  });
});

$(function() {
  var body = $(".bodysc");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll > 100) {
      body.removeClass("bodySc");
    } 
    else {
      body.addClass("bodySc");
    }
  });
});

