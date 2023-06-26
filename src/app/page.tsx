"use client";

// Component: Page
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Cursor from "./components/Cursor/Cursor"
import SideNav from "./components/Navigation/SideNav"

// Sections
import Experiences from "./components/Sections/Experiences"
import Tools from "./components/Sections/Tools"
import Projects from "./components/Sections/Projects"
import GetInTouch from "./components/Sections/GetInTouch"
import Loading from "./components/Loading"


// Hooks
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  // delay load page for 10s
  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 2000);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center">
      <>{!mounted ?
        <>
          <Cursor />
          <Loading />
        </>
        :
        <div>
          <Cursor />
          {/* Apply Cursor to All Components */}

          {/* Nav */}
          <Nav />
          <SideNav />

          {/* Hero */}
          <Hero />

          {/* Sections */}
          {/* Experiences */}
          <Experiences />

          {/* Tools */}
          <Tools />

          {/* Projects */}
          <Projects />

          {/* Get in touch */}
          <GetInTouch />

          {/*  */}
          <div className="footer flex justify-center">
            <span className="text-sm font-light text-center  py-6">
              © 2023 Rifky Ari. All rights reserved. Build with Next JS.
            </span>
          </div>
        </div>
      }</>

    </main>
  )
}
