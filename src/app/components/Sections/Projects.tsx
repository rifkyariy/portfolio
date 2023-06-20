"use client";
// Assets
import sampleImage from 'public/assets/images/projects/project-kelas-jateng-showcase.png'
import sampleLogo from 'public/assets/images/projects/project-kelas-jateng.png'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

// State
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";

// Components
import Image from 'next/image'
import Pill from '../Pill/Pill'
import Button from '../Button/Button'

// Data
import projects from '../../api/projects.json'

export interface ProjectProps {
  name: string,
  headline: string,
  desc: string,
  logo: string,
  tag: string[],
  image: string,
  url: string,
}

export default function Projects() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isPrev, setIsPrev] = useState(false);
  const [isNext, setIsNext] = useState(true);
  const isDark = theme === "dark";
  const [isLoaded, setIsLoaded] = useState(false);


  const [activeProject, setActiveProject] = useState<ProjectProps>();
  const currentIndex = useRef(0)

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (mounted) {
      setIsLoaded(true)
      setActiveProject(projects[currentIndex.current])

      if (currentIndex.current === 0) {
        setIsPrev(false)
      }

      if (currentIndex.current === projects.length - 1) {
        setIsNext(false)
      }
    }
  }, [mounted])

  const sleep = (ms: number | undefined) =>
    new Promise(resolve => setTimeout(resolve, ms));

  const handlePrev = async () => {
    setIsLoaded(false)
    sleep(600).then(() => {
      if (currentIndex.current > 0) {
        currentIndex.current -= 1
        setIsLoaded(true)
        setActiveProject(projects[currentIndex.current])

        if (currentIndex.current === 0) {
          setIsPrev(false)
        } else {
          setIsPrev(true)
        }

        if (currentIndex.current === projects.length - 1) {
          setIsNext(false)
        } else {
          setIsNext(true)
        }
      } else {
        setIsPrev(false)
      }
    });
  }

  const handleNext = async () => {
    setIsLoaded(false)
    sleep(600).then(() => {
      if (currentIndex.current < projects.length - 1) {
        currentIndex.current += 1
        setIsLoaded(true)
        setActiveProject(projects[currentIndex.current])
        setIsPrev(true)

        if (currentIndex.current === projects.length - 1) {
          setIsNext(false)
        } else {
          setIsNext(true)
        }

        if (currentIndex.current === 0) {
          setIsPrev(false)
        } else {
          setIsPrev(true)
        }
      } else {
        setIsNext(false)

      }
    });
  }


  return (
    <section className="section flex justify-center md:h-full lg:h-screen w-full px-12 py-10">
      {/* Scroll on Middle of Page */}
      <div className="flex justify-center items-center w-full">
        <div id='projects' className='marker'></div>

        {/* Content */}
        <div className={`sm:w-full md:w-4/5 flex flex-col animate-transition ${!isLoaded ? 'opacity-0' : 'opacity-100'}`}>
          <span className='text-base font-light uppercase dark:text-neon pb-3'>
            Projects
          </span>

          {/* Grid */}
          <div className="w-full grid sm:grid-cols-1 xl:grid-cols-2 gap-12" >
            {/* Headline */}
            <div className='sm:w-full font-sub mr-2 sm:order-last lg:order-first'>
              <div className='flex items-center gap-4'>
                <div className='w-fit bg-white dark:bg-darkAccent shadow-md p-1 rounded-lg flex justify-center items-center'>
                  <Image width={45} height={45} src={activeProject?.logo!} alt='sample' />
                </div>

                <h1 className='font-semibold sm:text-sm lg:text-2xl'>
                  {activeProject?.name}
                </h1>
              </div>
              <h4 className='sm:text-3xl lg:text-5xl py-4 font-semibold leading-tight font-sub '>
                {activeProject?.headline}
              </h4>
              <div className=' mb-4 flex gap-2'>
                <>
                  {activeProject?.tag.map((tag, index) => (
                    <Pill key={index}>
                      <span className='sm:text-[9px] md:text-sm font-semibold' >{tag}</span>
                    </Pill>
                  ))}
                </>
              </div>
              <div className='flex flex-col gap-4 font-sub'>
                <p className=' sm:text-ellipsis lg:text-left'>
                  {activeProject?.desc}
                </p>
              </div>
              <div className='py-4 flex gap-2'>
                <Button disabled={!isPrev} className={!isPrev ? 'button-disabled' : ''} onClick={() => handlePrev()}>
                  <span>
                    <IconArrowLeft size={20} />
                  </span>
                </Button>
                <Button disabled={!isNext} className={!isNext ? 'button-disabled' : ''} onClick={() => handleNext()}>
                  <span>
                    <IconArrowRight size={20} />
                  </span>
                </Button>
              </div>
            </div>

            {/* Project Image */}
            <div className='flex items-center'>
              <div className='relative h-fit flex items-center justify-center'>
                <Image className='w-full object-cover rounded-xl image-shadow' width={1200} height={1000} src={activeProject?.image!} alt='sample' />
                <div className='number-position w-[50px] h-[50px] bg-dark dark:bg-darkAccent rounded-lg flex justify-center items-center'>
                  <span className='font-bold text-xl text-white  p-4' >{currentIndex.current + 1}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
