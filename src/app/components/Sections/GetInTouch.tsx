"use client";
// Assets
import avatar from 'public/assets/images/avatar-get-touch.png'

// State
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// Components
import Image from 'next/image'
import Button from './../Button/Button'

export default function GetInTouch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => setMounted(true), []);

  return (
    <section className="section flex h-screen w-full px-12 py-10">
      <div className="flex justify-center items-center">
        <div id='contact' className='marker'></div>


        <div className="sm:max-w-80 md:max-w-[60%] flex flex-col items-center" >
          <>
            {
              mounted ? <Image width={200} src={mounted ? avatar : ''} alt="GetInTouch" /> : null
            }
          </>
          <h1 className='font-regular font-sub lg:text-6xl sm:text-3xl text-center py-8'>Let me know if you want to talk about our potential collaboration!</h1>
          <Button onClick={(e) => { window.location.href = 'mailto:rifkyariy@gmail.com'; }}>
            <span>Send Me</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
