$('.slider').each(function() {
    var $this = $(this);
    var $group = $this.find('.slide_group');
    var $slides = $this.find('.slide');
    var bulletArray = [];
    var currentIndex = 0;
    var timeout;
    
    function move(newIndex) {
      var animateLeft, slideLeft;
      
      advance();
      
      if ($group.is(':animated') || currentIndex === newIndex) {
        return;
      }
      
      bulletArray[currentIndex].removeClass('active');
      bulletArray[newIndex].addClass('active');
      
      if (newIndex > currentIndex) {
        slideLeft = '100%';
        animateLeft = '-100%';
      } else {
        slideLeft = '-100%';
        animateLeft = '100%';
      }
      
      $slides.eq(newIndex).css({
        display: 'block',
        left: slideLeft
      });
      $group.animate({
        left: animateLeft
      }, function() {
        $slides.eq(currentIndex).css({
          display: 'none'
        });
        $slides.eq(newIndex).css({
          left: 0
        });
        $group.css({
          left: 0
        });
        currentIndex = newIndex;
      });
    }
    
    function advance() {
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        if (currentIndex < ($slides.length - 1)) {
          move(currentIndex + 1);
        } else {
          move(0);
        }
      }, 16000);
    }
    
    
    $.each($slides, function(index) {
      var $button = $('<a class="slide_btn">&bull;</a>');
      
      if (index === currentIndex) {
        $button.addClass('active');
      }
      $button.on('click', function() {
        move(index);
      }).appendTo('.slide_buttons');
      bulletArray.push($button);
    });
    
    advance();
  });

$('.op').each(function() {
    var $this = $(this);
    var $group1 = $this.find('.slide_group');
    var $slides1 = $this.find('.slide1');
    var bulletArray1 = [];
    var currentIndex1 = 0;
    var timeout1;
    
    function move(newIndex1) {
      var animateLeft1, slideLeft1;
      
      advance();
      
      if ($group1.is(':animated') || currentIndex1 === newIndex1) {
        return;
      }
      
      bulletArray1[currentIndex1].removeClass('active');
      bulletArray1[newIndex1].addClass('active');
      
      if (newIndex1 > currentIndex1) {
        slideLeft1 = '100%';
        animateLeft1 = '-100%';
      } else {
        slideLeft1 = '-100%';
        animateLeft1 = '100%';
      }
      
      $slides1.eq(newIndex1).css({
        display: 'block',
        left: slideLeft1
      });
      $group1.animate({
        left: animateLeft1
      }, function() {
        $slides1.eq(currentIndex1).css({
          display: 'none'
        });
        $slides1.eq(newIndex1).css({
          left: 0
        });
        $group1.css({
          left: 0
        });
        currentIndex1 = newIndex1;
      });
    }
    
    function advance() {
      clearTimeout(timeout1);
      timeout1 = setTimeout(function() {
        if (currentIndex1 < ($slides1.length - 1)) {
          move(currentIndex1 + 1);
        } else {
          move(0);
        }
      }, 14000);
    }

    $.each($slides1, function(index1) {
      var $button = $('<a class="slide_btn">&bull;</a>');
      
      if (index1 === currentIndex1) {
        $button.addClass('active');
      }
      $button.on('click', function() {
        move(index1);
      }).appendTo('.slide_buttons');
      bulletArray1.push($button);
    });
    
    advance();
  });

  document.getElementById("txt_search")
    .addEventListener("keyup", function(e) {
        if (e.keyCode === 13) {
            document.getElementById("submit").click();
        }
    });
