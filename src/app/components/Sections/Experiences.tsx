"use client";
// Assets
import avatar from 'public/assets/images/avatar-get-touch.png'

// State
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// Components
import Image from 'next/image'
import Button from '../Button/Button'
import CompanyList from '../List/CompanyList'

export default function GetInTouch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => setMounted(true), []);

  return (
    <section className="section flex justify-center sm:h-full lg:h-screen w-full px-12 py-10">
      {/* Scroll on Middle of Page */}
      <div className="flex justify-center items-center w-full">
        <div id='experiences' className='marker'></div>

        {/* Content */}
        <div className='sm:w-full md:w-4/5 flex flex-col'>
          <span className='text-base font-light uppercase dark:text-neon pb-3'>
            Experiences
          </span>

          {/* Grid */}
          <div className="w-full grid sm:grid-cols-1 xl:grid-cols-2 gap-12" >
            {/* Headline */}
            <div className='sm:w-full font-sub mr-2'>
              <h4 className='text-5xl py-3 font-semibold leading-tight font-sub '>
                Creating useful and visually appealing web apps is my passion.
              </h4>
              <div className='flex flex-col gap-4 font-sub'>
                <p>
                  Proficient in the realm of frontend development, I specialize in React, Vue, and other web technologies, creating captivating user interfaces, dynamic components, and visually stunning designs to enhance website functionality and deliver engaging digital experiences.
                </p>
              </div>
            </div>

            {/* Company List */}
            <div>
              <CompanyList />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
