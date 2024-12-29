import React from 'react';
import { NavLink } from 'react-router-dom';
import { Socialmediali } from '../../CommonComp/Socialmediali';

const Footer = () => {
  const a = `bg-gray-500 text-[25px] text-white p-2 rounded-full` ;
  return (
    <>
      <footer className='bg-slate-800 border-t dark:border-gray-800 py-5'>
        <div className='flex flex-col items-center gap-4'>
        <img src="logo/ayush-logo.svg" alt="" />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-white">
                <NavLink to="/" className=''>Home</NavLink>
                <NavLink to="/about" className=''>About</NavLink>
                <NavLink to="/projects" className=''>Projects</NavLink>
                <NavLink to="/contact" className=''>Contact</NavLink>
                </div>
        <Socialmediali 
         whatsappColor={a} 
         telegramColor={a} 
         instagramcolor={a} 
         linkedinColor={a}
        />
        <p className='text-white text-sm md:text-base'><span className='text-lg'>© </span>Copyright 2025 All rights reserved</p>
        </div>
      </footer>
    </>
  )
}

export default Footer;















