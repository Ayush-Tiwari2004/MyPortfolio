import React from "react";
import { NavLink } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const Socialmediali = ({ whatsappColor, instagramcolor, linkedinColor, telegramColor }) => {

    const tl = gsap.timeline()
    useGSAP( ()=>{
        tl.from(".addSomeNew",{
            y: -10,
            duration: 0.2,
            delay: 0.5,
            opacity: 0,
            stagger: 0.15,
        })
    })

    return (
        <>
            <div className="flex group gap-2">
                <NavLink to="" target="_blank" className={`addSomeNew ${whatsappColor}`}>
                    <FaWhatsapp  />
                </NavLink>
                <NavLink to="https://www.instagram.com/ayush_tiwari_0089/" target="_blank" className={`addSomeNew ${instagramcolor}`}>
                    <FaInstagram/>
                </NavLink>
                <NavLink to="https://www.linkedin.com/in/ayush-tiwari-ab9508248/" target="_blank" className={`addSomeNew ${linkedinColor}`}>
                    <FaLinkedinIn />
                </NavLink>
                <NavLink to="" target="_blank" className={`addSomeNew ${telegramColor}`}>
                    <FaTelegramPlane/>
                </NavLink>
            </div>
        </>
    )
}
