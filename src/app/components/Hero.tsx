"use client";
// Assets
import avatar from 'public/assets/images/avatar.png'
import avatarDark from 'public/assets/images/avatar-dark.png'
import graffitiName from 'public/assets/images/graffiti-name.svg'

// State
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { scrolltoHash } from '@/app/utils/utils';


// Components
import Image from 'next/image'
import Button from './Button/Button'

export default function Nav() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => setMounted(true), []);

  const resolveAvatar = () => {

    if (theme === "light") {
      return avatar
    }
    return avatarDark
  }

  return (
    <section className="section hero flex justify-center h-screen w-full px-12 py-10 animate-transition">
      <div className='flex flex-col justify-center '>
        <div id='overview' className='marker'></div>
        <div className='sm:block md:hidden'>
          <>{mounted ? <Image className={`animate-transition sm:w-[100px]`} width={150} src={resolveAvatar()} alt="Logo" loading="lazy" /> : null}</>

        </div>
        <div className='flex items-end sm:hidden md:flex'>
          <h1 className='font-regular font-main lg:text-8xl sm:text-5xl '>Hi,</h1>
          <>{mounted ? <Image className={`animate-transition sm:w-[80px] md:w-[100px] lg:w-[150px]`} width={150} src={resolveAvatar()} alt="Logo" loading="lazy" /> : null}</>
        </div>
        <h1 className='font-regular font-main lg:text-8xl sm:text-5xl my-2'>
          I Am
          <span className={`relative ml-4 sm:text-5xl lg:text-8xl ${isDark ? 'text-gray-600' : 'text-inherit'}`}>
            <>{mounted ? <Image src={graffitiName} className={`animate-transition-margin graffiti-position ${isDark ? 'absolute' : 'hidden'}`} alt='Rifky Ari' loading="lazy" /> : null}</>
            Rifky Ari.
          </span>

        </h1>
        <p className='font-sub sm:text-base md:text-lg md:max-w-md lg:max-w-[680px] pt-1 pb-6'>
          I am passionate about exploring the latest front-end technologies and trends in the industry. I have a solid understanding of web development concepts and practices with a framework such as ReactJs and VueJs.
        </p>

        <div>
          <Button onClick={() => scrolltoHash('contact')}>
            <span>Get in touch</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
