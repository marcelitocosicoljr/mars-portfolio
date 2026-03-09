"use client"

import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

export const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      duration: 700,
      once: true,
      offset: 80,
      delay: 0,
    });
  }, [])

  return null
}