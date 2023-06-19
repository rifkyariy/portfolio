"use client";

import React, { ReactNode, MouseEvent, useEffect, useRef, useState } from "react";
import { scrolltoHash } from '@/app/utils/utils';

interface SidenavProps {
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  rest?: any;
}

export default function SideNav({ children, onClick, className, ...rest }: SidenavProps) {
  let navItems = useRef([
    {
      name: "Overview",
      href: "/",
      id: "overview",
      isActive: true
    },
    {
      name: "Experiences",
      href: "/experiences",
      id: "experiences",
      isActive: false
    },
    {
      name: "Tools",
      href: "/tools",
      id: "tools",
      isActive: false
    },
    {
      name: "Projects",
      href: "/projects",
      id: "projects",
      isActive: false
    },
    {
      name: "Contact",
      href: "/contact",
      id: "contact",
      isActive: false
    },
  ]);

  const [, setForceUpdate] = useState(Date.now());

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(({ target, isIntersecting }) => {
        // console.log(`I'm ${isIntersecting ? 'in view' : 'out of view'}: ${target.getAttribute("id")}`, target);
        if (isIntersecting) {
          navItems.current.forEach((item) => {
            if (item.id == target.getAttribute("id")) {
              item.name = item.name;
              item.isActive = true;
            } else {
              item.isActive = false;
            }
          })

          setForceUpdate(Date.now());
        }
      });
    });

    // Observe all elements with IDs
    const elemsWithIds = document.querySelectorAll(".marker");
    elemsWithIds.forEach(elem => {
      observer.observe(elem)
    });

  }, [])

  const listItems = navItems.current.map((item, index) => {
    return (<>
      <li className="sidenav text-right " key={item.name}>
        <button className={`${item.isActive ? 'is-active' : ''}`} onClick={() => scrolltoHash(item.id)}>
          <span className="font-sub hover:text-xl dark:hover:text-gray-300 ">{item.name}</span>
        </button>
      </li>
    </>);
  })

  return (
    <div className={`sidenav-position sm:hidden md:block ${className}`} {...rest}>
      <ul>
        {listItems}
      </ul>
    </div>
  );
}

