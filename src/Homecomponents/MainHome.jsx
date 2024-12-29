import React from "react";
import Button from "../CommonComp/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AnimateAllSections } from "../CommonComp/GsapAnimations";

export const MainHome = () => {
    const btnColor = "bg-gradient-to-r from-[#5500FF] to-[#3a0f91] flex justify-start rounded"
    const Secondrybtn = "bg-[#1e293b] flex justify-start rounded"
    const tl = gsap.timeline();
  useGSAP( ()=>{
    AnimateAllSections(tl);
  })
    return (
        <section id="home">
            <div className="max-w-[1280px] flex-1">
                <div className="menu grid sm:grid-cols-1 md:grid-cols-2 justify-between my-20 w-full">
                    <div className="home-int-1 mb-10 mt-5 md:mt-5 p-5 sm:p-0 text-white flex flex-col justify-center items-start sm:flex text-center md:text-left">
                        <pre className="text-xl text-[#6F7C96] dark:text-gray-100 font-bold text-center home-int-anim">A Y U S H  T I W A R I</pre>
                        <h1 className="rahul my-2 text-slate-800 dark:text-white text-[3.5rem] md:text-[3.5rem] font-bold home-int-anim">Full Stack Developer</h1>

                        <p className="text-slate-500 dark:text-gray-100 home-int-anim">A fresher Frontend developer who is currently focused on Web Development. Besides that, I am also interested in Full stack, Mobile, and AI Development. I love learning new things and am always open to new opportunities.</p>

                        <div className="home-int-anim flex mt-10 gap-3">
                            <a href="mailto:ayushtiwari2004m@gmail.com">
                            <Button 
                            text="Get in Touch" FillAnyColor={Secondrybtn} label="Contact" />
                            </a>
                            <a href="./myResume.pdf" download>
                                <Button 
                                text="View Portfolio" label="Download CV" color="blue"
                                FillAnyColor={btnColor} />
                            </a>
                        </div>
                    </div>
                    <div className="home-int-2 flex justify-center items-center w-full">
                        <img src="animImg1.png" className="max-w-full h-auto" alt="Ayush Tiwari's profile" />
                    </div>
                </div>
            </div>
        </section>
    )
}