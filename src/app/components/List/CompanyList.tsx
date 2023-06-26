"use client";

// Components
import Image from 'next/image'
import Link from 'next/link'

// Hooks
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";


export default function CompanyList() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const brands = [
    {
      name: 'Teknoreka, Ltd.',
      logo: 'public/assets/images/brands/teknoreka.svg',
      logoDark: 'public/assets/images/brands/teknoreka-dark.svg',
      role: 'Frontend Web Developer',
      date: 'Oct, 2022 - Present',
      status: 'Full-Time',
      url: 'https://teknoreka.com/',
    }, {
      name: 'Divistant, Ltd.',
      logo: 'public/assets/images/brands/divistant.svg',
      logoDark: 'public/assets/images/brands/divistant-dark.svg',
      role: 'Frontend Web Developer',
      date: 'Sept, 2020 - Sept, 2022',
      status: 'Part-Time',
      url: 'https://divistant.com/',
    }, {
      name: 'FPT Education Vietnam',
      logo: 'public/assets/images/brands/fpt.svg',
      logoDark: 'public/assets/images/brands/fpt-dark.svg',
      role: 'Web Developer',
      date: 'July, 2020 - August, 2020',
      status: 'Internship (Remote)',
      url: 'https://uni.fpt.edu.vn',
    }, {
      name: 'Gamatechno, Ltd.',
      logo: 'public/assets/images/brands/gt.svg',
      logoDark: 'public/assets/images/brands/gt-dark.svg',
      role: 'Junior Web Developer',
      date: 'July, 2017 - March, 2018',
      status: 'Internship',
      url: 'https://www.gamatechno.com/',
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
            <Image className='image-shadow hoverable' src={resolveLogo(brand)} width={60} height={60} alt={brand.name} loading="lazy" />
            <div className='flex flex-col'>
              <h1 className='text-sub sm:text-sm lg:text-xl px-4'>
                {brand.role}
              </h1>
              <span className='text-sub sm:text-[10px] lg:text-sm px-4 text-gray-800 dark:text-gray-100'>
                {brand.status}
              </span>
            </div>
          </div>
          <div className='flex flex-col items-end'>
            <Link href={brand.url}>
              <h1 className='text-sub sm:text-sm lg:text-xl px-4 font-bold uppercase hoverable cursor-pointer sm:text-right'>
                {brand.name}
              </h1>
            </Link>
            <span className='text-sub sm:text-[10px] lg:text-sm px-4 text-gray-800 dark:text-gray-100 sm:text-right'>
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
