import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { MdMenu } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ThemeToggle from '../../ThemeToggle/Dark&LightMode';

const Header = () => {
  const tl = gsap.timeline();
  useGSAP(() => {
    tl.from(".logo, .header-navs button", {
      y: -30,
      duration: 0.3,
      delay: 0.5,
      opacity: 0,
    })
  })
  const [addsidebar, setsidebar] = useState(false);

  const handleClick = () => {
    setsidebar(!addsidebar);
  }
  return (
    <>
      <header className='w-full flex-1 bg-white dark:bg-[#131316] border-b dark:border-gray-700 flex justify-center z-50  sticky top-0'>
        <div className='header-navs max-w-[1280px] text-[#1e293b] dark:text-white flex flex-1 justify-between items-center py-4 px-4 lg:px-0'>
          <NavLink to="/">
            <div className="logo text-3xl">
              <a href="#">
                <p className='flex gap-1 text-xl font-semibold'>
                  <img src="ayush-logo-dark.png" alt="" />
                  yush
                </p>
              </a>
            </div>
          </NavLink>
          <div className="nav-activs header-navs font-semibold gap-14 items-center hidden sm:flex">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <ThemeToggle />
          </div>
          <button className='sm:hidden' onClick={handleClick}><MdMenu className='text-2xl' /></button>
        </div>

        <div className={`${addsidebar ? "sidebar" : "hero-sidebar-cls"}`}>
          <RxCross1 onClick={handleClick} className={`block absolute right-10 top-7 text-2xl font-bold${addsidebar ? "hero-sidebar-cls" : ""}`} />
          <div onClick={handleClick} className='flex flex-col justify-center h-full items-center gap-10 text-2xl mongo'>
            <h1 className='font-bold jost'>Menu</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <ThemeToggle />
          </div>
        </div>
      </header>
    </>
  )
}
export default Header;

