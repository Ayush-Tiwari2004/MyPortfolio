import React, { useEffect, useState } from 'react';
import { LuMoon, LuSun } from 'react-icons/lu';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    });

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <button onClick={toggleTheme} className="theme-toggle-btn bg-[#334155] px-3 py-[6px] flex items-center rounded-md">
            {theme === 'dark' ? <LuSun className='text-white'/> : <LuMoon className='text-white'/>}
        </button>
    );
};

export default ThemeToggle;