$(function() {
  var text = $(".text");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll > 200) {
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

    if (scroll > 400) {
      text.removeClass("hidden1");
    } 
    else {
      text.addClass("hidden1");
    }
  });
});


