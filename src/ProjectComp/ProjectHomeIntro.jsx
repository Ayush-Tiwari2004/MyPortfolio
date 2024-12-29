import React from "react";
import Button from "../CommonComp/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AnimateAllSections } from "../CommonComp/GsapAnimations";

export const ProjectHomeIntro = () =>{
    const btnColor = "bg-gradient-to-r from-[#5500FF] to-[#3a0f91] flex justify-start rounded text-white first"
    const tl = gsap.timeline();
    useGSAP( ()=>{
      AnimateAllSections(tl, ".first", ".second");
    })
    return(
        <section id="myproject">
        <div className="container mx-auto">
            <div className="text-white">
                <div className="grid sm:grid-cols-2 p-5 md:grid-cols-2 justify-between md:h-screen w-full">
                    <div className="flex flex-col justify-center items-start">
                        <h2 className="font-semibold text-slate-800 dark:text-white first">My Projects</h2>
                        <p className="text-[18px] my-5 text-[#94A3B8] first">Here are some of the projects I have completed and am currently working on. and the some project is the part of my Internship tasks these is my clone projects in this section my frontend ald backend both projects.</p>
                        <a href="#worthly-projects">
                        <Button text="View Projects" color="blue" label="Scroll Down" FillAnyColor={btnColor}/>
                        </a>
                    </div>

                    <div className="flex justify-center mt-5 items-center">
                        <img src="ppp.png" className="sm:h-[60%] second rounded-md" alt="Ayush Tiwari's profile" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}