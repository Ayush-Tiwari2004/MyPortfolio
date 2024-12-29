import React from 'react'
import { Socialmediali } from '../CommonComp/Socialmediali'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AnimateAllSections } from "../CommonComp/GsapAnimations";

const ContactPageF = () => {
  const tl = gsap.timeline();
  useGSAP( ()=>{
    AnimateAllSections(tl, ".third",".fourth");
  })
  const a = `bg-gray-500 text-[25px] text-white p-2 rounded-full` ;
  return (
    <>
      <section>
        <div className='contact-img h-full w-full'>
          <div className='bg-blue-500 bg-opacity-60 h-full flex justify-center'>
            <div className='flex flex-col justify-center items-center w-full max-w-[60%] text-center px-4'>
              <p className='text-[2rem] font-bold text-white jost md:text-[4rem] third'>Contact Information</p>
              <p className='mb-5 text-[16px] md:text-[18px] text-gray-800 font-bold fourth'>If you contact me for any reason or have any doubts about web development or how to work in corporate companies, feel free to reach out to me through my social media links.</p>
              <Socialmediali whatsappColor={a} telegramColor={a} instagramcolor={a} linkedinColor={a}/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPageF
