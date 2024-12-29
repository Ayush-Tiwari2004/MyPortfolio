import React from "react";
import Button from "../CommonComp/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { AnimateAllSections } from "../CommonComp/GsapAnimations";

export const HomeAbout = () => {
    const btnColor = "bg-gradient-to-r from-[#5500FF] to-[#3a0f91] flex justify-start rounded text-white"
    const tl = gsap.timeline();
  useGSAP( ()=>{
    AnimateAllSections(tl, ".about-anim", ".about-anim-1");
  })
    return (
        <section  id="about">
            <div className="container mx-auto">
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 p-10 md:p-0 justify-between my-20 md:gap-52 w-full">
                    <div className="flex gap-2 justify-center mb-10 md:md-0 items-center about-anim-1">
                    <div className="overflow-hidden rounded-xl">
                            <img src="ayush1.jpg" className="max-w-xs w-56 rounded-xl hover:scale-105 transition-transform duration-500" alt="Ayush Tiwari's profile" />
                            </div>
                            <div className="flex flex-col gap-2 z-10"> 
                                <div className="overflow-hidden rounded-xl">
                                <img src="ayush2.jpg" className="w-48 rounded-xl hover:scale-105 transition-transform duration-500" alt="" />
                                </div>
                                <div className="overflow-hidden rounded-xl">
                                <img src="ayush3.jpg" className="w-48 rounded-xl hover:scale-105 transition-transform duration-500" alt="" />
                            </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 justify-center items-start dark:text-white text-center md:text-left">
                            <h2 className="font-bold dark:text-white text-[#1e293b] text-center about-anim leading-8">About Me</h2>
                           <p className="text-justify text-slate-400 about-anim">Hello gys My name is Ayush Tiwari i'm <span className="font-bold">BCA third year student</span> Uttar Pradesh (Prayagraj) now I am learnin full stack webdevelopment but curently I have only the knowledge of Frontend development. and my collage name (Kulbhaskar Ashram Pg Collage). In 20May 2024 I started my Internship journey from the (Westonik Privet Limited Compney) but for some reasons i quite my internship journey.</p>
                            <div className="about-anim">
                                <a href="#professtional">
                            <Button 
                            text="Learn More" 
                            color="blue" 
                            label="Scroll down"
                            FillAnyColor={btnColor}  />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
};
