"use client";

import style from './style.module.scss'
import React, { useEffect } from 'react';
import { TweenMax } from "gsap";

export default function Cursor() {
  useEffect(() => {
    const $bigBall = document.querySelector('.cursor__ball--big');
    const $smallBall = document.querySelector('.cursor__ball--small');
    const $hoverables = document.querySelectorAll('.hoverable');

    // Listeners
    document.body.addEventListener('mousemove', onMouseMove);
    for (let i = 0; i < $hoverables.length; i++) {
      $hoverables[i].addEventListener('mouseenter', onMouseHover);
      $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
    }

    // Move the cursor
    function onMouseMove(e: { clientX: number; clientY: number; }) {
      TweenMax.to($bigBall, .4, {
        x: e.clientX - 15,
        y: e.clientY - 15
      })
      TweenMax.to($smallBall, .1, {
        x: e.clientX - 5,
        y: e.clientY - 7
      })
    }

    // Hover an element
    function onMouseHover() {
      TweenMax.to($bigBall, .3, {
        scale: 2.5
      })
    }
    function onMouseHoverOut() {
      TweenMax.to($bigBall, .3, {
        scale: 1
      })
    }
  }, [])


  return <>
    <div className={style.cursor}>
      <div className={`${style.cursor__ball} cursor__ball--big`}>
        <svg height="30" width="30">
          <circle cx="15" cy="15" r="12" strokeWidth="0"></circle>
        </svg>
      </div>

      <div className={`${style.cursor__ball} cursor__ball--small`}>
        <svg height="10" width="10">
          <circle cx="5" cy="7" r="3" strokeWidth="0"></circle>
        </svg>
      </div>
    </div>
  </>
}