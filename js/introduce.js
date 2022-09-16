

const { to, set, timeline, registerPlugin } = gsap;

registerPlugin(ScrollTrigger);

function initialiseElements() {
  gsap.from(".hero-hardware", { transform: "scale(3)" });

}

initialiseElements();

const zoomTimeline = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".outer",
      pin: true,
      scrub: true,
      start: "bottom bottom",
      
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
                    return 0.9
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

const trigger2 = new ScrollTrigger.default({
    trigger: {
        // If the trigger should just work one time
        once: false,
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
                    return 0.2
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

trigger2.add('[data-trigger2');

const trigger3 = new ScrollTrigger.default({
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
                    return 0.4
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

trigger3.add('[data-trigger3');

const trigger4 = new ScrollTrigger.default({
    trigger: {
        // If the trigger should just work one time
        once: false,
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
                    return 0.28
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

trigger4.add('[data-trigger4');

const trigger5 = new ScrollTrigger.default({
    trigger: {
        // If the trigger should just work one time
        once: false,
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

trigger5.add('[data-trigger5');

const trigger6 = new ScrollTrigger.default({
    trigger: {
        // If the trigger should just work one time
        once: false,
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
                    return 0.9
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

trigger6.add('[data-trigger6');

  var controller1 = new ScrollMagic.Controller();
  var animateElem = [".animate_1", ".animate_2", ".animate_3", ".animate_4", ".animate_5", ".animate_6" ];
  var triggerElem = [".trigger_1", ".trigger_2", ".trigger_3", ".trigger_4", ".trigger_5", ".trigger_6" ];
  
  for (var i = 0; i < animateElem.length; i++) {
    var currentAnimateElem = animateElem[i];
    var currentTriggerElem = triggerElem[i];
  
    var timeline2 = new TimelineMax();
  
    var tween_move = TweenMax.fromTo(
      currentAnimateElem,
      1,
      {
        ease: SlowMo.ease.config(0.7, 0.7, false),
        y: 50
      },
      {
        ease: SlowMo.ease.config(0.7, 0.7, false),
        y: -50
      }
    );
  
    var tween_opacity = new TimelineMax();
    tween_opacity
      .to(currentAnimateElem, 0.3, {
        ease: Linear.easeNone,
        opacity: 1
      })
      .to(
        currentAnimateElem,
        0.3,
        {
          ease: Linear.easeNone,
          opacity: 0
        },
        "+=0.4"
      );
  
    timeline2.add(tween_move, 0).add(tween_opacity, 0);
  
    var scene_main1 = new ScrollMagic.Scene({
      triggerElement: currentTriggerElem,
      duration: "1000px"
    })
      .setTween(timeline2)
      .addTo(controller1);
  }