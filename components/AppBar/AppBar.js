import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/images/logo.png'
import { BsFacebook } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import * as S from '../Global.styled'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { MdClose } from 'react-icons/md'

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
          'duration-400 bg-white py-2.5 shadow-md transition ease-in'
        }`}
      >
        <Link href="#">
          <a
            className={`flex flex-row items-center text-lg font-medium ${
              animateHeader &&
              'bg-transparent py-0 px-0 transition duration-300 ease-in '
            }  py-2 px-0`}
          >
            <Image
              src={Logo}
              height="40px"
              width="45px"
              className="object-contain md:scale-125"
            />
            <span className="ml-1 flex flex-row">
              Mars <div className="text-[#2563EB]">Porfolio</div>
            </span>
          </a>
        </Link>
        <div className="-ml-10 hidden lg:block">
          <Link href="#">
            <S.NavLink href="facebook.com">Home</S.NavLink>
          </Link>
          <Link href="#">
            <S.NavLink>About</S.NavLink>
          </Link>
          <Link href="#">
            <S.NavLink>Projects</S.NavLink>
          </Link>
          <Link href="#">
            <S.NavLink>Gallery</S.NavLink>
          </Link>
          <Link href="#">
            <S.NavLink>Contact</S.NavLink>
          </Link>
        </div>
        <div className="flex flex-row gap-5">
          <Link href="#">
            <a href="https://www.facebook.com/marcelito.cos" target="_black">
              <BsFacebook className="hidden text-2xl  text-[#2D62CF] duration-500 ease-out hover:scale-125 hover:text-[#457ff3] lg:block" />
            </a>
          </Link>
          <Link href="#">
            <a href="mailto:mcosicoljr@gmail.com" target="_black">
              <FiMail className="hidden text-2xl text-[#2D62CF] duration-500 ease-out hover:scale-125 hover:text-[#457ff3] lg:block" />
            </a>
          </Link>
          <HiOutlineMenuAlt3
            onClick={toggle}
            className="text-2xl text-[#2D62CF] duration-500 ease-out hover:text-[#457ff3] lg:hidden lg:text-2xl lg:hover:scale-125"
          />
        </div>
      </div>
      <div className="">
        <div
          className={`dropdown_con fixed right-0 z-50 -mt-5 -mr-1 flex w-8/12 flex-col rounded-md bg-white px-3 pt-8 pb-10 opacity-0 shadow-lg sm:-mr-2 sm:w-1/3 sm:px-3  lg:hidden   ${
            isOpen ? 'toggle ' : 'duration-300'
          } `}
        >
          <MdClose
            onClick={toggle}
            className="ml-3 text-2xl text-[#2D62CF]  duration-500 ease-out hover:text-[#457ff3] lg:hidden lg:text-2xl lg:hover:scale-125"
          />
          <Link href="#">
            <S.NavLink href="facebook.com">Home</S.NavLink>
          </Link>
          <Link href="#">
            <S.NavLink>About</S.NavLink>
          </Link>
          <Link href="#">
            <S.NavLink>Projects</S.NavLink>
          </Link>
          <Link href="#">
            <S.NavLink>Gallery</S.NavLink>
          </Link>
          <Link href="#">
            <S.NavLink>Contact</S.NavLink>
          </Link>
          <span className="flex flex-row gap-4 px-4 pt-5">
            <Link href="#">
              <a href="https://www.facebook.com/marcelito.cos" target="_black">
                <BsFacebook className="text-2xl  text-[#2D62CF]  duration-500 ease-out hover:scale-125 hover:text-[#457ff3]" />
              </a>
            </Link>
            <Link href="#">
              <a href="mailto:mcosicoljr@gmail.com" target="_black">
                <FiMail className="text-2xl text-[#2D62CF] duration-500 ease-out hover:scale-125 hover:text-[#457ff3]" />
              </a>
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default AppBar
