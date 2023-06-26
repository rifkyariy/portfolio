"use client";
// Assets
import tools from 'public/assets/images/tools/tools.svg'
import toolsDark from 'public/assets/images/tools/tools-dark.svg'

// State
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// Components
import Image from 'next/image'
import Button from '../Button/Button'
import CompanyList from '../List/CompanyList'

export default function Tools() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => setMounted(true), []);

  return (
    <section className="section flex justify-center sm:h-full lg:h-screen w-full px-12 py-10">
      {/* Scroll on Middle of Page */}
      <div className="flex justify-center items-center w-full">
        <div id='tools' className='marker'></div>

        {/* Content */}
        <div className='sm:w-full md:w-4/5 flex flex-col' data-aos="zoom-in">
          {/* Grid */}
          <div className="w-full grid sm:grid-cols-1 xl:grid-cols-2 gap-12" >
            {/* Company List */}
            <div className='flex justify-center md:order-last lg:order-first'>
              <Image src={isDark ? tools : toolsDark} className='w-4/5 image-shadow' alt='tools' />
            </div>

            {/* Headline */}
            <div className='sm:w-full mr-2'>

              <span className='text-base font-light uppercase dark:text-neon pb-3'>
                Tools
              </span>
              <h4 className='sm:text-4xl lg:text-5xl py-4 font-semibold leading-tight font-sub '>
                My arsenal of mighty tools as a frontend developer.
              </h4>
              <div className='flex flex-col gap-4 font-sub '>
                <p>
                  As a frontend web developer, I leverage a suite of essential tools such as Git, Webpack, Babel, ESLint, Visual Studio Code, Figma, Notion and many other tools to enhance my development process, ensure code quality, optimize performance, and create a stunning web experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
