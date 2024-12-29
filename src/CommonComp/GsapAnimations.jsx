import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";


gsap.registerPlugin(ScrollTrigger);

export const AnimateAllSections = (tl, animclass1 = ".home-int-anim", animclass2 = ".home-int-2") =>{
    tl.from(animclass1, {
        x: -100,
        duration: 0.3,
        delay: 0.5,
        opacity: 0,
        stagger: 0.15,
        ScrollTrigger:{
          trigger: animclass1,
          scroller: "body",
          start: "top 80%",
          end: "bottom 20%", 
        }
      })
      tl.from(animclass2, {
        x: 80,
        duration: 0.5,
        opacity: 0,
        ScrollTrigger:{
          trigger: animclass2,
          scroller: "body",
          start: "top 80%",
          end: "bottom 20%",
        }
      }, "-=0.8");
}