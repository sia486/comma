

const { to, set, timeline, registerPlugin } = gsap;

registerPlugin(ScrollTrigger);

function initialiseElements() {
  gsap.from(".hero-hardware", { transform: "scale(2.4)" });

}

initialiseElements();

const zoomTimeline = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".outer",
      pin: true,
      scrub: true,
      start: "start start",
      
    }
  });
  tl.addLabel("start")
    .to(".hero-hardware", {
      transform: "scale(1)"
    });
  return tl;
};



const masterTimeline = gsap.timeline();
masterTimeline.add(zoomTimeline);

skrollr.init();


const trigger = new ScrollTrigger.default({
    trigger: {
        // If the trigger should just work one time
        once: true,
        offset: {
            // Set an offset based on the elements position, returning an
            // integer = offset in px, float = offset in percentage of either
            // width (when setting the x offset) or height (when setting y)
            //
            // So setting an yOffset of 0.2 means 20% of the elements height,
            // the callback / class will be toggled when the element is 20%
            // in the viewport.
            element: {
                x: 0,
                y: (trigger, rect, direction) => {
                    // You can add custom offsets according to callbacks, you
                    // get passed the trigger, rect (DOMRect) and the scroll
                    // direction, a string of either top, left, right or
                    // bottom.
                    return 0.3
                }
            },
            // Setting an offset of 0.2 on the viewport means the trigger
            // will be called when the element is 20% in the viewport. So if
            // your screen is 1200x600px, the trigger will be called when the
            // user has scrolled for 120px.
            
            // viewport: {
            //     x: 0,
            //     y: (trigger, frame, direction) => {
            //         // We check if the trigger is visible, if so, the offset
            //         // on the viewport is 0, otherwise it's 20% of the height
            //         // of the viewport. This causes the triggers to animate
            //         // 'on screen' when the element is in the viewport, but
            //         // don't trigger the 'out' class until the element is out
            //         // of the viewport.

            //         // This is the same as returning Math.ceil(0.2 * frame.h)
            //         return trigger.visible ? 0 : 0.2
            //     }
            // }
        },
        
    },
});

trigger.add('[data-trigger');

const trigger1 = new ScrollTrigger.default({
    trigger: {
        // If the trigger should just work one time
        once: true,
        offset: {
            // Set an offset based on the elements position, returning an
            // integer = offset in px, float = offset in percentage of either
            // width (when setting the x offset) or height (when setting y)
            //
            // So setting an yOffset of 0.2 means 20% of the elements height,
            // the callback / class will be toggled when the element is 20%
            // in the viewport.
            element: {
                x: 0,
                y: (trigger, rect, direction) => {
                    // You can add custom offsets according to callbacks, you
                    // get passed the trigger, rect (DOMRect) and the scroll
                    // direction, a string of either top, left, right or
                    // bottom.
                    return 0.7
                }
            },
            // Setting an offset of 0.2 on the viewport means the trigger
            // will be called when the element is 20% in the viewport. So if
            // your screen is 1200x600px, the trigger will be called when the
            // user has scrolled for 120px.
            
            // viewport: {
            //     x: 0,
            //     y: (trigger, frame, direction) => {
            //         // We check if the trigger is visible, if so, the offset
            //         // on the viewport is 0, otherwise it's 20% of the height
            //         // of the viewport. This causes the triggers to animate
            //         // 'on screen' when the element is in the viewport, but
            //         // don't trigger the 'out' class until the element is out
            //         // of the viewport.

            //         // This is the same as returning Math.ceil(0.2 * frame.h)
            //         return trigger.visible ? 0 : 0.2
            //     }
            // }
        },
        
    },
});

trigger1.add('[data-trigger1');

var controller = new ScrollMagic.Controller();
var timeline1 = new TimelineMax();

var tween_opacity = new TimelineMax();
tween_opacity
  .to(".animate", 0.3, {
    ease: Linear.easeNone,
    opacity: 1
  })
  .to(".animate", 0.3, {
    ease: Linear.easeNone,
    opacity: 0
  }, "+=0.4");

timeline1.add(tween_opacity, 0);

var scene_main = new ScrollMagic.Scene({
  triggerElement: ".trigger",
  duration: "1700px"
})
  .setTween(timeline1)
  .addTo(controller)
  .addIndicators();