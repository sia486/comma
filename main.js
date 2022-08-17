window.console = window.console || function(t) {};

if (document.location.search.match(/type=embed/gi)) {
	window.parent.postMessage("resize", "*");
 }

 import Lenis from "https://cdn.skypack.dev/@studio-freight/lenis@0.1.12";
 
 // parallax
 // https://github.com/yitengjun/ukiyo-js
 const els = document.querySelectorAll(".ukiyo");
 els.forEach(el => {
   const parallax = new Ukiyo(el);
 });
 
 // smooth scroll
 const lenis = new Lenis({
   lerp: 0.08,
   smooth: true,
   direction: 'vertical' });
 
 
 function raf() {
   lenis.raf();
   requestAnimationFrame(raf);
 }
 
 requestAnimationFrame(raf);


 var con1 = document.getElementById('con1');


;(function () {

  var throttle = function (type, name, obj) {
    var obj = obj || document;
    var running = false;
    var func = function () {
      if (running) {return;}
      running = true;
      requestAnimationFrame(function () {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };

  throttle("scroll", "optimizedScroll");
})();

document.addEventListener("optimizedScroll", function () {

  con1.style.transform = "translateY(-" + window.pageYOffset + "px)";

});



