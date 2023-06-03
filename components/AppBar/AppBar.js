import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/images/logo.png'
import { BsFacebook } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import * as S from '../Global.styled'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { MdClose } from 'react-icons/md'
import { FaLinkedin } from "react-icons/fa";

import ToggleMenu from '../../hooks/ToggleMenu'

const AppBar = () => {
  const [isOpen, toggle] = ToggleMenu()

  const [animateHeader, setAnimateHeader] = useState()

  useEffect(() => {
    const listener = () =>
      window.scrollY > 140 ? setAnimateHeader(true) : setAnimateHeader(false)
    window.addEventListener('scroll', listener)
    return () => {
      window.removeEventListener('scroll', listener)
    }
  }, [])

  return (
    <div className="w-full">
      <div
        className={`fixed top-0 left-0 z-50   flex w-full  flex-row items-center justify-between px-5   py-5 pl-4 sm:px-10 lg:px-20  ${
          animateHeader &&
          'duration-400 bg-[#0F152E] py-2.5 shadow-md transition ease-in'
        }`}
      >
        <Link href="#">
          <a
            className={`flex flex-row items-center text-lg font-medium ${
              animateHeader &&
              'bg-transparent py-0 px-0 transition duration-300 ease-in '
            }  py-2 px-0`}
          >
            {/* <Image
              src={Logo}
              height="45px"
              width="45px"
              className="object-contain md:scale-125"
            /> */}
            <span className="ml-1 text-2xl sm:text-2xl flex flex-row font-bold lg:font-semibold text-white ">
            Marcelito's <span className='text-[#2676C0] ml-2'> Portfolio {">"} </span> {">"}
            </span>
          </a>
        </Link>

        <span className="hidden sm:flex flex-row items-center gap-4 py-4">

          <a href="https://www.facebook.com/marcelito.cos" target="_black">
            <BsFacebook className="text-2xl  text-[#fff]  duration-500 ease-out hover:scale-125 hover:text-[#EAF0FD]" />
          </a>
          <a href="mailto:mcosicoljr@gmail.com" target="_black">
            <FiMail className="text-2xl text-[#fff] duration-500 ease-out hover:scale-125 hover:text-[#EAF0FD]" />
          </a>
          <a href="https://www.linkedin.com/in/marcelito-cosicol-19288b22b/" target="_black">
            <FaLinkedin className="text-2xl text-[#fff] duration-500 ease-out hover:scale-125 hover:text-[#EAF0FD]" />
          </a>
      </span>

      </div>
    </div>
  )
}

export default AppBar
