"use client";

// Components
import Image from 'next/image'

// Hooks
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";


export default function CompanyList() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const brands = [
    {
      name: 'Teknoreka, Ltd.',
      logo: '/assets/images/brands/teknoreka.svg',
      logoDark: '/assets/images/brands/teknoreka-dark.svg',
      url: 'https://duarartesanias.com/',
      role: 'Frontend Web Developer',
      date: 'Oct, 2022 - Present',
      status: 'Full-Time',
    }, {
      name: 'Divistant, Ltd.',
      logo: '/assets/images/brands/divistant.svg',
      logoDark: '/assets/images/brands/divistant-dark.svg',
      url: 'https://duarartesanias.com/',
      role: 'Frontend Web Developer',
      date: 'Sept, 2020 - Sept, 2022',
      status: 'Part-Time',
    }, {
      name: 'FPT Education Vietnam',
      logo: '/assets/images/brands/fpt.svg',
      logoDark: '/assets/images/brands/fpt-dark.svg',
      url: 'https://duarartesanias.com/',
      role: 'Web Developer',
      date: 'July, 2020 - August, 2020',
      status: 'Internship (Remote)',
    }, {
      name: 'Gamatechno, Ltd.',
      logo: '/assets/images/brands/gt.svg',
      logoDark: '/assets/images/brands/gt-dark.svg',
      url: 'https://duarartesanias.com/',
      role: 'Junior Web Developer',
      date: 'July, 2017 - March, 2018',
      status: 'Internship',
    }
  ]

  useEffect(() => setMounted(true), []);

  const resolveLogo = (brand: any) => {
    if (theme === "light") {
      return brand.logo
    }
    return brand.logoDark
  }

  const listOfBrands = brands.map((brand) => {
    return (
      <>
        <li className='flex items-center justify-between py-3' key={brand.name}>
          <div className='flex items-center'>
            <Image className='image-shadow' src={resolveLogo(brand)} width={60} height={60} alt={brand.name} loading="lazy" />
            <div className='flex flex-col'>
              <h1 className='text-sub text-xl px-4'>
                {brand.role}
              </h1>
              <span className='text-sub text-sm px-4 text-gray-800 dark:text-gray-100'>
                {brand.status}
              </span>
            </div>
          </div>
          <div className='flex flex-col items-end'>
            <h1 className='text-sub text-xl px-4 font-bold uppercase'>
              {brand.name}
            </h1>
            <span className='text-sub text-sm px-4 text-gray-800 dark:text-gray-100'>
              {brand.date}
            </span>
          </div>
        </li>
      </>)
  })

  return (
    <ul className=' w-full'>
      {listOfBrands}
    </ul>
  )
}
