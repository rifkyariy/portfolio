"use client";

// Assets
import logo from 'public/assets/images/logo.svg'
import logoDark from 'public/assets/images/logo-dark.svg'
import arrowSpray from 'public/assets/images/spray-arrow.png'

// Components
import Image from 'next/image'
import ThemeSwitcher from './ThemeSwitcher';

// Hooks
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";


export default function Nav() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => setMounted(true), []);

  const resolveLogo = () => {
    if (theme === "light") {
      return logo
    }
    return logoDark
  }

  // make this nav sticky on scroll
  const [stickyClass, setStickyClass] = useState('absolute');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
  }, [theme]);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;

      if (theme === 'dark') {
        windowHeight > 0 ? setStickyClass('fixed top-0 pb-8 z-50 bg-dark shadow-lg') : setStickyClass('absolute');
      } else {
        windowHeight > 0 ? setStickyClass('fixed top-0 pb-8 z-50 bg-light shadow-lg') : setStickyClass('absolute');
      }
    }
  };

  return (
    <nav className={`w-full px-10 py-8 quick-transition ${stickyClass}`}>
      <div className="flex justify-between content-center items-center">
        <>{
          mounted ? <Image src={resolveLogo()} alt="Logo" loading="lazy" /> : null
        }</>
        <h4 className="font-bold font-sub animate-transition">
          Portfolio
        </h4>
        <div className='flex'>
          <>{!isDark ? <Image className='w-[55px]' src={!isDark ? arrowSpray : ''} alt=':)' /> : null}</>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  )
}
