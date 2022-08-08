$(function() {
  var text = $(".text");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll > 100) {
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

    if (scroll > 368) {
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

    if (scroll > 60) {
      body.removeClass("bodySc");
    } 
    else {
      body.addClass("bodySc");
    }
  });
});


