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


// Hooks
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Apply Cursor to All Components */}
      <Cursor />

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

    </main>
  )
}
