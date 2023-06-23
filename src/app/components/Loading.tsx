"use client";
// Assets
import logo from 'public/assets/images/logo.svg'
import logoDark from 'public/assets/images/logo-dark.svg'

// State
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";


import Image from 'next/image'

export default function Loading() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const resolveLogo = () => {
    if (theme === "light") {
      return logo
    }
    return logoDark
  }

  return (
    <section className="flex justify-center items-center w-full h-screen bg-light dark:bg-dark z-[100] animate-transition">
      <>{
        mounted ? <Image className='animate-pulse hoverable animate-transition' src={resolveLogo()} alt="Logo" loading="lazy" /> : null
      }</>
    </section>
  )
}
